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

async function seedEssentialData() {
  console.log('🌱 Seeding Essential Digital Agency Data...\n');
  
  try {
    // Step 1: Clear existing data
    console.log('🧹 Step 1: Clearing existing data...');
    await executeSql(`
      DELETE FROM case_studies;
      DELETE FROM services;
    `);
    console.log('✅ Existing data cleared\n');

    // Step 2: Seed Services
    console.log('🛠️ Step 2: Seeding services...');
    await executeSql(`
      INSERT INTO services (id, name, slug, service_type, description, features, technologies, base_price, price_range_min, price_range_max, timeline_weeks_min, timeline_weeks_max, roi_percentage, is_active, created_at) VALUES
      ('550e8400-e29b-41d4-a716-446655440101', 'AI Marketplace Platform', 'ai-marketplace-platform', 'ai_marketplace', 'Build intelligent marketplace with AI-powered recommendations and automation', ARRAY['AI Recommendations', 'Multi-vendor Support', 'Smart Search', 'Automated Matching'], ARRAY['Claude 3', 'GPT-4', 'React', 'Supabase'], 50000, 30000, 100000, 4, 12, 300, true, NOW()),
      ('550e8400-e29b-41d4-a716-446655440102', 'Conversational AI Assistant', 'conversational-ai-assistant', 'conversational_ai', 'Intelligent customer service and support systems', ARRAY['Natural Language Processing', 'Multi-channel Support', 'Learning Capabilities', 'Analytics Dashboard'], ARRAY['Claude 3', 'LangChain', 'WhatsApp', 'Supabase'], 30000, 20000, 60000, 3, 8, 350, true, NOW()),
      ('550e8400-e29b-41d4-a716-446655440103', 'Multi-Agent System', 'multi-agent-system', 'multi_agent_system', 'Build sophisticated AI agents that work together', ARRAY['Agent Coordination', 'Task Distribution', 'Intelligent Routing', 'Performance Monitoring'], ARRAY['CrewAI', 'Claude 3', 'Python', 'PostgreSQL'], 60000, 40000, 120000, 6, 16, 320, true, NOW()),
      ('550e8400-e29b-41d4-a716-446655440104', 'Event Management Platform', 'event-management-platform', 'event_management', 'Complete event management with AI automation', ARRAY['Event Planning', 'Attendee Management', 'Payment Processing', 'Analytics Dashboard'], ARRAY['React', 'Supabase', 'Stripe', 'n8n'], 35000, 25000, 70000, 4, 10, 280, true, NOW()),
      ('550e8400-e29b-41d4-a716-446655440105', 'Tourism Platform', 'tourism-platform', 'tourism_platform', 'AI-powered tourism and travel platform', ARRAY['Destination Recommendations', 'Booking Management', 'Local Insights', 'Multi-language Support'], ARRAY['React', 'Claude 3', 'Maps API', 'Stripe'], 40000, 30000, 80000, 5, 12, 310, true, NOW()),
      ('550e8400-e29b-41d4-a716-446655440106', 'E-commerce Solution', 'ecommerce-solution', 'ecommerce_solution', 'Complete online store with AI recommendations', ARRAY['AI Recommendations', 'Payment Processing', 'Inventory Management', 'Customer Analytics'], ARRAY['Shopify', 'Stripe', 'Claude 3', 'React'], 35000, 20000, 70000, 4, 10, 320, true, NOW()),
      ('550e8400-e29b-41d4-a716-446655440107', 'RAG Knowledge System', 'rag-knowledge-system', 'rag_knowledge_system', 'Intelligent knowledge base with retrieval-augmented generation', ARRAY['Document Processing', 'Semantic Search', 'Knowledge Extraction', 'Question Answering'], ARRAY['Claude 3', 'Pinecone', 'Python', 'React'], 45000, 30000, 90000, 6, 14, 290, true, NOW()),
      ('550e8400-e29b-41d4-a716-446655440108', 'Workflow Automation', 'workflow-automation', 'workflow_automation', 'Automate repetitive tasks and workflows', ARRAY['Workflow Automation', 'API Integrations', 'Custom Triggers', 'Monitoring Dashboard'], ARRAY['n8n', 'Zapier', 'WhatsApp API', 'Stripe'], 20000, 10000, 40000, 2, 6, 380, true, NOW());
    `);
    console.log('✅ Services seeded');

    // Step 3: Seed Case Studies
    console.log('📚 Step 3: Seeding case studies...');
    await executeSql(`
      INSERT INTO case_studies (id, slug, title, client_name, industry, challenge, solution, results, technologies_used, is_featured, is_published, published_at, created_at) VALUES
      ('550e8400-e29b-41d4-a716-446655440201', 'fashionos-automation', 'FashionOS: 3-Day Setup to 3-Minute Automation', 'Fashion Forward', 'Retail', 'Manual inventory management taking 3 days per week', 'AI-powered inventory system with real-time updates', 'Reduced setup time by 99%, 90% of tasks automated', ARRAY['Claude 3', 'React', 'Supabase', 'Stripe'], true, true, NOW(), NOW()),
      ('550e8400-e29b-41d4-a716-446655440202', 'startupxyz-ecommerce', 'StartupXYZ: From Idea to $50K Revenue in 6 Weeks', 'StartupXYZ', 'E-commerce', 'Need to launch e-commerce platform quickly', 'Rapid MVP development with AI recommendations', 'Launched in 6 weeks, $50K revenue in first month', ARRAY['Lovable', 'Stripe', 'Claude 3', 'n8n'], true, true, NOW(), NOW()),
      ('550e8400-e29b-41d4-a716-446655440203', 'medicare-patient-portal', 'MediCare Plus: 40% Reduction in Patient Wait Times', 'MediCare Plus', 'Healthcare', 'Long patient wait times and scheduling conflicts', 'Intelligent appointment scheduling system', '40% reduction in wait times, 95% patient satisfaction', ARRAY['React', 'Supabase', 'Claude 3', 'WhatsApp API'], true, true, NOW(), NOW()),
      ('550e8400-e29b-41d4-a716-446655440204', 'edutech-ai-learning', 'EduTech: Personalized Learning at Scale', 'EduTech Innovations', 'Education', 'One-size-fits-all learning approach', 'AI-powered personalized learning paths', '60% improvement in student engagement, 35% faster learning', ARRAY['Claude 3', 'React', 'PostgreSQL', 'Pinecone'], true, true, NOW(), NOW()),
      ('550e8400-e29b-41d4-a716-446655440205', 'fintech-fraud-detection', 'FinTech: Fraud Detection with 99.9% Accuracy', 'FinTech Solutions', 'Finance', 'High fraud rates in payment processing', 'AI-powered fraud detection system', '99.9% fraud detection accuracy, 80% reduction in false positives', ARRAY['Python', 'Claude 3', 'PostgreSQL', 'React'], true, true, NOW(), NOW());
    `);
    console.log('✅ Case studies seeded');

    // Final verification
    console.log('\n🔍 Final verification...');
    const verification = await executeSql(`
      SELECT 
        'services' as table_name, COUNT(*) as count FROM services
      UNION ALL
      SELECT 'case_studies', COUNT(*) FROM case_studies
      ORDER BY table_name;
    `);

    if (verification.data && verification.data.length > 0) {
      console.log('\n📊 Data Summary:');
      verification.data.forEach(row => {
        console.log(`   ${row.table_name}: ${row.count} records`);
      });
    }

    console.log('\n🎉 Essential digital agency data seeding completed successfully!');
    console.log('\n📋 What was seeded:');
    console.log('   ✅ 8 Services (AI development, automation, e-commerce, etc.)');
    console.log('   ✅ 5 Case Studies (real-world success stories)');
    
    console.log('\n🚀 Your AI agency database now has realistic, comprehensive data!');
    
  } catch (error) {
    console.error('\n❌ Data seeding failed:', error.message);
    process.exit(1);
  }
}

seedEssentialData();
