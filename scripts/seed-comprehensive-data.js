import https from 'https';
import fs from 'fs';
import path from 'path';

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

async function readSqlFile(filename) {
  const filePath = path.join(process.cwd(), 'supabase', filename);
  return fs.readFileSync(filePath, 'utf8');
}

async function seedComprehensiveData() {
  console.log('🌱 Seeding Comprehensive Digital Agency Data...\n');
  
  try {
    // Step 1: Clear existing data (except system data)
    console.log('🧹 Step 1: Clearing existing data...');
    await executeSql(`
      -- Clear data in reverse dependency order
      DELETE FROM task_comments;
      DELETE FROM tasks;
      DELETE FROM project_phases;
      DELETE FROM project_metrics;
      DELETE FROM service_metrics;
      DELETE FROM expenses;
      DELETE FROM invoices;
      DELETE FROM case_studies;
      DELETE FROM blog_posts;
      DELETE FROM content_pages;
      DELETE FROM notifications;
      DELETE FROM activity_logs;
      DELETE FROM projects;
      DELETE FROM clients;
      DELETE FROM services;
      DELETE FROM users WHERE role != 'super_admin';
      DELETE FROM organizations WHERE name != 'AMO AI Agency';
    `);
    console.log('✅ Existing data cleared\n');

    // Step 2: Load and execute sample_data_1.sql (Organizations & Users)
    console.log('🏢 Step 2: Loading organizations and users...');
    const sampleData1 = await readSqlFile('sample_data_1.sql');
    await executeSql(sampleData1);
    console.log('✅ Organizations and users seeded');

    // Step 3: Load and execute sample_data_2.sql (Clients & Services)
    console.log('👥 Step 3: Loading clients and services...');
    const sampleData2 = await readSqlFile('sample_data_2.sql');
    await executeSql(sampleData2);
    console.log('✅ Clients and services seeded');

    // Step 4: Load and execute sample_data_3.sql (Projects & Case Studies)
    console.log('📋 Step 4: Loading projects and case studies...');
    const sampleData3 = await readSqlFile('sample_data_3.sql');
    await executeSql(sampleData3);
    console.log('✅ Projects and case studies seeded');

    // Step 5: Load and execute sample_data_4.sql (Tasks & Workflows)
    console.log('✅ Step 5: Loading tasks and workflows...');
    const sampleData4 = await readSqlFile('sample_data_4.sql');
    await executeSql(sampleData4);
    console.log('✅ Tasks and workflows seeded');

    // Final verification
    console.log('\n🔍 Final verification...');
    const verification = await executeSql(`
      SELECT 
        'organizations' as table_name, COUNT(*) as count FROM organizations
      UNION ALL
      SELECT 'users', COUNT(*) FROM users
      UNION ALL
      SELECT 'clients', COUNT(*) FROM clients
      UNION ALL
      SELECT 'services', COUNT(*) FROM services
      UNION ALL
      SELECT 'projects', COUNT(*) FROM projects
      UNION ALL
      SELECT 'case_studies', COUNT(*) FROM case_studies
      UNION ALL
      SELECT 'project_phases', COUNT(*) FROM project_phases
      UNION ALL
      SELECT 'tasks', COUNT(*) FROM tasks
      ORDER BY table_name;
    `);

    if (verification.data && verification.data.length > 0) {
      console.log('\n📊 Data Summary:');
      verification.data.forEach(row => {
        console.log(`   ${row.table_name}: ${row.count} records`);
      });
    }

    console.log('\n🎉 Comprehensive digital agency data seeding completed successfully!');
    console.log('\n📋 What was seeded:');
    console.log('   ✅ 2 Organizations (AMO AI Agency + TechCorp Enterprises)');
    console.log('   ✅ 8 Users (Agency team + Client users)');
    console.log('   ✅ 5 Clients (Fashion Week, I Love Medellín, AutoMax, TechStart, GreenTech)');
    console.log('   ✅ 8 Services (AI Marketplace, Conversational AI, Multi-Agent, etc.)');
    console.log('   ✅ 5 Projects (FashionOS, I Love Medellín, AutoMax, TechStart MVP, GreenTech)');
    console.log('   ✅ 3 Case Studies (Detailed success stories)');
    console.log('   ✅ 8 Project Phases (Detailed project milestones)');
    console.log('   ✅ 10 Tasks (Realistic development tasks with status)');
    
    console.log('\n🚀 Your AI agency database now has comprehensive, realistic data!');
    console.log('\n💼 Business Impact:');
    console.log('   • FashionOS: 3-day setup → 3-minute automation (300% ROI)');
    console.log('   • AutoMax: $4.3M monthly GMV with AI marketplace');
    console.log('   • I Love Medellín: Tourism platform targeting $75K monthly revenue');
    console.log('   • TechStart: 2-week MVP delivery for Y Combinator startup');
    console.log('   • GreenTech: Solar installation workflow automation');
    
  } catch (error) {
    console.error('\n❌ Data seeding failed:', error.message);
    process.exit(1);
  }
}

seedComprehensiveData();
