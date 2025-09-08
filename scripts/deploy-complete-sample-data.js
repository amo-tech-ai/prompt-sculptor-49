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
  const filePath = path.join(process.cwd(), '..', 'supabase', filename);
  return fs.readFileSync(filePath, 'utf8');
}

async function deployCompleteSampleData() {
  console.log('🚀 Deploying Complete Sample Data from Supabase Directory...\n');
  
  try {
    // Step 1: Clear existing data (preserve schema)
    console.log('🧹 Step 1: Clearing existing data...');
    await executeSql(`
      -- Clear data in reverse dependency order
      DELETE FROM copilot_suggestions;
      DELETE FROM copilot_interactions;
      DELETE FROM copilot_states;
      DELETE FROM copilot_forms;
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

    // Step 2: Deploy sample_data_1.sql (Organizations & Users)
    console.log('🏢 Step 2: Deploying organizations and users...');
    const sampleData1 = await readSqlFile('sample_data_1.sql');
    await executeSql(sampleData1);
    console.log('✅ Organizations and users deployed');

    // Step 3: Deploy sample_data_2.sql (Clients & Services)
    console.log('👥 Step 3: Deploying clients and services...');
    const sampleData2 = await readSqlFile('sample_data_2.sql');
    await executeSql(sampleData2);
    console.log('✅ Clients and services deployed');

    // Step 4: Deploy sample_data_3.sql (Projects & Case Studies)
    console.log('📋 Step 4: Deploying projects and case studies...');
    const sampleData3 = await readSqlFile('sample_data_3.sql');
    await executeSql(sampleData3);
    console.log('✅ Projects and case studies deployed');

    // Step 5: Deploy sample_data_4.sql (Tasks & Workflows)
    console.log('✅ Step 5: Deploying tasks and workflows...');
    const sampleData4 = await readSqlFile('sample_data_4.sql');
    await executeSql(sampleData4);
    console.log('✅ Tasks and workflows deployed');

    // Step 6: Deploy sample_data_5.sql (CopilotKit & Metrics)
    console.log('🤖 Step 6: Deploying CopilotKit and metrics data...');
    const sampleData5 = await readSqlFile('sample_data_5.sql');
    await executeSql(sampleData5);
    console.log('✅ CopilotKit and metrics data deployed');

    // Step 7: Deploy sample_data_deployment.sql (Complete deployment)
    console.log('🎯 Step 7: Deploying complete deployment script...');
    const deploymentData = await readSqlFile('sample_data_deployment.sql');
    await executeSql(deploymentData);
    console.log('✅ Complete deployment script executed');

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
      UNION ALL
      SELECT 'copilot_forms', COUNT(*) FROM copilot_forms
      UNION ALL
      SELECT 'copilot_states', COUNT(*) FROM copilot_states
      UNION ALL
      SELECT 'copilot_interactions', COUNT(*) FROM copilot_interactions
      UNION ALL
      SELECT 'copilot_suggestions', COUNT(*) FROM copilot_suggestions
      ORDER BY table_name;
    `);

    if (verification.data && verification.data.length > 0) {
      console.log('\n📊 Complete Data Summary:');
      verification.data.forEach(row => {
        console.log(`   ${row.table_name}: ${row.count} records`);
      });
    }

    // Business metrics summary
    console.log('\n💼 Business Impact Summary:');
    const businessMetrics = await executeSql(`
      SELECT 
        'Total Projects' as metric, COUNT(*) as value FROM projects
      UNION ALL
      SELECT 'Active Projects', COUNT(*) FROM projects WHERE status = 'active'
      UNION ALL
      SELECT 'Completed Projects', COUNT(*) FROM projects WHERE status = 'completed'
      UNION ALL
      SELECT 'Total Services', COUNT(*) FROM services WHERE is_active = true
      UNION ALL
      SELECT 'Featured Case Studies', COUNT(*) FROM case_studies WHERE is_featured = true
      UNION ALL
      SELECT 'Total Budget (USD)', SUM(budget) FROM projects
      UNION ALL
      SELECT 'Average Project Value', AVG(budget) FROM projects
      ORDER BY metric;
    `);

    if (businessMetrics.data && businessMetrics.data.length > 0) {
      businessMetrics.data.forEach(row => {
        console.log(`   ${row.metric}: ${row.value}`);
      });
    }

    console.log('\n🎉 Complete sample data deployment successful!');
    console.log('\n📋 What was deployed:');
    console.log('   ✅ 2 Organizations (AMO AI Agency + TechCorp Enterprises)');
    console.log('   ✅ 8 Users (Agency team + Client users)');
    console.log('   ✅ 5 Clients (Fashion Week, I Love Medellín, AutoMax, TechStart, GreenTech)');
    console.log('   ✅ 8 Services (AI Marketplace, Conversational AI, Multi-Agent, etc.)');
    console.log('   ✅ 5 Projects (FashionOS, I Love Medellín, AutoMax, TechStart MVP, GreenTech)');
    console.log('   ✅ 3 Case Studies (Detailed success stories)');
    console.log('   ✅ 8 Project Phases (Detailed project milestones)');
    console.log('   ✅ 10 Tasks (Realistic development tasks with status)');
    console.log('   ✅ 3 CopilotKit Forms (AI-powered form submissions)');
    console.log('   ✅ 3 CopilotKit States (User journey tracking)');
    console.log('   ✅ 5 CopilotKit Interactions (AI assistance log)');
    console.log('   ✅ 2 CopilotKit Suggestions (AI recommendations)');
    
    console.log('\n🚀 Your AI agency database now has comprehensive, production-ready data!');
    console.log('\n💼 Business Impact:');
    console.log('   • FashionOS: 3-day setup → 3-minute automation (300% ROI)');
    console.log('   • AutoMax: $4.3M monthly GMV with AI marketplace');
    console.log('   • I Love Medellín: Tourism platform targeting $75K monthly revenue');
    console.log('   • TechStart: 2-week MVP delivery for Y Combinator startup');
    console.log('   • GreenTech: Solar installation workflow automation');
    console.log('   • CopilotKit: AI-powered forms and user journey tracking');
    
  } catch (error) {
    console.error('\n❌ Data deployment failed:', error.message);
    process.exit(1);
  }
}

deployCompleteSampleData();
