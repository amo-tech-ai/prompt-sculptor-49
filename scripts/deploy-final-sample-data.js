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

async function deployFinalSampleData() {
  console.log('🚀 Deploying Final Complete Sample Data...\n');
  
  try {
    // Step 1: Clear existing data
    console.log('🧹 Step 1: Clearing existing data...');
    await executeSql(`
      DELETE FROM case_studies;
      DELETE FROM services;
      DELETE FROM clients;
      DELETE FROM users WHERE role != 'super_admin';
      DELETE FROM organizations WHERE name != 'AMO AI Agency';
    `);
    console.log('✅ Existing data cleared\n');

    // Step 2: Deploy Organizations & Users
    console.log('🏢 Step 2: Deploying organizations and users...');
    await executeSql(`
      INSERT INTO organizations (id, name, slug, logo_url, website, description, settings) VALUES
      ('550e8400-e29b-41d4-a716-446655440001', 'AMO AI Digital Agency', 'amo-ai-agency', 'https://cdn.amoai.agency/logo.png', 'https://amoai.agency', 'Leading AI development agency specializing in rapid deployment using Claude, GPT-4, CrewAI, and modern tech stacks', '{"theme": "dark", "timezone": "America/New_York", "billing_currency": "USD"}'::jsonb),
      ('550e8400-e29b-41d4-a716-446655440002', 'TechCorp Enterprises', 'techcorp-enterprises', 'https://techcorp.com/logo.png', 'https://techcorp.com', 'Large enterprise technology consulting firm', '{"theme": "light", "timezone": "UTC", "billing_currency": "EUR"}'::jsonb);

      INSERT INTO users (id, organization_id, email, full_name, avatar_url, role, phone, timezone, preferences, is_active) VALUES
      ('11111111-1111-1111-1111-111111111111', '550e8400-e29b-41d4-a716-446655440001', 'alex@amoai.agency', 'Alex Rodriguez', 'https://cdn.amoai.agency/avatars/alex.jpg', 'super_admin', '+1-555-0101', 'America/New_York', '{"notifications": true, "dark_mode": true, "language": "en"}'::jsonb, true),
      ('22222222-2222-2222-2222-222222222222', '550e8400-e29b-41d4-a716-446655440001', 'sarah.chen@amoai.agency', 'Sarah Chen', 'https://cdn.amoai.agency/avatars/sarah.jpg', 'project_manager', '+1-555-0102', 'America/Los_Angeles', '{"notifications": true, "dark_mode": false, "language": "en"}'::jsonb, true),
      ('33333333-3333-3333-3333-333333333333', '550e8400-e29b-41d4-a716-446655440001', 'marcus.dev@amoai.agency', 'Marcus Johnson', 'https://cdn.amoai.agency/avatars/marcus.jpg', 'developer', '+1-555-0103', 'America/Chicago', '{"notifications": false, "dark_mode": true, "language": "en"}'::jsonb, true),
      ('44444444-4444-4444-4444-444444444444', '550e8400-e29b-41d4-a716-446655440001', 'elena.design@amoai.agency', 'Elena Vasquez', 'https://cdn.amoai.agency/avatars/elena.jpg', 'designer', '+1-555-0104', 'America/Denver', '{"notifications": true, "dark_mode": false, "language": "es"}'::jsonb, true),
      ('55555555-5555-5555-5555-555555555555', '550e8400-e29b-41d4-a716-446655440001', 'james.sales@amoai.agency', 'James Wright', 'https://cdn.amoai.agency/avatars/james.jpg', 'sales', '+1-555-0105', 'America/New_York', '{"notifications": true, "dark_mode": false, "language": "en"}'::jsonb, true),
      ('66666666-6666-6666-6666-666666666666', '550e8400-e29b-41d4-a716-446655440002', 'david.kim@fashionweek.com', 'David Kim', 'https://fashionweek.com/avatars/david.jpg', 'client', '+1-555-0201', 'America/New_York', '{"notifications": true, "dark_mode": false, "language": "en"}'::jsonb, true),
      ('77777777-7777-7777-7777-777777777777', '550e8400-e29b-41d4-a716-446655440002', 'maria.gonzalez@ilovemedellin.co', 'Maria Gonzalez', 'https://ilovemedellin.co/avatars/maria.jpg', 'client', '+57-300-123-4567', 'America/Bogota', '{"notifications": true, "dark_mode": false, "language": "es"}'::jsonb, true),
      ('88888888-8888-8888-8888-888888888888', '550e8400-e29b-41d4-a716-446655440002', 'robert.wilson@automax.com', 'Robert Wilson', 'https://automax.com/avatars/robert.jpg', 'client', '+1-555-0203', 'America/Detroit', '{"notifications": false, "dark_mode": true, "language": "en"}'::jsonb, true);
    `);
    console.log('✅ Organizations and users deployed');

    // Step 3: Deploy Clients & Services
    console.log('👥 Step 3: Deploying clients and services...');
    await executeSql(`
      INSERT INTO clients (id, organization_id, company_name, contact_person, email, phone, address, country, website, industry, company_size, annual_revenue, notes, tags, lead_source, assigned_to) VALUES
      ('c1111111-1111-1111-1111-111111111111', '550e8400-e29b-41d4-a716-446655440001', 'Fashion Week Global Inc.', 'David Kim', 'david.kim@fashionweek.com', '+1-212-555-0001', '450 West 33rd Street, New York, NY 10001', 'United States', 'https://fashionweek.com', 'Fashion & Events', '201-500', '$10M-$50M', 'Major fashion week organizer seeking complete automation of event management processes. Currently takes 3 days to set up events, wants to reduce to 3 minutes.', ARRAY['fashion', 'events', 'automation', 'high-priority'], 'referral', '22222222-2222-2222-2222-222222222222'),
      ('c2222222-2222-2222-2222-222222222222', '550e8400-e29b-41d4-a716-446655440001', 'I Love Medellín Tourism', 'Maria Gonzalez', 'maria.gonzalez@ilovemedellin.co', '+57-4-444-5555', 'Carrera 43A #1-50, El Poblado, Medellín, Colombia', 'Colombia', 'https://ilovemedellin.co', 'Tourism & Hospitality', '11-50', '$1M-$5M', 'Tourism marketplace for Medellín. Needs booking system, AI concierge, WhatsApp integration for local market. Target: $75K monthly revenue.', ARRAY['tourism', 'marketplace', 'colombia', 'whatsapp'], 'website', '22222222-2222-2222-2222-222222222222'),
      ('c3333333-3333-3333-3333-333333333333', '550e8400-e29b-41d4-a716-446655440001', 'AutoMax Dealer Network', 'Robert Wilson', 'robert.wilson@automax.com', '+1-313-555-0003', '1234 Michigan Avenue, Detroit, MI 48226', 'United States', 'https://automax.com', 'Automotive', '1001-5000', '$100M+', 'Large automotive dealer network needing AI-powered marketplace. 500 dealers, 50K+ vehicles. Currently processing $4.3M monthly GMV.', ARRAY['automotive', 'marketplace', 'enterprise', 'ai-search'], 'cold_outreach', '55555555-5555-5555-5555-555555555555'),
      ('c4444444-4444-4444-4444-444444444444', '550e8400-e29b-41d4-a716-446655440001', 'TechStart Innovation Labs', 'Jennifer Park', 'jennifer.park@techstart.io', '+1-650-555-0004', '1 Hacker Way, Palo Alto, CA 94301', 'United States', 'https://techstart.io', 'Technology', '51-200', '$5M-$10M', 'Y Combinator startup needing rapid MVP development. Looking for AI-powered SaaS platform with 2-week delivery.', ARRAY['startup', 'mvp', 'saas', 'rapid-development'], 'linkedin', '33333333-3333-3333-3333-333333333333'),
      ('c5555555-5555-5555-5555-555555555555', '550e8400-e29b-41d4-a716-446655440001', 'GreenTech Solutions', 'Carlos Mendoza', 'carlos.mendoza@greentech.mx', '+52-55-1234-5678', 'Polanco, Mexico City, Mexico', 'Mexico', 'https://greentech.mx', 'Renewable Energy', '11-50', '$1M-$5M', 'Renewable energy company needing workflow automation for solar panel installations. 200+ installations monthly.', ARRAY['renewable-energy', 'automation', 'mexico', 'workflow'], 'partner_referral', '22222222-2222-2222-2222-222222222222');

      INSERT INTO services (id, name, slug, service_type, description, features, technologies, base_price, price_range_min, price_range_max, timeline_weeks_min, timeline_weeks_max, roi_percentage, is_active, metadata) VALUES
      ('550e8400-e29b-41d4-a716-446655440201', 'AI Marketplace Platform', 'ai-marketplace-platform', 'ai_marketplace', 'Complete marketplace solution with AI-powered search, recommendations, and multi-vendor support. Perfect for automotive, fashion, and service industries.', ARRAY['AI-powered search', 'Real-time inventory', 'Multi-vendor support', 'Payment processing', 'Admin dashboard', 'Mobile responsive', 'API integration'], ARRAY['React', 'Next.js', 'Supabase', 'OpenAI', 'Stripe', 'Vercel', 'TypeScript'], 75000.00, 75000.00, 250000.00, 8, 16, 293.00, true, '{"complexity": "high", "team_size": 4, "maintenance_level": "enterprise"}'::jsonb),
      ('550e8400-e29b-41d4-a716-446655440202', 'Conversational AI System', 'conversational-ai-system', 'conversational_ai', 'GPT-4 and Claude-powered chatbots with CRM integration, multi-language support, and 70% auto-resolution rate.', ARRAY['GPT-4 integration', 'Multi-language support', 'CRM sync', 'WhatsApp API', 'Lead qualification', 'Sentiment analysis', '24/7 availability'], ARRAY['OpenAI API', 'Claude', 'WhatsApp Business', 'CRM APIs', 'Node.js', 'LangChain'], 25000.00, 15000.00, 60000.00, 2, 6, 185.00, true, '{"complexity": "medium", "team_size": 2, "maintenance_level": "standard"}'::jsonb),
      ('550e8400-e29b-41d4-a716-446655440203', 'Multi-Agent Automation', 'multi-agent-automation', 'multi_agent_system', 'CrewAI-powered multi-agent systems for complex workflow automation. Research, analysis, and execution agents working together.', ARRAY['CrewAI agents', 'Task delegation', 'Workflow orchestration', 'Performance monitoring', 'Decision trees', 'Tool integration'], ARRAY['CrewAI', 'LangGraph', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'], 40000.00, 30000.00, 120000.00, 4, 10, 220.00, true, '{"complexity": "high", "team_size": 3, "maintenance_level": "enterprise"}'::jsonb),
      ('550e8400-e29b-41d4-a716-446655440204', 'Event Management Platform', 'event-management-platform', 'event_management', 'Complete event management solution with 3-minute setup, automated coordination, and real-time analytics. Perfect for fashion weeks, conferences, and festivals.', ARRAY['3-minute setup', '90% automation', 'Real-time coordination', 'Guest management', 'Vendor portal', 'Analytics dashboard'], ARRAY['React', 'Supabase', 'Stripe', 'n8n', 'WhatsApp API', 'Cloudinary'], 100000.00, 50000.00, 150000.00, 6, 12, 300.00, true, '{"complexity": "high", "team_size": 4, "maintenance_level": "enterprise"}'::jsonb),
      ('550e8400-e29b-41d4-a716-446655440205', 'Tourism Platform', 'tourism-platform', 'tourism_platform', 'Multi-vertical tourism marketplace with booking system, AI concierge, and local payment integration.', ARRAY['Experience booking', 'Property rentals', 'AI concierge', 'Local payments', 'Multi-language', 'WhatsApp commerce'], ARRAY['Lovable', 'Supabase', 'Stripe', 'PSE', 'Nequi', 'WhatsApp API'], 60000.00, 40000.00, 120000.00, 6, 10, 250.00, true, '{"complexity": "medium", "team_size": 3, "maintenance_level": "standard"}'::jsonb),
      ('550e8400-e29b-41d4-a716-446655440206', 'E-Commerce Solution', 'ecommerce-solution', 'ecommerce_solution', 'Multi-vendor e-commerce platform with AI features, inventory management, and automated order processing.', ARRAY['Multi-vendor support', 'AI recommendations', 'Inventory sync', 'Order automation', 'Payment processing', 'Analytics'], ARRAY['Shopify', 'WooCommerce', 'Stripe', 'OpenAI', 'Cloudinary', 'n8n'], 50000.00, 40000.00, 100000.00, 4, 8, 275.00, true, '{"complexity": "medium", "team_size": 3, "maintenance_level": "standard"}'::jsonb),
      ('550e8400-e29b-41d4-a716-446655440207', 'Workflow Automation', 'workflow-automation', 'workflow_automation', 'n8n-powered workflow automation with WhatsApp integration, email sequences, and data synchronization.', ARRAY['Visual workflows', '400+ integrations', 'WhatsApp bots', 'Email automation', 'Data sync', 'Error handling'], ARRAY['n8n', 'WhatsApp Business', 'SendGrid', 'Zapier', 'Webhooks', 'APIs'], 15000.00, 10000.00, 40000.00, 1, 4, 350.00, true, '{"complexity": "low", "team_size": 2, "maintenance_level": "basic"}'::jsonb),
      ('550e8400-e29b-41d4-a716-446655440208', 'RAG Knowledge System', 'rag-knowledge-system', 'rag_knowledge_system', 'Retrieval-Augmented Generation system for document search, Q&A, and semantic search with vector databases.', ARRAY['Document ingestion', 'Semantic search', 'Q&A system', 'Vector database', 'API endpoints', 'Admin panel'], ARRAY['LangChain', 'Pinecone', 'OpenAI Embeddings', 'FastAPI', 'PostgreSQL', 'Streamlit'], 30000.00, 20000.00, 80000.00, 3, 6, 180.00, true, '{"complexity": "medium", "team_size": 2, "maintenance_level": "standard"}'::jsonb);
    `);
    console.log('✅ Clients and services deployed');

    // Step 4: Deploy Projects (with proper UUID casting)
    console.log('📋 Step 4: Deploying projects...');
    await executeSql(`
      INSERT INTO projects (id, organization_id, client_id, name, code, description, status, service_ids, budget, currency, start_date, end_date, actual_end_date, project_manager_id, team_member_ids, technologies, repository_url, staging_url, production_url, documents, metrics) VALUES
      ('550e8400-e29b-41d4-a716-446655440301', '550e8400-e29b-41d4-a716-446655440001', 'c1111111-1111-1111-1111-111111111111', 'FashionOS - Complete Event Management Platform', 'FAS-0001', 'Revolutionary fashion week management platform that reduces 3-day setup process to 3 minutes. Includes designer portal, model management, sponsor intelligence, and real-time coordination.', 'completed', ARRAY['550e8400-e29b-41d4-a716-446655440204']::uuid[], 150000.00, 'USD', '2024-01-15', '2024-04-15', '2024-04-10', '22222222-2222-2222-2222-222222222222', ARRAY['33333333-3333-3333-3333-333333333333', '44444444-4444-4444-4444-444444444444']::uuid[], ARRAY['React', 'Next.js', 'Supabase', 'CrewAI', 'WhatsApp API', 'Stripe', 'n8n', 'Cloudinary'], 'https://github.com/amoai/fashionos', 'https://staging.fashionos.com', 'https://fashionos.com', '[{"name": "Project Proposal", "url": "https://docs.amoai.agency/fashionos-proposal.pdf"}]'::jsonb, '{"automation_rate": 90, "roi_percentage": 300, "time_saved_hours": 2160, "cost_savings": 400000, "user_satisfaction": 95, "events_managed": 50}'::jsonb),
      ('550e8400-e29b-41d4-a716-446655440302', '550e8400-e29b-41d4-a716-446655440001', 'c2222222-2222-2222-2222-222222222222', 'I Love Medellín - Tourism Marketplace', 'ILO-0001', 'Multi-vertical tourism marketplace for Medellín with experience booking, property rentals, AI concierge, and local payment integration.', 'active', ARRAY['550e8400-e29b-41d4-a716-446655440205']::uuid[], 75000.00, 'USD', '2024-03-01', '2024-05-30', NULL, '22222222-2222-2222-2222-222222222222', ARRAY['33333333-3333-3333-3333-333333333333', '44444444-4444-4444-4444-444444444444']::uuid[], ARRAY['Lovable', 'Supabase', 'Stripe', 'PSE', 'Nequi', 'WhatsApp API', 'Claude'], 'https://github.com/amoai/ilovemedellin', 'https://staging.ilovemedellin.co', 'https://ilovemedellin.co', '[{"name": "Market Research", "url": "https://docs.amoai.agency/medellin-research.pdf"}]'::jsonb, '{"automation_rate": 95, "monthly_revenue_target": 75000, "current_monthly_revenue": 25000, "booking_conversion": 15, "properties_listed": 50, "experiences_available": 120}'::jsonb),
      ('550e8400-e29b-41d4-a716-446655440303', '550e8400-e29b-41d4-a716-446655440001', 'c3333333-3333-3333-3333-333333333333', 'AutoMax AI Marketplace', 'AUT-0001', 'Enterprise automotive marketplace with AI-powered search, 500 dealer network, and advanced inventory management processing $4.3M monthly GMV.', 'completed', ARRAY['550e8400-e29b-41d4-a716-446655440201']::uuid[], 185000.00, 'USD', '2023-10-01', '2024-01-15', '2024-01-12', '22222222-2222-2222-2222-222222222222', ARRAY['33333333-3333-3333-3333-333333333333', '44444444-4444-4444-4444-444444444444', '55555555-5555-5555-5555-555555555555']::uuid[], ARRAY['React', 'Next.js', 'Supabase', 'OpenAI', 'Elasticsearch', 'Stripe Connect', 'Three.js', 'Cloudinary'], 'https://github.com/amoai/automax', 'https://staging.automax.com', 'https://automax.com', '[{"name": "System Architecture", "url": "https://docs.amoai.agency/automax-architecture.pdf"}]'::jsonb, '{"automation_rate": 85, "roi_percentage": 293, "monthly_gmv": 4300000, "dealers_connected": 500, "vehicles_listed": 50000, "search_accuracy": 95}'::jsonb),
      ('550e8400-e29b-41d4-a716-446655440304', '550e8400-e29b-41d4-a716-446655440001', 'c4444444-4444-4444-4444-444444444444', 'TechStart MVP - AI SaaS Platform', 'TEC-0001', 'Rapid MVP development for Y Combinator startup. Complete SaaS platform with AI features delivered in 2 weeks.', 'active', ARRAY['550e8400-e29b-41d4-a716-446655440202', '550e8400-e29b-41d4-a716-446655440207']::uuid[], 35000.00, 'USD', '2024-04-01', '2024-04-15', NULL, '33333333-3333-3333-3333-333333333333', ARRAY['44444444-4444-4444-4444-444444444444']::uuid[], ARRAY['Lovable', 'Supabase', 'Clerk', 'OpenAI', 'Stripe', 'n8n'], 'https://github.com/amoai/techstart-mvp', 'https://staging.techstart.io', NULL, '[{"name": "MVP Specification", "url": "https://docs.amoai.agency/techstart-mvp.pdf"}]'::jsonb, '{"development_speed": "2x faster", "features_delivered": 15, "user_testing_score": 8.5, "technical_debt": "minimal"}'::jsonb),
      ('550e8400-e29b-41d4-a716-446655440305', '550e8400-e29b-41d4-a716-446655440001', 'c5555555-5555-5555-5555-555555555555', 'GreenTech Workflow Automation', 'GRE-0001', 'Solar panel installation workflow automation for 200+ monthly installations. Includes scheduling, inventory management, and customer communication.', 'proposal', ARRAY['550e8400-e29b-41d4-a716-446655440207']::uuid[], 25000.00, 'USD', '2024-05-01', '2024-05-30', NULL, '22222222-2222-2222-2222-222222222222', ARRAY['33333333-3333-3333-3333-333333333333']::uuid[], ARRAY['n8n', 'WhatsApp API', 'Google Calendar API', 'Stripe', 'Twilio'], NULL, NULL, NULL, '[{"name": "Process Analysis", "url": "https://docs.amoai.agency/greentech-analysis.pdf"}]'::jsonb, '{"current_monthly_installations": 200, "manual_hours_per_installation": 2, "target_automation": 85}'::jsonb);
    `);
    console.log('✅ Projects deployed');

    // Step 5: Deploy Case Studies
    console.log('📚 Step 5: Deploying case studies...');
    await executeSql(`
      INSERT INTO case_studies (id, project_id, slug, title, client_name, industry, challenge, solution, results, metrics, technologies_used, testimonial, testimonial_author, testimonial_role, images, is_featured, is_published, published_at) VALUES
      ('550e8400-e29b-41d4-a716-446655440401', '550e8400-e29b-41d4-a716-446655440301', 'fashionos-3-day-to-3-minute-transformation', 'FashionOS: From 3 Days to 3 Minutes', 'Fashion Week Global Inc.', 'Fashion & Events', 'Fashion Week Global was struggling with a complex 3-day event setup process that required 100+ staff members and had a 12% error rate. Manual coordination between designers, models, venues, and sponsors was overwhelming and costly.', 'We built FashionOS, a comprehensive AI-powered event management platform that automates 90% of the coordination process. The system includes designer portals, automated model casting, real-time venue management, and sponsor intelligence tracking.', 'Reduced event setup from 3 days to 3 minutes, achieved 90% automation rate, eliminated coordination errors, and increased sponsor satisfaction by 40%. The platform now manages 50+ events annually with 95% user satisfaction.', '{"time_reduction": "97%", "cost_savings": 400000, "automation_rate": 90, "error_reduction": "100%", "roi_percentage": 300, "user_satisfaction": 95, "events_managed": 50}'::jsonb, ARRAY['React', 'Next.js', 'Supabase', 'CrewAI', 'WhatsApp API', 'Stripe', 'n8n', 'Cloudinary'], 'AMO AI transformed our entire operation. What used to take us 3 days and 100 people now happens in 3 minutes with complete accuracy. The ROI was immediate and the impact on our business has been transformational.', 'David Kim', 'Operations Director', '[{"url": "https://cdn.amoai.agency/case-studies/fashionos-dashboard.jpg", "caption": "FashionOS Event Dashboard"}]'::jsonb, true, true, '2024-04-20 10:00:00'),
      ('550e8400-e29b-41d4-a716-446655440402', '550e8400-e29b-41d4-a716-446655440303', 'automax-4-million-monthly-gmv', 'AutoMax: $4.3M Monthly GMV with AI', 'AutoMax Dealer Network', 'Automotive', 'AutoMax needed to connect 500 dealers with a unified platform that could handle 50,000+ vehicle listings while providing intelligent search and recommendation capabilities for buyers.', 'We developed a comprehensive AI marketplace with advanced search algorithms, real-time inventory synchronization, and machine learning-powered recommendations. The platform includes dealer portals, finance integration, and mobile-first design.', 'Achieved $4.3M in monthly GMV within 6 months, connected 500+ dealers, enabled 95% search accuracy, and increased conversion rates by 60%. The platform now processes thousands of transactions monthly.', '{"monthly_gmv": 4300000, "dealers_connected": 500, "vehicles_listed": 50000, "search_accuracy": 95, "conversion_increase": "60%", "roi_percentage": 293}'::jsonb, ARRAY['React', 'Next.js', 'Supabase', 'OpenAI', 'Elasticsearch', 'Stripe Connect', 'Three.js', 'Cloudinary'], 'The AI-powered search and recommendations have completely transformed how our customers find vehicles. Our conversion rates increased 60% and dealer satisfaction is at an all-time high.', 'Robert Wilson', 'VP of Technology', '[{"url": "https://cdn.amoai.agency/case-studies/automax-search.jpg", "caption": "AI-Powered Vehicle Search"}]'::jsonb, true, true, '2024-02-15 14:30:00'),
      ('550e8400-e29b-41d4-a716-446655440403', '550e8400-e29b-41d4-a716-446655440302', 'i-love-medellin-tourism-revolution', 'I Love Medellín: Tourism Revolution', 'I Love Medellín Tourism', 'Tourism & Hospitality', 'Medellín needed a comprehensive tourism platform that could handle experience booking, property rentals, and provide AI-powered concierge services while integrating with local payment methods.', 'We created a multi-vertical tourism marketplace with intelligent booking systems, AI concierge powered by Claude, and seamless integration with Colombian payment methods like PSE and Nequi.', 'Launched successfully with 50 properties, 120 experiences, 95% automation rate, and targeting $75K monthly revenue. Current conversion rate of 15% with strong local market penetration.', '{"properties_listed": 50, "experiences_available": 120, "automation_rate": 95, "monthly_revenue_target": 75000, "current_monthly_revenue": 25000, "conversion_rate": "15%"}'::jsonb, ARRAY['Lovable', 'Supabase', 'Stripe', 'PSE', 'Nequi', 'WhatsApp API', 'Claude'], 'The platform captures the essence of Medellín perfectly. The AI concierge provides authentic local recommendations and the booking process is seamless. We are on track to exceed our revenue targets.', 'Maria Gonzalez', 'Founder & CEO', '[{"url": "https://cdn.amoai.agency/case-studies/medellin-homepage.jpg", "caption": "I Love Medellín Homepage"}]'::jsonb, true, true, '2024-04-25 09:15:00');
    `);
    console.log('✅ Case studies deployed');

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
    
    console.log('\n🚀 Your AI agency database now has comprehensive, production-ready data!');
    console.log('\n💼 Business Impact:');
    console.log('   • FashionOS: 3-day setup → 3-minute automation (300% ROI)');
    console.log('   • AutoMax: $4.3M monthly GMV with AI marketplace');
    console.log('   • I Love Medellín: Tourism platform targeting $75K monthly revenue');
    console.log('   • TechStart: 2-week MVP delivery for Y Combinator startup');
    console.log('   • GreenTech: Solar installation workflow automation');
    
  } catch (error) {
    console.error('\n❌ Data deployment failed:', error.message);
    process.exit(1);
  }
}

deployFinalSampleData();
