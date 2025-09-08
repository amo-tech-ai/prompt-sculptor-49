import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Supabase configuration from environment
const PROJECT_REF = 'vwcbdfendlvdaubnsblo';
const ACCESS_TOKEN = 'sbp_2db972c8139f64dd6c63afdcad1f69e7f5dfa851';

/**
 * Execute SQL on Supabase using Management API
 */
async function executeSql(sql) {
  const data = JSON.stringify({ query: sql });
  
  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: 'api.supabase.io',
      path: `/v1/projects/${PROJECT_REF}/database/query`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data),
      },
    }, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        if (res.statusCode !== 200 && res.statusCode !== 201) {
          console.error(`HTTP ${res.statusCode}: ${body}`);
          return reject(new Error(`API request failed: ${res.statusCode}`));
        }
        try {
          const result = JSON.parse(body);
          resolve(result);
        } catch (error) {
          reject(new Error('Invalid JSON response'));
        }
      });
    });
    
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

/**
 * Read and execute SQL file
 */
async function executeSqlFile(filePath) {
  try {
    const sql = fs.readFileSync(filePath, 'utf8');
    console.log(`\n📄 Executing: ${path.basename(filePath)}`);
    
    const result = await executeSql(sql);
    
    if (result.error) {
      console.error(`❌ Error: ${result.error.message}`);
      return false;
    }
    
    console.log(`✅ Success: ${path.basename(filePath)}`);
    if (result.data && result.data.length > 0) {
      console.log(`   Rows affected: ${result.data.length}`);
    }
    return true;
  } catch (error) {
    console.error(`❌ Failed to execute ${filePath}:`, error.message);
    return false;
  }
}

/**
 * Main setup function
 */
async function setupDatabase() {
  console.log('🚀 Setting up AMO AI Agency Database Schema...\n');
  
  try {
    // Test connection first
    console.log('🔍 Testing database connection...');
    const testResult = await executeSql(`
      SELECT 'Connection successful' as status, 
             current_database() as database, 
             current_user as user,
             version() as version;
    `);
    
    if (testResult.error) {
      throw new Error(`Connection failed: ${testResult.error.message}`);
    }
    
    console.log('✅ Database connection successful');
    if (testResult.data && testResult.data.length > 0) {
      console.log(`   Database: ${testResult.data[0].database}`);
      console.log(`   User: ${testResult.data[0].user}`);
      console.log(`   Version: ${testResult.data[0].version.split(' ')[0]}\n`);
    } else {
      console.log('   Connection verified\n');
    }
    
    // Execute the complete schema
    const schemaPath = path.join(__dirname, '../supabase/amo-ai-agency-schema.sql');
    
    if (!fs.existsSync(schemaPath)) {
      throw new Error(`Schema file not found: ${schemaPath}`);
    }
    
    console.log('📋 Executing complete AI agency schema...');
    const success = await executeSqlFile(schemaPath);
    
    if (!success) {
      throw new Error('Schema execution failed');
    }
    
    // Verify tables were created
    console.log('\n🔍 Verifying table creation...');
    const tablesResult = await executeSql(`
      SELECT schemaname, tablename, tableowner
      FROM pg_tables 
      WHERE schemaname = 'public' 
      ORDER BY tablename;
    `);
    
    if (tablesResult.error) {
      throw new Error(`Failed to verify tables: ${tablesResult.error.message}`);
    }
    
    if (tablesResult.data && tablesResult.data.length > 0) {
      console.log(`✅ Created ${tablesResult.data.length} tables:`);
      tablesResult.data.forEach(table => {
        console.log(`   - ${table.tablename}`);
      });
    } else {
      console.log('⚠️  No tables found in public schema');
    }
    
    // Check for seed data
    console.log('\n🌱 Checking seed data...');
    const servicesResult = await executeSql(`
      SELECT COUNT(*) as count FROM services;
    `);
    
    if (servicesResult.data && servicesResult.data.length > 0 && servicesResult.data[0].count > 0) {
      console.log(`✅ Services seeded: ${servicesResult.data[0].count} records`);
    } else {
      console.log('⚠️  No services found - seed data may not have been inserted');
    }
    
    console.log('\n🎉 Database setup completed successfully!');
    console.log('\n📊 Next steps:');
    console.log('   1. Configure Row Level Security policies');
    console.log('   2. Set up authentication');
    console.log('   3. Test API endpoints');
    console.log('   4. Generate TypeScript types');
    
  } catch (error) {
    console.error('\n❌ Database setup failed:', error.message);
    process.exit(1);
  }
}

// Run the setup
setupDatabase();
