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

async function seedRealWorldData() {
  console.log('🌱 Seeding Real-World Digital Agency Data...\n');
  
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

    // Step 2: Seed Organizations
    console.log('🏢 Step 2: Seeding organizations...');
    await executeSql(`
      INSERT INTO organizations (id, name, slug, website, description, created_at) VALUES
      ('550e8400-e29b-41d4-a716-446655440001', 'AMO AI Agency', 'amo-ai-agency', 'https://amoai.agency', 'Leading AI development agency specializing in rapid application development', NOW()),
      ('550e8400-e29b-41d4-a716-446655440002', 'TechCorp Solutions', 'techcorp-solutions', 'https://techcorp.com', 'Enterprise software solutions provider', NOW()),
      ('550e8400-e29b-41d4-a716-446655440003', 'StartupXYZ', 'startupxyz', 'https://startupxyz.io', 'Innovative e-commerce startup', NOW()),
      ('550e8400-e29b-41d4-a716-446655440004', 'MediCare Plus', 'medicare-plus', 'https://medicareplus.com', 'Healthcare technology solutions', NOW()),
      ('550e8400-e29b-41d4-a716-446655440005', 'EduTech Innovations', 'edutech-innovations', 'https://edutech.edu', 'Educational technology platform', NOW());
    `);
    console.log('✅ Organizations seeded');

    // Step 3: Seed Users (simplified for auth.users table)
    console.log('👥 Step 3: Seeding users...');
    await executeSql(`
      INSERT INTO users (id, email, full_name, role, organization_id, is_active, created_at) VALUES
      ('user-001', 'admin@amoai.agency', 'Alex Johnson', 'super_admin', '550e8400-e29b-41d4-a716-446655440001', true, NOW()),
      ('user-002', 'sarah@amoai.agency', 'Sarah Chen', 'admin', '550e8400-e29b-41d4-a716-446655440001', true, NOW()),
      ('user-003', 'mike@amoai.agency', 'Mike Rodriguez', 'project_manager', '550e8400-e29b-41d4-a716-446655440001', true, NOW()),
      ('user-004', 'emma@amoai.agency', 'Emma Wilson', 'developer', '550e8400-e29b-41d4-a716-446655440001', true, NOW()),
      ('user-005', 'david@amoai.agency', 'David Kim', 'developer', '550e8400-e29b-41d4-a716-446655440001', true, NOW()),
      ('user-006', 'lisa@amoai.agency', 'Lisa Thompson', 'sales', '550e8400-e29b-41d4-a716-446655440001', true, NOW()),
      ('user-007', 'john@techcorp.com', 'John Smith', 'client_admin', '550e8400-e29b-41d4-a716-446655440002', true, NOW()),
      ('user-008', 'maria@startupxyz.io', 'Maria Garcia', 'client_user', '550e8400-e29b-41d4-a716-446655440003', true, NOW()),
      ('user-009', 'robert@medicareplus.com', 'Robert Brown', 'client_admin', '550e8400-e29b-41d4-a716-446655440004', true, NOW()),
      ('user-010', 'jennifer@edutech.edu', 'Jennifer Davis', 'client_user', '550e8400-e29b-41d4-a716-446655440005', true, NOW());
    `);
    console.log('✅ Users seeded');

    // Step 4: Seed Services
    console.log('🛠️ Step 4: Seeding services...');
    await executeSql(`
      INSERT INTO services (id, name, description, category, base_price, is_active, technologies, created_at) VALUES
      ('svc-001', 'AI-Powered Web Applications', 'Build intelligent web apps with Claude, GPT-4, and modern frameworks', 'AI Development', 50000, true, ARRAY['Claude 3', 'GPT-4', 'React', 'Supabase'], NOW()),
      ('svc-002', 'Rapid MVP Development', 'Get your idea to market in weeks, not months', 'Rapid Development', 25000, true, ARRAY['Lovable', 'Webflow', 'Stripe', 'n8n'], NOW()),
      ('svc-003', 'Process Automation', 'Automate repetitive tasks and workflows', 'Automation', 15000, true, ARRAY['n8n', 'Zapier', 'WhatsApp API', 'Stripe'], NOW()),
      ('svc-004', 'AI Chatbots & Agents', 'Intelligent customer service and support systems', 'AI Development', 30000, true, ARRAY['Claude 3', 'LangChain', 'WhatsApp', 'Supabase'], NOW()),
      ('svc-005', 'Data Analytics Platform', 'Turn data into actionable insights', 'Data & Analytics', 40000, true, ARRAY['Python', 'PostgreSQL', 'Pinecone', 'React'], NOW()),
      ('svc-006', 'E-commerce Solutions', 'Complete online store with AI recommendations', 'E-commerce', 35000, true, ARRAY['Shopify', 'Stripe', 'Claude 3', 'React'], NOW()),
      ('svc-007', 'Mobile App Development', 'Native and cross-platform mobile applications', 'Mobile Development', 45000, true, ARRAY['React Native', 'Flutter', 'Supabase', 'Stripe'], NOW()),
      ('svc-008', 'API Integration Services', 'Connect all your tools and platforms', 'Integration', 20000, true, ARRAY['n8n', 'Zapier', 'REST APIs', 'Webhooks'], NOW());
    `);
    console.log('✅ Services seeded');

    // Step 5: Seed Clients
    console.log('🏢 Step 5: Seeding clients...');
    await executeSql(`
      INSERT INTO clients (id, name, email, phone, company, industry, organization_id, created_at) VALUES
      ('client-001', 'John Smith', 'john@techcorp.com', '+1-555-0101', 'TechCorp Solutions', 'Software', '550e8400-e29b-41d4-a716-446655440002', NOW()),
      ('client-002', 'Maria Garcia', 'maria@startupxyz.io', '+1-555-0102', 'StartupXYZ', 'E-commerce', '550e8400-e29b-41d4-a716-446655440003', NOW()),
      ('client-003', 'Robert Brown', 'robert@medicareplus.com', '+1-555-0103', 'MediCare Plus', 'Healthcare', '550e8400-e29b-41d4-a716-446655440004', NOW()),
      ('client-004', 'Jennifer Davis', 'jennifer@edutech.edu', '+1-555-0104', 'EduTech Innovations', 'Education', '550e8400-e29b-41d4-a716-446655440005', NOW()),
      ('client-005', 'Michael Johnson', 'mike@fashionbrand.com', '+1-555-0105', 'Fashion Forward', 'Retail', '550e8400-e29b-41d4-a716-446655440002', NOW()),
      ('client-006', 'Sarah Williams', 'sarah@fintech.com', '+1-555-0106', 'FinTech Solutions', 'Finance', '550e8400-e29b-41d4-a716-446655440002', NOW()),
      ('client-007', 'David Lee', 'david@fooddelivery.com', '+1-555-0107', 'QuickBite Delivery', 'Food & Beverage', '550e8400-e29b-41d4-a716-446655440003', NOW()),
      ('client-008', 'Lisa Anderson', 'lisa@realestate.com', '+1-555-0108', 'Prime Properties', 'Real Estate', '550e8400-e29b-41d4-a716-446655440004', NOW());
    `);
    console.log('✅ Clients seeded');

    // Step 6: Seed Projects
    console.log('📋 Step 6: Seeding projects...');
    await executeSql(`
      INSERT INTO projects (id, name, description, client_id, project_manager_id, team_member_ids, status, budget, start_date, end_date, created_at) VALUES
      ('proj-001', 'TechCorp AI Platform', 'Build intelligent customer service platform with Claude integration', 'client-001', 'user-003', ARRAY['user-004', 'user-005'], 'in_progress', 75000, '2024-01-15', '2024-04-15', NOW()),
      ('proj-002', 'StartupXYZ E-commerce MVP', 'Rapid development of e-commerce platform with AI recommendations', 'client-002', 'user-003', ARRAY['user-004'], 'completed', 35000, '2024-01-01', '2024-02-15', NOW()),
      ('proj-003', 'MediCare Patient Portal', 'Healthcare patient management system with appointment scheduling', 'client-003', 'user-003', ARRAY['user-005'], 'planning', 60000, '2024-03-01', '2024-06-01', NOW()),
      ('proj-004', 'EduTech Learning Platform', 'AI-powered educational platform with personalized learning paths', 'client-004', 'user-003', ARRAY['user-004', 'user-005'], 'in_progress', 80000, '2024-02-01', '2024-05-01', NOW()),
      ('proj-005', 'FashionOS Inventory System', 'AI-driven inventory management for fashion retail', 'client-005', 'user-003', ARRAY['user-004'], 'completed', 45000, '2023-11-01', '2024-01-15', NOW()),
      ('proj-006', 'FinTech Payment Gateway', 'Secure payment processing with fraud detection', 'client-006', 'user-003', ARRAY['user-005'], 'in_progress', 90000, '2024-01-20', '2024-04-20', NOW()),
      ('proj-007', 'QuickBite Delivery App', 'Food delivery platform with real-time tracking', 'client-007', 'user-003', ARRAY['user-004', 'user-005'], 'planning', 55000, '2024-03-15', '2024-06-15', NOW()),
      ('proj-008', 'Prime Properties CRM', 'Real estate customer relationship management system', 'client-008', 'user-003', ARRAY['user-004'], 'completed', 40000, '2023-12-01', '2024-02-01', NOW());
    `);
    console.log('✅ Projects seeded');

    // Step 7: Seed Case Studies
    console.log('📚 Step 7: Seeding case studies...');
    await executeSql(`
      INSERT INTO case_studies (id, title, slug, client_name, industry, challenge, solution, results, technologies_used, project_id, is_published, created_at) VALUES
      ('case-001', 'FashionOS: 3-Day Setup to 3-Minute Automation', 'fashionos-automation', 'Fashion Forward', 'Retail', 'Manual inventory management taking 3 days per week', 'AI-powered inventory system with real-time updates', 'Reduced setup time by 99%, 90% of tasks automated', ARRAY['Claude 3', 'React', 'Supabase', 'Stripe'], 'proj-005', true, NOW()),
      ('case-002', 'StartupXYZ: From Idea to $50K Revenue in 6 Weeks', 'startupxyz-ecommerce', 'StartupXYZ', 'E-commerce', 'Need to launch e-commerce platform quickly', 'Rapid MVP development with AI recommendations', 'Launched in 6 weeks, $50K revenue in first month', ARRAY['Lovable', 'Stripe', 'Claude 3', 'n8n'], 'proj-002', true, NOW()),
      ('case-003', 'MediCare Plus: 40% Reduction in Patient Wait Times', 'medicare-patient-portal', 'MediCare Plus', 'Healthcare', 'Long patient wait times and scheduling conflicts', 'Intelligent appointment scheduling system', '40% reduction in wait times, 95% patient satisfaction', ARRAY['React', 'Supabase', 'Claude 3', 'WhatsApp API'], 'proj-003', true, NOW()),
      ('case-004', 'EduTech: Personalized Learning at Scale', 'edutech-ai-learning', 'EduTech Innovations', 'Education', 'One-size-fits-all learning approach', 'AI-powered personalized learning paths', '60% improvement in student engagement, 35% faster learning', ARRAY['Claude 3', 'React', 'PostgreSQL', 'Pinecone'], 'proj-004', true, NOW()),
      ('case-005', 'FinTech: Fraud Detection with 99.9% Accuracy', 'fintech-fraud-detection', 'FinTech Solutions', 'Finance', 'High fraud rates in payment processing', 'AI-powered fraud detection system', '99.9% fraud detection accuracy, 80% reduction in false positives', ARRAY['Python', 'Claude 3', 'PostgreSQL', 'React'], 'proj-006', true, NOW());
    `);
    console.log('✅ Case studies seeded');

    // Step 8: Seed Tasks
    console.log('✅ Step 8: Seeding tasks...');
    await executeSql(`
      INSERT INTO tasks (id, title, description, project_id, assigned_to, status, priority, due_date, created_at) VALUES
      ('task-001', 'Setup Claude API Integration', 'Integrate Claude 3 API for customer service chatbot', 'proj-001', 'user-004', 'completed', 'high', '2024-01-20', NOW()),
      ('task-002', 'Design User Interface', 'Create responsive UI for customer service platform', 'proj-001', 'user-004', 'in_progress', 'high', '2024-02-15', NOW()),
      ('task-003', 'Database Schema Design', 'Design and implement database schema for e-commerce platform', 'proj-002', 'user-005', 'completed', 'high', '2024-01-10', NOW()),
      ('task-004', 'Payment Integration', 'Integrate Stripe payment processing', 'proj-002', 'user-004', 'completed', 'high', '2024-01-25', NOW()),
      ('task-005', 'Patient Portal Wireframes', 'Create wireframes for patient management system', 'proj-003', 'user-004', 'todo', 'medium', '2024-03-10', NOW()),
      ('task-006', 'Appointment Scheduling Logic', 'Implement intelligent appointment scheduling algorithm', 'proj-003', 'user-005', 'todo', 'high', '2024-03-20', NOW()),
      ('task-007', 'AI Learning Path Algorithm', 'Develop personalized learning path recommendation system', 'proj-004', 'user-004', 'in_progress', 'high', '2024-03-01', NOW()),
      ('task-008', 'Student Progress Tracking', 'Implement real-time student progress tracking', 'proj-004', 'user-005', 'todo', 'medium', '2024-03-15', NOW()),
      ('task-009', 'Fraud Detection Model', 'Train and deploy fraud detection AI model', 'proj-006', 'user-005', 'in_progress', 'high', '2024-02-28', NOW()),
      ('task-010', 'Security Audit', 'Conduct comprehensive security audit of payment system', 'proj-006', 'user-004', 'todo', 'high', '2024-03-30', NOW());
    `);
    console.log('✅ Tasks seeded');

    // Step 9: Seed Invoices
    console.log('💰 Step 9: Seeding invoices...');
    await executeSql(`
      INSERT INTO invoices (id, project_id, client_id, amount, status, due_date, created_at) VALUES
      ('inv-001', 'proj-001', 'client-001', 25000, 'paid', '2024-02-15', NOW()),
      ('inv-002', 'proj-001', 'client-001', 25000, 'pending', '2024-03-15', NOW()),
      ('inv-003', 'proj-002', 'client-002', 35000, 'paid', '2024-02-15', NOW()),
      ('inv-004', 'proj-003', 'client-003', 20000, 'pending', '2024-04-01', NOW()),
      ('inv-005', 'proj-004', 'client-004', 30000, 'paid', '2024-02-28', NOW()),
      ('inv-006', 'proj-004', 'client-004', 30000, 'pending', '2024-03-28', NOW()),
      ('inv-007', 'proj-005', 'client-005', 45000, 'paid', '2024-01-15', NOW()),
      ('inv-008', 'proj-006', 'client-006', 30000, 'pending', '2024-03-20', NOW()),
      ('inv-009', 'proj-007', 'client-007', 15000, 'pending', '2024-04-15', NOW()),
      ('inv-010', 'proj-008', 'client-008', 40000, 'paid', '2024-02-01', NOW());
    `);
    console.log('✅ Invoices seeded');

    // Step 10: Seed Blog Posts
    console.log('📝 Step 10: Seeding blog posts...');
    await executeSql(`
      INSERT INTO blog_posts (id, title, slug, content, excerpt, author_id, is_published, published_at, created_at) VALUES
      ('blog-001', 'How AI is Revolutionizing Customer Service', 'ai-customer-service-revolution', 'Artificial Intelligence is transforming customer service...', 'Discover how AI chatbots and agents are improving customer experiences', 'user-002', true, NOW(), NOW()),
      ('blog-002', 'Building MVPs in 2 Weeks: A Complete Guide', 'mvp-development-guide', 'Rapid MVP development is essential for startups...', 'Learn how to build and launch MVPs quickly using modern tools', 'user-003', true, NOW(), NOW()),
      ('blog-003', 'The Future of E-commerce: AI-Powered Recommendations', 'ai-ecommerce-recommendations', 'E-commerce is evolving with AI-powered personalization...', 'Explore how AI is reshaping online shopping experiences', 'user-004', true, NOW(), NOW()),
      ('blog-004', 'Process Automation: From Manual to Magical', 'process-automation-guide', 'Manual processes are the biggest productivity killers...', 'Transform your business with intelligent process automation', 'user-005', true, NOW(), NOW()),
      ('blog-005', 'Healthcare Technology: Improving Patient Outcomes', 'healthcare-tech-patient-outcomes', 'Technology is revolutionizing healthcare delivery...', 'See how digital solutions are improving patient care', 'user-002', true, NOW(), NOW());
    `);
    console.log('✅ Blog posts seeded');

    // Step 11: Seed Notifications
    console.log('🔔 Step 11: Seeding notifications...');
    await executeSql(`
      INSERT INTO notifications (id, user_id, title, message, type, is_read, created_at) VALUES
      ('notif-001', 'user-003', 'New Project Assigned', 'You have been assigned to manage the TechCorp AI Platform project', 'project', false, NOW()),
      ('notif-002', 'user-004', 'Task Completed', 'Great job completing the Claude API integration task!', 'task', true, NOW()),
      ('notif-003', 'user-005', 'Invoice Payment Received', 'Payment of $35,000 received for StartupXYZ project', 'payment', false, NOW()),
      ('notif-004', 'user-002', 'New Client Inquiry', 'New client inquiry from Fashion Forward for inventory management', 'client', false, NOW()),
      ('notif-005', 'user-003', 'Project Milestone Reached', 'MediCare Plus project has reached the design phase milestone', 'milestone', true, NOW()),
      ('notif-006', 'user-004', 'Code Review Request', 'Please review the AI learning algorithm implementation', 'review', false, NOW()),
      ('notif-007', 'user-005', 'Security Alert', 'Security audit completed for FinTech payment system', 'security', false, NOW()),
      ('notif-008', 'user-002', 'Blog Post Published', 'Your blog post about AI customer service has been published', 'content', true, NOW());
    `);
    console.log('✅ Notifications seeded');

    // Step 12: Seed Activity Logs
    console.log('📊 Step 12: Seeding activity logs...');
    await executeSql(`
      INSERT INTO activity_logs (id, user_id, action, resource_type, resource_id, details, ip_address, created_at) VALUES
      ('log-001', 'user-001', 'login', 'user', 'user-001', '{"ip": "192.168.1.100", "user_agent": "Mozilla/5.0"}', '192.168.1.100', NOW()),
      ('log-002', 'user-003', 'create', 'project', 'proj-001', '{"project_name": "TechCorp AI Platform", "client": "TechCorp Solutions"}', '192.168.1.101', NOW()),
      ('log-003', 'user-004', 'update', 'task', 'task-001', '{"task_title": "Setup Claude API Integration", "status": "completed"}', '192.168.1.102', NOW()),
      ('log-004', 'user-005', 'create', 'invoice', 'inv-003', '{"amount": 35000, "client": "StartupXYZ", "status": "paid"}', '192.168.1.103', NOW()),
      ('log-005', 'user-002', 'publish', 'blog_post', 'blog-001', '{"title": "How AI is Revolutionizing Customer Service", "slug": "ai-customer-service-revolution"}', '192.168.1.104', NOW()),
      ('log-006', 'user-003', 'assign', 'task', 'task-005', '{"task_title": "Patient Portal Wireframes", "assigned_to": "user-004"}', '192.168.1.105', NOW()),
      ('log-007', 'user-004', 'comment', 'task', 'task-007', '{"comment": "AI algorithm implementation is 80% complete"}', '192.168.1.106', NOW()),
      ('log-008', 'user-005', 'complete', 'project', 'proj-002', '{"project_name": "StartupXYZ E-commerce MVP", "final_budget": 35000}', '192.168.1.107', NOW());
    `);
    console.log('✅ Activity logs seeded');

    // Step 13: Seed Project Metrics
    console.log('📈 Step 13: Seeding project metrics...');
    await executeSql(`
      INSERT INTO project_metrics (id, project_id, metric_name, metric_value, metric_unit, recorded_at, created_at) VALUES
      ('metric-001', 'proj-001', 'completion_percentage', 65, 'percent', NOW(), NOW()),
      ('metric-002', 'proj-001', 'budget_utilized', 48750, 'usd', NOW(), NOW()),
      ('metric-003', 'proj-002', 'completion_percentage', 100, 'percent', NOW(), NOW()),
      ('metric-004', 'proj-002', 'budget_utilized', 35000, 'usd', NOW(), NOW()),
      ('metric-005', 'proj-004', 'completion_percentage', 45, 'percent', NOW(), NOW()),
      ('metric-006', 'proj-004', 'budget_utilized', 36000, 'usd', NOW(), NOW()),
      ('metric-007', 'proj-006', 'completion_percentage', 30, 'percent', NOW(), NOW()),
      ('metric-008', 'proj-006', 'budget_utilized', 27000, 'usd', NOW(), NOW());
    `);
    console.log('✅ Project metrics seeded');

    // Step 14: Seed Service Metrics
    console.log('📊 Step 14: Seeding service metrics...');
    await executeSql(`
      INSERT INTO service_metrics (id, service_id, metric_name, metric_value, metric_unit, recorded_at, created_at) VALUES
      ('svc-metric-001', 'svc-001', 'projects_completed', 12, 'count', NOW(), NOW()),
      ('svc-metric-002', 'svc-001', 'average_project_value', 65000, 'usd', NOW(), NOW()),
      ('svc-metric-003', 'svc-002', 'projects_completed', 8, 'count', NOW(), NOW()),
      ('svc-metric-004', 'svc-002', 'average_project_value', 30000, 'usd', NOW(), NOW()),
      ('svc-metric-005', 'svc-003', 'projects_completed', 15, 'count', NOW(), NOW()),
      ('svc-metric-006', 'svc-003', 'average_project_value', 20000, 'usd', NOW(), NOW()),
      ('svc-metric-007', 'svc-004', 'projects_completed', 6, 'count', NOW(), NOW()),
      ('svc-metric-008', 'svc-004', 'average_project_value', 40000, 'usd', NOW(), NOW());
    `);
    console.log('✅ Service metrics seeded');

    // Step 15: Seed Project Phases
    console.log('🗓️ Step 15: Seeding project phases...');
    await executeSql(`
      INSERT INTO project_phases (id, project_id, phase_name, description, start_date, end_date, status, created_at) VALUES
      ('phase-001', 'proj-001', 'Discovery', 'Requirements gathering and planning', '2024-01-15', '2024-01-25', 'completed', NOW()),
      ('phase-002', 'proj-001', 'Design', 'UI/UX design and system architecture', '2024-01-26', '2024-02-15', 'in_progress', NOW()),
      ('phase-003', 'proj-001', 'Development', 'Core development and integration', '2024-02-16', '2024-03-30', 'pending', NOW()),
      ('phase-004', 'proj-001', 'Testing', 'Quality assurance and testing', '2024-03-31', '2024-04-10', 'pending', NOW()),
      ('phase-005', 'proj-001', 'Launch', 'Deployment and go-live', '2024-04-11', '2024-04-15', 'pending', NOW()),
      ('phase-006', 'proj-002', 'Discovery', 'Requirements gathering and planning', '2024-01-01', '2024-01-05', 'completed', NOW()),
      ('phase-007', 'proj-002', 'Development', 'Rapid MVP development', '2024-01-06', '2024-02-10', 'completed', NOW()),
      ('phase-008', 'proj-002', 'Launch', 'Deployment and go-live', '2024-02-11', '2024-02-15', 'completed', NOW());
    `);
    console.log('✅ Project phases seeded');

    // Step 16: Seed Task Comments
    console.log('💬 Step 16: Seeding task comments...');
    await executeSql(`
      INSERT INTO task_comments (id, task_id, user_id, comment, created_at) VALUES
      ('comment-001', 'task-001', 'user-004', 'Claude API integration completed successfully. All endpoints are working correctly.', NOW()),
      ('comment-002', 'task-001', 'user-003', 'Great work! The integration looks solid. Moving to next phase.', NOW()),
      ('comment-003', 'task-002', 'user-004', 'UI design is 70% complete. Need feedback on the customer service interface.', NOW()),
      ('comment-004', 'task-002', 'user-003', 'The design looks good. Please add mobile responsiveness.', NOW()),
      ('comment-005', 'task-007', 'user-004', 'AI learning algorithm is 80% complete. Need to optimize for performance.', NOW()),
      ('comment-006', 'task-007', 'user-005', 'Performance optimization completed. Algorithm is now 3x faster.', NOW()),
      ('comment-007', 'task-009', 'user-005', 'Fraud detection model training completed. Accuracy is 99.9%.', NOW()),
      ('comment-008', 'task-009', 'user-003', 'Excellent results! Ready for production deployment.', NOW());
    `);
    console.log('✅ Task comments seeded');

    // Step 17: Seed Expenses
    console.log('💸 Step 17: Seeding expenses...');
    await executeSql(`
      INSERT INTO expenses (id, project_id, description, amount, category, submitted_by, status, created_at) VALUES
      ('exp-001', 'proj-001', 'Claude API usage for development', 150, 'software', 'user-004', 'approved', NOW()),
      ('exp-002', 'proj-001', 'Supabase hosting costs', 200, 'hosting', 'user-005', 'approved', NOW()),
      ('exp-003', 'proj-002', 'Stripe payment processing fees', 75, 'software', 'user-004', 'approved', NOW()),
      ('exp-004', 'proj-003', 'Design software licenses', 300, 'software', 'user-004', 'pending', NOW()),
      ('exp-005', 'proj-004', 'Pinecone vector database costs', 120, 'hosting', 'user-005', 'approved', NOW()),
      ('exp-006', 'proj-006', 'Security audit tools', 500, 'software', 'user-005', 'pending', NOW()),
      ('exp-007', 'proj-001', 'Team lunch for project kickoff', 85, 'meals', 'user-003', 'approved', NOW()),
      ('exp-008', 'proj-004', 'Conference attendance for AI research', 1200, 'travel', 'user-004', 'pending', NOW());
    `);
    console.log('✅ Expenses seeded');

    // Step 18: Seed Content Pages
    console.log('📄 Step 18: Seeding content pages...');
    await executeSql(`
      INSERT INTO content_pages (id, title, slug, content, author_id, status, created_at) VALUES
      ('page-001', 'About Us', 'about', 'AMO AI Agency specializes in rapid application development...', 'user-002', 'published', NOW()),
      ('page-002', 'Our Services', 'services', 'We offer comprehensive AI development services...', 'user-002', 'published', NOW()),
      ('page-003', 'Contact Information', 'contact', 'Get in touch with our team for your next project...', 'user-002', 'published', NOW()),
      ('page-004', 'Privacy Policy', 'privacy', 'Your privacy is important to us. Here is our privacy policy...', 'user-002', 'published', NOW()),
      ('page-005', 'Terms of Service', 'terms', 'Please read our terms of service carefully...', 'user-002', 'published', NOW()),
      ('page-006', 'Case Studies', 'case-studies', 'Explore our successful projects and client stories...', 'user-002', 'published', NOW()),
      ('page-007', 'Pricing Guide', 'pricing', 'Transparent pricing for all our services...', 'user-002', 'published', NOW()),
      ('page-008', 'FAQ', 'faq', 'Frequently asked questions about our services...', 'user-002', 'published', NOW());
    `);
    console.log('✅ Content pages seeded');

    // Final verification
    console.log('\n🔍 Final verification...');
    const verification = await executeSql(`
      SELECT 
        'organizations' as table_name, COUNT(*) as count FROM organizations
      UNION ALL
      SELECT 'users', COUNT(*) FROM users
      UNION ALL
      SELECT 'services', COUNT(*) FROM services
      UNION ALL
      SELECT 'clients', COUNT(*) FROM clients
      UNION ALL
      SELECT 'projects', COUNT(*) FROM projects
      UNION ALL
      SELECT 'case_studies', COUNT(*) FROM case_studies
      UNION ALL
      SELECT 'tasks', COUNT(*) FROM tasks
      UNION ALL
      SELECT 'invoices', COUNT(*) FROM invoices
      UNION ALL
      SELECT 'blog_posts', COUNT(*) FROM blog_posts
      UNION ALL
      SELECT 'notifications', COUNT(*) FROM notifications
      UNION ALL
      SELECT 'activity_logs', COUNT(*) FROM activity_logs
      UNION ALL
      SELECT 'project_metrics', COUNT(*) FROM project_metrics
      UNION ALL
      SELECT 'service_metrics', COUNT(*) FROM service_metrics
      UNION ALL
      SELECT 'project_phases', COUNT(*) FROM project_phases
      UNION ALL
      SELECT 'task_comments', COUNT(*) FROM task_comments
      UNION ALL
      SELECT 'expenses', COUNT(*) FROM expenses
      UNION ALL
      SELECT 'content_pages', COUNT(*) FROM content_pages
      ORDER BY table_name;
    `);

    if (verification.data && verification.data.length > 0) {
      console.log('\n📊 Data Summary:');
      verification.data.forEach(row => {
        console.log(`   ${row.table_name}: ${row.count} records`);
      });
    }

    console.log('\n🎉 Real-world digital agency data seeding completed successfully!');
    console.log('\n📋 What was seeded:');
    console.log('   ✅ 5 Organizations (including AMO AI Agency)');
    console.log('   ✅ 10 Users (admins, developers, clients)');
    console.log('   ✅ 8 Services (AI development, automation, etc.)');
    console.log('   ✅ 8 Clients (TechCorp, StartupXYZ, MediCare, etc.)');
    console.log('   ✅ 8 Projects (AI platforms, e-commerce, healthcare)');
    console.log('   ✅ 5 Case Studies (success stories)');
    console.log('   ✅ 10 Tasks (development tasks with status)');
    console.log('   ✅ 10 Invoices (paid and pending)');
    console.log('   ✅ 5 Blog Posts (published content)');
    console.log('   ✅ 8 Notifications (user alerts)');
    console.log('   ✅ 8 Activity Logs (audit trail)');
    console.log('   ✅ 8 Project Metrics (performance data)');
    console.log('   ✅ 8 Service Metrics (business intelligence)');
    console.log('   ✅ 8 Project Phases (milestones)');
    console.log('   ✅ 8 Task Comments (collaboration)');
    console.log('   ✅ 8 Expenses (project costs)');
    console.log('   ✅ 8 Content Pages (website content)');
    
    console.log('\n🚀 Your AI agency database is now populated with realistic data!');
    
  } catch (error) {
    console.error('\n❌ Data seeding failed:', error.message);
    process.exit(1);
  }
}

seedRealWorldData();
