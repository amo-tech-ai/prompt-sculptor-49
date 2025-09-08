import https from 'https';

const PROJECT_REF = 'vwcbdfendlvdaubnsblo';
const ACCESS_TOKEN = 'sbp_2db972c8139f64dd6c63afdcad1f69e7f5dfa851';

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

async function verifyDatabase() {
  console.log('🔍 Verifying database setup...\n');
  
  try {
    // Check tables
    console.log('📋 Checking tables...');
    const tablesResult = await executeSql(`
      SELECT tablename FROM pg_tables 
      WHERE schemaname = 'public' 
      ORDER BY tablename;
    `);
    
    if (tablesResult.data && tablesResult.data.length > 0) {
      console.log(`✅ Found ${tablesResult.data.length} tables:`);
      tablesResult.data.forEach(table => {
        console.log(`   - ${table.tablename}`);
      });
    } else {
      console.log('⚠️  No tables found');
    }
    
    // Check services
    console.log('\n🌱 Checking services...');
    const servicesResult = await executeSql(`
      SELECT COUNT(*) as count FROM services;
    `);
    
    if (servicesResult.data && servicesResult.data.length > 0) {
      console.log(`✅ Services: ${servicesResult.data[0].count} records`);
    }
    
    // Check case studies
    console.log('\n📊 Checking case studies...');
    const caseStudiesResult = await executeSql(`
      SELECT COUNT(*) as count FROM case_studies;
    `);
    
    if (caseStudiesResult.data && caseStudiesResult.data.length > 0) {
      console.log(`✅ Case studies: ${caseStudiesResult.data[0].count} records`);
    }
    
    console.log('\n🎉 Database verification completed!');
    
  } catch (error) {
    console.error('❌ Verification failed:', error.message);
  }
}

verifyDatabase();
