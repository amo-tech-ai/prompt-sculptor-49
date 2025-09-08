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

async function seedSimpleData() {
  console.log('🌱 Seeding Simple Digital Agency Data...\n');
  
  try {
    // Step 1: Clear existing data
    console.log('🧹 Step 1: Clearing existing data...');
    await executeSql(`
      DELETE FROM case_studies;
      DELETE FROM services;
    `);
    console.log('✅ Existing data cleared\n');

    // Step 2: Add comprehensive services
    console.log('🛠️ Step 2: Adding comprehensive services...');
    await executeSql(`
      INSERT INTO services (id, name, slug, service_type, description, features, technologies, base_price, price_range_min, price_range_max, timeline_weeks_min, timeline_weeks_max, roi_percentage, is_active, created_at) VALUES
      ('550e8400-e29b-41d4-a716-446655440201', 'AI Marketplace Platform', 'ai-marketplace-platform', 'ai_marketplace', 'Complete marketplace solution with AI-powered search, recommendations, and multi-vendor support. Perfect for automotive, fashion, and service industries.', ARRAY['AI-powered search', 'Real-time inventory', 'Multi-vendor support', 'Payment processing', 'Admin dashboard', 'Mobile responsive', 'API integration'], ARRAY['React', 'Next.js', 'Supabase', 'OpenAI', 'Stripe', 'Vercel', 'TypeScript'], 75000.00, 75000.00, 250000.00, 8, 16, 293.00, true, NOW()),
      ('550e8400-e29b-41d4-a716-446655440202', 'Conversational AI System', 'conversational-ai-system', 'conversational_ai', 'GPT-4 and Claude-powered chatbots with CRM integration, multi-language support, and 70% auto-resolution rate.', ARRAY['GPT-4 integration', 'Multi-language support', 'CRM sync', 'WhatsApp API', 'Lead qualification', 'Sentiment analysis', '24/7 availability'], ARRAY['OpenAI API', 'Claude', 'WhatsApp Business', 'CRM APIs', 'Node.js', 'LangChain'], 25000.00, 15000.00, 60000.00, 2, 6, 185.00, true, NOW()),
      ('550e8400-e29b-41d4-a716-446655440203', 'Multi-Agent Automation', 'multi-agent-automation', 'multi_agent_system', 'CrewAI-powered multi-agent systems for complex workflow automation. Research, analysis, and execution agents working together.', ARRAY['CrewAI agents', 'Task delegation', 'Workflow orchestration', 'Performance monitoring', 'Decision trees', 'Tool integration'], ARRAY['CrewAI', 'LangGraph', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'], 40000.00, 30000.00, 120000.00, 4, 10, 220.00, true, NOW()),
      ('550e8400-e29b-41d4-a716-446655440204', 'Event Management Platform', 'event-management-platform', 'event_management', 'Complete event management solution with 3-minute setup, automated coordination, and real-time analytics. Perfect for fashion weeks, conferences, and festivals.', ARRAY['3-minute setup', '90% automation', 'Real-time coordination', 'Guest management', 'Vendor portal', 'Analytics dashboard'], ARRAY['React', 'Supabase', 'Stripe', 'n8n', 'WhatsApp API', 'Cloudinary'], 100000.00, 50000.00, 150000.00, 6, 12, 300.00, true, NOW()),
      ('550e8400-e29b-41d4-a716-446655440205', 'Tourism Platform', 'tourism-platform', 'tourism_platform', 'Multi-vertical tourism marketplace with booking system, AI concierge, and local payment integration.', ARRAY['Experience booking', 'Property rentals', 'AI concierge', 'Local payments', 'Multi-language', 'WhatsApp commerce'], ARRAY['Lovable', 'Supabase', 'Stripe', 'PSE', 'Nequi', 'WhatsApp API'], 60000.00, 40000.00, 120000.00, 6, 10, 250.00, true, NOW()),
      ('550e8400-e29b-41d4-a716-446655440206', 'E-Commerce Solution', 'ecommerce-solution', 'ecommerce_solution', 'Multi-vendor e-commerce platform with AI features, inventory management, and automated order processing.', ARRAY['Multi-vendor support', 'AI recommendations', 'Inventory sync', 'Order automation', 'Payment processing', 'Analytics'], ARRAY['Shopify', 'WooCommerce', 'Stripe', 'OpenAI', 'Cloudinary', 'n8n'], 50000.00, 40000.00, 100000.00, 4, 8, 275.00, true, NOW()),
      ('550e8400-e29b-41d4-a716-446655440207', 'Workflow Automation', 'workflow-automation', 'workflow_automation', 'n8n-powered workflow automation with WhatsApp integration, email sequences, and data synchronization.', ARRAY['Visual workflows', '400+ integrations', 'WhatsApp bots', 'Email automation', 'Data sync', 'Error handling'], ARRAY['n8n', 'WhatsApp Business', 'SendGrid', 'Zapier', 'Webhooks', 'APIs'], 15000.00, 10000.00, 40000.00, 1, 4, 350.00, true, NOW()),
      ('550e8400-e29b-41d4-a716-446655440208', 'RAG Knowledge System', 'rag-knowledge-system', 'rag_knowledge_system', 'Retrieval-Augmented Generation system for document search, Q&A, and semantic search with vector databases.', ARRAY['Document ingestion', 'Semantic search', 'Q&A system', 'Vector database', 'API endpoints', 'Admin panel'], ARRAY['LangChain', 'Pinecone', 'OpenAI Embeddings', 'FastAPI', 'PostgreSQL', 'Streamlit'], 30000.00, 20000.00, 80000.00, 3, 6, 180.00, true, NOW());
    `);
    console.log('✅ Services seeded');

    // Step 3: Add comprehensive case studies
    console.log('📚 Step 3: Adding comprehensive case studies...');
    await executeSql(`
      INSERT INTO case_studies (id, slug, title, client_name, industry, challenge, solution, results, technologies_used, is_featured, is_published, published_at, created_at) VALUES
      ('550e8400-e29b-41d4-a716-446655440301', 'fashionos-3-day-to-3-minute-transformation', 'FashionOS: From 3 Days to 3 Minutes', 'Fashion Week Global Inc.', 'Fashion & Events', 'Fashion Week Global was struggling with a complex 3-day event setup process that required 100+ staff members and had a 12% error rate. Manual coordination between designers, models, venues, and sponsors was overwhelming and costly.', 'We built FashionOS, a comprehensive AI-powered event management platform that automates 90% of the coordination process. The system includes designer portals, automated model casting, real-time venue management, and sponsor intelligence tracking.', 'Reduced event setup from 3 days to 3 minutes, achieved 90% automation rate, eliminated coordination errors, and increased sponsor satisfaction by 40%. The platform now manages 50+ events annually with 95% user satisfaction.', ARRAY['React', 'Next.js', 'Supabase', 'CrewAI', 'WhatsApp API', 'Stripe', 'n8n', 'Cloudinary'], true, true, NOW(), NOW()),
      ('550e8400-e29b-41d4-a716-446655440302', 'automax-4-million-monthly-gmv', 'AutoMax: $4.3M Monthly GMV with AI', 'AutoMax Dealer Network', 'Automotive', 'AutoMax needed to connect 500 dealers with a unified platform that could handle 50,000+ vehicle listings while providing intelligent search and recommendation capabilities for buyers.', 'We developed a comprehensive AI marketplace with advanced search algorithms, real-time inventory synchronization, and machine learning-powered recommendations. The platform includes dealer portals, finance integration, and mobile-first design.', 'Achieved $4.3M in monthly GMV within 6 months, connected 500+ dealers, enabled 95% search accuracy, and increased conversion rates by 60%. The platform now processes thousands of transactions monthly.', ARRAY['React', 'Next.js', 'Supabase', 'OpenAI', 'Elasticsearch', 'Stripe Connect', 'Three.js', 'Cloudinary'], true, true, NOW(), NOW()),
      ('550e8400-e29b-41d4-a716-446655440303', 'i-love-medellin-tourism-revolution', 'I Love Medellín: Tourism Revolution', 'I Love Medellín Tourism', 'Tourism & Hospitality', 'Medellín needed a comprehensive tourism platform that could handle experience booking, property rentals, and provide AI-powered concierge services while integrating with local payment methods.', 'We created a multi-vertical tourism marketplace with intelligent booking systems, AI concierge powered by Claude, and seamless integration with Colombian payment methods like PSE and Nequi.', 'Launched successfully with 50 properties, 120 experiences, 95% automation rate, and targeting $75K monthly revenue. Current conversion rate of 15% with strong local market penetration.', ARRAY['Lovable', 'Supabase', 'Stripe', 'PSE', 'Nequi', 'WhatsApp API', 'Claude'], true, true, NOW(), NOW()),
      ('550e8400-e29b-41d4-a716-446655440304', 'techstart-2-week-mvp-delivery', 'TechStart: 2-Week MVP for Y Combinator', 'TechStart Innovation Labs', 'Technology', 'Y Combinator startup needed rapid MVP development for their AI-powered SaaS platform. Traditional development would take 3-4 months, but they needed to launch in 2 weeks for demo day.', 'We used Lovable for rapid prototyping, Supabase for backend, and integrated OpenAI GPT-4 features. The entire platform was built and deployed in just 2 weeks with full functionality.', 'Delivered complete SaaS platform in 2 weeks, achieved 8.5/10 user testing score, minimal technical debt, and 15 core features. The startup successfully raised their next funding round.', ARRAY['Lovable', 'Supabase', 'Clerk', 'OpenAI', 'Stripe', 'n8n'], true, true, NOW(), NOW()),
      ('550e8400-e29b-41d4-a716-446655440305', 'greentech-solar-automation', 'GreenTech: Solar Installation Automation', 'GreenTech Solutions', 'Renewable Energy', 'GreenTech was manually managing 200+ solar panel installations monthly, with each installation requiring 2 hours of manual coordination, scheduling, and customer communication.', 'We implemented n8n workflow automation for scheduling, inventory management, and customer communication. The system integrates with Google Calendar, WhatsApp, and their existing CRM.', 'Reduced manual work by 85%, cut installation coordination time from 2 hours to 15 minutes, and improved customer satisfaction by 40%. The system now handles 200+ installations monthly with minimal human intervention.', ARRAY['n8n', 'WhatsApp API', 'Google Calendar API', 'Stripe', 'Twilio'], true, true, NOW(), NOW());
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

    console.log('\n🎉 Comprehensive digital agency data seeding completed successfully!');
    console.log('\n📋 What was seeded:');
    console.log('   ✅ 8 Professional Services (AI Marketplace, Conversational AI, Multi-Agent, etc.)');
    console.log('   ✅ 5 Detailed Case Studies (Real-world success stories)');
    
    console.log('\n💼 Business Impact Highlights:');
    console.log('   • FashionOS: 3-day setup → 3-minute automation (300% ROI)');
    console.log('   • AutoMax: $4.3M monthly GMV with AI marketplace');
    console.log('   • I Love Medellín: Tourism platform targeting $75K monthly revenue');
    console.log('   • TechStart: 2-week MVP delivery for Y Combinator startup');
    console.log('   • GreenTech: 85% reduction in manual solar installation work');
    
    console.log('\n🚀 Your AI agency database now has comprehensive, realistic data!');
    
  } catch (error) {
    console.error('\n❌ Data seeding failed:', error.message);
    process.exit(1);
  }
}

seedSimpleData();
