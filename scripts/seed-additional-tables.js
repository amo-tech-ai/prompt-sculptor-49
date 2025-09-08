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

async function seedAdditionalTables() {
  console.log('🚀 Seeding Additional Tables with Sample Data...\n');
  
  try {
    // Step 1: Seed service_metrics
    console.log('📊 Step 1: Seeding service_metrics...');
    await executeSql(`
      INSERT INTO service_metrics (id, service_id, month, projects_count, total_revenue, average_timeline_weeks, average_roi, client_satisfaction) VALUES
      ('550e8400-e29b-41d4-a716-446655441101', '550e8400-e29b-41d4-a716-446655440201', '2024-01-01', 2, 150000.00, 12.00, 293.00, 4.80),
      ('550e8400-e29b-41d4-a716-446655441102', '550e8400-e29b-41d4-a716-446655440201', '2024-02-01', 1, 185000.00, 16.00, 293.00, 4.90),
      ('550e8400-e29b-41d4-a716-446655441103', '550e8400-e29b-41d4-a716-446655440201', '2024-03-01', 3, 275000.00, 14.00, 293.00, 4.85),
      ('550e8400-e29b-41d4-a716-446655441104', '550e8400-e29b-41d4-a716-446655440202', '2024-01-01', 1, 25000.00, 4.00, 185.00, 4.60),
      ('550e8400-e29b-41d4-a716-446655441105', '550e8400-e29b-41d4-a716-446655440202', '2024-02-01', 2, 45000.00, 3.50, 185.00, 4.70),
      ('550e8400-e29b-41d4-a716-446655441106', '550e8400-e29b-41d4-a716-446655440202', '2024-03-01', 1, 35000.00, 5.00, 185.00, 4.65),
      ('550e8400-e29b-41d4-a716-446655441107', '550e8400-e29b-41d4-a716-446655440204', '2024-01-01', 1, 100000.00, 8.00, 300.00, 4.95),
      ('550e8400-e29b-41d4-a716-446655441108', '550e8400-e29b-41d4-a716-446655440204', '2024-02-01', 0, 0.00, NULL, NULL, NULL),
      ('550e8400-e29b-41d4-a716-446655441109', '550e8400-e29b-41d4-a716-446655440204', '2024-03-01', 1, 150000.00, 10.00, 300.00, 4.90),
      ('550e8400-e29b-41d4-a716-446655441110', '550e8400-e29b-41d4-a716-446655440205', '2024-02-01', 1, 60000.00, 8.00, 250.00, 4.75),
      ('550e8400-e29b-41d4-a716-446655441111', '550e8400-e29b-41d4-a716-446655440205', '2024-03-01', 1, 75000.00, 7.50, 250.00, 4.80),
      ('550e8400-e29b-41d4-a716-446655441112', '550e8400-e29b-41d4-a716-446655440207', '2024-01-01', 2, 30000.00, 2.50, 350.00, 4.85),
      ('550e8400-e29b-41d4-a716-446655441113', '550e8400-e29b-41d4-a716-446655440207', '2024-02-01', 1, 15000.00, 2.00, 350.00, 4.90),
      ('550e8400-e29b-41d4-a716-446655441114', '550e8400-e29b-41d4-a716-446655440207', '2024-03-01', 3, 45000.00, 3.00, 350.00, 4.88);
    `);
    console.log('✅ service_metrics seeded');

    // Step 2: Seed notifications
    console.log('🔔 Step 2: Seeding notifications...');
    await executeSql(`
      INSERT INTO notifications (id, user_id, type, title, message, data, is_read, read_at) VALUES
      ('550e8400-e29b-41d4-a716-446655441201', '22222222-2222-2222-2222-222222222222', 'project_update', 'FashionOS Project Completed', 'The FashionOS project has been successfully completed and deployed to production.', '{"project_id": "550e8400-e29b-41d4-a716-446655440301", "project_name": "FashionOS"}'::jsonb, true, '2024-04-10 12:30:00'),
      ('550e8400-e29b-41d4-a716-446655441202', '33333333-3333-3333-3333-333333333333', 'task_assigned', 'New Task: Claude AI Concierge Integration', 'You have been assigned a new task for the I Love Medellín project.', '{"task_id": "550e8400-e29b-41d4-a716-446655440604", "project_id": "550e8400-e29b-41d4-a716-446655440302"}'::jsonb, false, NULL),
      ('550e8400-e29b-41d4-a716-446655441203', '44444444-4444-4444-4444-444444444444', 'design_review', 'Design Review Required', 'The designer portal UI/UX designs are ready for review.', '{"project_id": "550e8400-e29b-41d4-a716-446655440301", "design_url": "https://figma.com/fashionos-designer-portal"}'::jsonb, true, '2024-02-10 14:15:00'),
      ('550e8400-e29b-41d4-a716-446655441204', '55555555-5555-5555-5555-555555555555', 'client_meeting', 'Client Meeting Scheduled', 'Meeting with AutoMax team scheduled for tomorrow at 2 PM.', '{"client_id": "c3333333-3333-3333-3333-333333333333", "meeting_time": "2024-03-15 14:00:00"}'::jsonb, false, NULL),
      ('550e8400-e29b-41d4-a716-446655441205', '22222222-2222-2222-2222-222222222222', 'payment_received', 'Payment Received - FashionOS', 'Payment of $37,500 has been received for FashionOS project Phase 1.', '{"invoice_id": "550e8400-e29b-41d4-a716-446655441301", "amount": 37500.00}'::jsonb, true, '2024-01-30 09:45:00'),
      ('550e8400-e29b-41d4-a716-446655441206', '11111111-1111-1111-1111-111111111111', 'system_alert', 'High Server Load Detected', 'Server load is above 80% for the past 30 minutes.', '{"server": "production", "load": 85.2}'::jsonb, false, NULL),
      ('550e8400-e29b-41d4-a716-446655441207', '33333333-3333-3333-3333-333333333333', 'code_review', 'Code Review Request', 'Pull request #42 is ready for review in the I Love Medellín repository.', '{"repository": "ilovemedellin", "pr_number": 42, "url": "https://github.com/amoai/ilovemedellin/pull/42"}'::jsonb, false, NULL),
      ('550e8400-e29b-41d4-a716-446655441208', '66666666-6666-6666-6666-666666666666', 'project_milestone', 'FashionOS Milestone Achieved', 'Congratulations! Your project has reached the 90% automation milestone.', '{"project_id": "550e8400-e29b-41d4-a716-446655440301", "milestone": "90% automation"}'::jsonb, true, '2024-03-25 16:20:00'),
      ('550e8400-e29b-41d4-a716-446655441209', '77777777-7777-7777-7777-777777777777', 'feature_request', 'New Feature Request', 'A new feature request has been submitted for the I Love Medellín platform.', '{"project_id": "550e8400-e29b-41d4-a716-446655440302", "feature": "WhatsApp payment integration"}'::jsonb, false, NULL),
      ('550e8400-e29b-41d4-a716-446655441210', '22222222-2222-2222-2222-222222222222', 'deadline_reminder', 'Project Deadline Approaching', 'The I Love Medellín project deadline is approaching in 5 days.', '{"project_id": "550e8400-e29b-41d4-a716-446655440302", "deadline": "2024-05-30"}'::jsonb, false, NULL);
    `);
    console.log('✅ notifications seeded');

    // Step 3: Seed invoices
    console.log('💰 Step 3: Seeding invoices...');
    await executeSql(`
      INSERT INTO invoices (id, invoice_number, project_id, client_id, phase_id, amount, currency, tax_rate, tax_amount, total_amount, status, issue_date, due_date, paid_date, payment_method, payment_reference, notes, line_items) VALUES
      ('550e8400-e29b-41d4-a716-446655441301', 'INV-2024-001', '550e8400-e29b-41d4-a716-446655440301', 'c1111111-1111-1111-1111-111111111111', '550e8400-e29b-41d4-a716-446655440501', 37500.00, 'USD', 8.25, 3093.75, 40593.75, 'paid', '2024-01-15', '2024-01-30', '2024-01-30', 'Wire Transfer', 'WT-2024-001', 'Phase 1: Discovery & Planning - FashionOS Project', '[{"description": "Requirements gathering and technical architecture", "amount": 37500.00, "quantity": 1}]'::jsonb),
      ('550e8400-e29b-41d4-a716-446655441302', 'INV-2024-002', '550e8400-e29b-41d4-a716-446655440301', 'c1111111-1111-1111-1111-111111111111', '550e8400-e29b-41d4-a716-446655440502', 37500.00, 'USD', 8.25, 3093.75, 40593.75, 'paid', '2024-01-30', '2024-02-15', '2024-02-14', 'Wire Transfer', 'WT-2024-002', 'Phase 2: Design & Prototyping - FashionOS Project', '[{"description": "UI/UX design and interactive prototypes", "amount": 37500.00, "quantity": 1}]'::jsonb),
      ('550e8400-e29b-41d4-a716-446655441303', 'INV-2024-003', '550e8400-e29b-41d4-a716-446655440301', 'c1111111-1111-1111-1111-111111111111', '550e8400-e29b-41d4-a716-446655440503', 60000.00, 'USD', 8.25, 4950.00, 64950.00, 'paid', '2024-02-20', '2024-03-10', '2024-03-08', 'Wire Transfer', 'WT-2024-003', 'Phase 3: Development & Integration - FashionOS Project', '[{"description": "Core platform development and AI integration", "amount": 60000.00, "quantity": 1}]'::jsonb),
      ('550e8400-e29b-41d4-a716-446655441304', 'INV-2024-004', '550e8400-e29b-41d4-a716-446655440301', 'c1111111-1111-1111-1111-111111111111', '550e8400-e29b-41d4-a716-446655440504', 15000.00, 'USD', 8.25, 1237.50, 16237.50, 'paid', '2024-03-26', '2024-04-10', '2024-04-10', 'Wire Transfer', 'WT-2024-004', 'Phase 4: Testing & Launch - FashionOS Project', '[{"description": "QA testing, deployment, and training", "amount": 15000.00, "quantity": 1}]'::jsonb),
      ('550e8400-e29b-41d4-a716-446655441305', 'INV-2024-005', '550e8400-e29b-41d4-a716-446655440302', 'c2222222-2222-2222-2222-222222222222', '550e8400-e29b-41d4-a716-446655440505', 15000.00, 'USD', 8.25, 1237.50, 16237.50, 'paid', '2024-03-01', '2024-03-16', '2024-03-15', 'Wire Transfer', 'WT-2024-005', 'Phase 1: Market Research & Planning - I Love Medellín', '[{"description": "Market research and payment integration analysis", "amount": 15000.00, "quantity": 1}]'::jsonb),
      ('550e8400-e29b-41d4-a716-446655441306', 'INV-2024-006', '550e8400-e29b-41d4-a716-446655440302', 'c2222222-2222-2222-2222-222222222222', '550e8400-e29b-41d4-a716-446655440506', 30000.00, 'USD', 8.25, 2475.00, 32475.00, 'paid', '2024-03-16', '2024-04-01', '2024-03-31', 'Wire Transfer', 'WT-2024-006', 'Phase 2: Core Development - I Love Medellín', '[{"description": "Booking system and property management portal", "amount": 30000.00, "quantity": 1}]'::jsonb),
      ('550e8400-e29b-41d4-a716-446655441307', 'INV-2024-007', '550e8400-e29b-41d4-a716-446655440302', 'c2222222-2222-2222-2222-222222222222', '550e8400-e29b-41d4-a716-446655440507', 22500.00, 'USD', 8.25, 1856.25, 24356.25, 'pending', '2024-05-01', '2024-05-16', NULL, NULL, NULL, 'Phase 3: AI & Automation - I Love Medellín', '[{"description": "AI concierge and WhatsApp integration", "amount": 22500.00, "quantity": 1}]'::jsonb),
      ('550e8400-e29b-41d4-a716-446655441308', 'INV-2024-008', '550e8400-e29b-41d4-a716-446655440303', 'c3333333-3333-3333-3333-333333333333', NULL, 185000.00, 'USD', 8.25, 15262.50, 200262.50, 'paid', '2023-10-01', '2023-10-16', '2023-10-15', 'Wire Transfer', 'WT-2023-008', 'AutoMax AI Marketplace - Complete Project', '[{"description": "AI marketplace development", "amount": 150000.00, "quantity": 1}, {"description": "AI search and recommendation engine", "amount": 35000.00, "quantity": 1}]'::jsonb),
      ('550e8400-e29b-41d4-a716-446655441309', 'INV-2024-009', '550e8400-e29b-41d4-a716-446655440304', 'c4444444-4444-4444-4444-444444444444', NULL, 35000.00, 'USD', 8.25, 2887.50, 37887.50, 'paid', '2024-04-01', '2024-04-16', '2024-04-15', 'Wire Transfer', 'WT-2024-009', 'TechStart MVP - Rapid Development', '[{"description": "MVP development with AI features", "amount": 35000.00, "quantity": 1}]'::jsonb),
      ('550e8400-e29b-41d4-a716-446655441310', 'INV-2024-010', '550e8400-e29b-41d4-a716-446655440305', 'c5555555-5555-5555-5555-555555555555', NULL, 25000.00, 'USD', 8.25, 2062.50, 27062.50, 'overdue', '2024-05-01', '2024-05-16', NULL, NULL, NULL, 'GreenTech Workflow Automation - Proposal', '[{"description": "Workflow automation analysis and design", "amount": 25000.00, "quantity": 1}]'::jsonb);
    `);
    console.log('✅ invoices seeded');

    // Step 4: Seed expenses
    console.log('💸 Step 4: Seeding expenses...');
    await executeSql(`
      INSERT INTO expenses (id, project_id, category, description, amount, currency, vendor, receipt_url, expense_date, submitted_by, approved_by, is_billable) VALUES
      ('550e8400-e29b-41d4-a716-446655441401', '550e8400-e29b-41d4-a716-446655440301', 'Software Licenses', 'Figma Professional License for FashionOS design work', 144.00, 'USD', 'Figma Inc.', 'https://receipts.amoai.agency/figma-license-2024.pdf', '2024-01-15', '44444444-4444-4444-4444-444444444444', '22222222-2222-2222-2222-222222222222', true),
      ('550e8400-e29b-41d4-a716-446655441402', '550e8400-e29b-41d4-a716-446655440301', 'Cloud Services', 'Supabase Pro plan for FashionOS development', 25.00, 'USD', 'Supabase', 'https://receipts.amoai.agency/supabase-pro-2024.pdf', '2024-01-20', '33333333-3333-3333-3333-333333333333', '22222222-2222-2222-2222-222222222222', true),
      ('550e8400-e29b-41d4-a716-446655441403', '550e8400-e29b-41d4-a716-446655440301', 'AI Services', 'OpenAI API credits for CrewAI development', 150.00, 'USD', 'OpenAI', 'https://receipts.amoai.agency/openai-credits-2024.pdf', '2024-02-10', '33333333-3333-3333-3333-333333333333', '22222222-2222-2222-2222-222222222222', true),
      ('550e8400-e29b-41d4-a716-446655441404', '550e8400-e29b-41d4-a716-446655440301', 'Travel', 'Flight to New York for Fashion Week client meetings', 450.00, 'USD', 'Delta Airlines', 'https://receipts.amoai.agency/delta-flight-nyc.pdf', '2024-02-15', '22222222-2222-2222-2222-222222222222', '11111111-1111-1111-1111-111111111111', true),
      ('550e8400-e29b-41d4-a716-446655441405', '550e8400-e29b-41d4-a716-446655440301', 'Accommodation', 'Hotel stay in New York for client meetings', 320.00, 'USD', 'Marriott Times Square', 'https://receipts.amoai.agency/marriott-nyc.pdf', '2024-02-15', '22222222-2222-2222-2222-222222222222', '11111111-1111-1111-1111-111111111111', true),
      ('550e8400-e29b-41d4-a716-446655441406', '550e8400-e29b-41d4-a716-446655440302', 'Software Licenses', 'Lovable development platform subscription', 99.00, 'USD', 'Lovable', 'https://receipts.amoai.agency/lovable-subscription.pdf', '2024-03-01', '33333333-3333-3333-3333-333333333333', '22222222-2222-2222-2222-222222222222', true),
      ('550e8400-e29b-41d4-a716-446655441407', '550e8400-e29b-41d4-a716-446655440302', 'AI Services', 'Claude API credits for AI concierge development', 200.00, 'USD', 'Anthropic', 'https://receipts.amoai.agency/claude-credits-2024.pdf', '2024-03-15', '33333333-3333-3333-3333-333333333333', '22222222-2222-2222-2222-222222222222', true),
      ('550e8400-e29b-41d4-a716-446655441408', '550e8400-e29b-41d4-a716-446655440302', 'Payment Processing', 'PSE integration testing and setup fees', 75.00, 'USD', 'PSE Colombia', 'https://receipts.amoai.agency/pse-integration.pdf', '2024-04-01', '33333333-3333-3333-3333-333333333333', '22222222-2222-2222-2222-222222222222', true),
      ('550e8400-e29b-41d4-a716-446655441409', '550e8400-e29b-41d4-a716-446655440303', 'Cloud Services', 'AWS infrastructure for AutoMax marketplace', 180.00, 'USD', 'Amazon Web Services', 'https://receipts.amoai.agency/aws-automax.pdf', '2023-10-15', '33333333-3333-3333-3333-333333333333', '22222222-2222-2222-2222-222222222222', true),
      ('550e8400-e29b-41d4-a716-446655441410', '550e8400-e29b-41d4-a716-446655440303', 'AI Services', 'OpenAI GPT-4 API for search and recommendations', 300.00, 'USD', 'OpenAI', 'https://receipts.amoai.agency/openai-gpt4-automax.pdf', '2023-11-01', '33333333-3333-3333-3333-333333333333', '22222222-2222-2222-2222-222222222222', true),
      ('550e8400-e29b-41d4-a716-446655441411', '550e8400-e29b-41d4-a716-446655440303', 'Software Licenses', 'Elasticsearch license for vehicle search', 95.00, 'USD', 'Elastic', 'https://receipts.amoai.agency/elasticsearch-license.pdf', '2023-11-15', '33333333-3333-3333-3333-333333333333', '22222222-2222-2222-2222-222222222222', true),
      ('550e8400-e29b-41d4-a716-446655441412', '550e8400-e29b-41d4-a716-446655440304', 'Software Licenses', 'Clerk authentication service', 25.00, 'USD', 'Clerk', 'https://receipts.amoai.agency/clerk-auth.pdf', '2024-04-01', '33333333-3333-3333-3333-333333333333', '33333333-3333-3333-3333-333333333333', true),
      ('550e8400-e29b-41d4-a716-446655441413', '550e8400-e29b-41d4-a716-446655440304', 'AI Services', 'OpenAI API for TechStart MVP features', 80.00, 'USD', 'OpenAI', 'https://receipts.amoai.agency/openai-techstart.pdf', '2024-04-05', '33333333-3333-3333-3333-333333333333', '33333333-3333-3333-3333-333333333333', true),
      ('550e8400-e29b-41d4-a716-446655441414', '550e8400-e29b-41d4-a716-446655440305', 'Consulting', 'Solar installation process analysis', 500.00, 'USD', 'GreenTech Solutions', 'https://receipts.amoai.agency/greentech-consulting.pdf', '2024-05-01', '22222222-2222-2222-2222-222222222222', '11111111-1111-1111-1111-111111111111', true),
      ('550e8400-e29b-41d4-a716-446655441415', NULL, 'Office Supplies', 'General office supplies and equipment', 125.00, 'USD', 'Office Depot', 'https://receipts.amoai.agency/office-supplies.pdf', '2024-03-15', '22222222-2222-2222-2222-222222222222', '11111111-1111-1111-1111-111111111111', false),
      ('550e8400-e29b-41d4-a716-446655441416', NULL, 'Marketing', 'LinkedIn Premium for business development', 59.99, 'USD', 'LinkedIn', 'https://receipts.amoai.agency/linkedin-premium.pdf', '2024-02-01', '55555555-5555-5555-5555-555555555555', '11111111-1111-1111-1111-111111111111', false);
    `);
    console.log('✅ expenses seeded');

    // Final verification
    console.log('\n🔍 Final verification...');
    const verification = await executeSql(`
      SELECT 
        'service_metrics' as table_name, COUNT(*) as count FROM service_metrics
      UNION ALL
      SELECT 'notifications', COUNT(*) FROM notifications
      UNION ALL
      SELECT 'invoices', COUNT(*) FROM invoices
      UNION ALL
      SELECT 'expenses', COUNT(*) FROM expenses
      ORDER BY table_name;
    `);

    if (verification.data && verification.data.length > 0) {
      console.log('\n📊 Additional Tables Data Summary:');
      verification.data.forEach(row => {
        console.log(`   ${row.table_name}: ${row.count} records`);
      });
    }

    console.log('\n🎉 Additional tables sample data deployment successful!');
    console.log('\n📋 What was deployed:');
    console.log('   ✅ 14 Service Metrics (Monthly performance tracking)');
    console.log('   ✅ 10 Notifications (User notification system)');
    console.log('   ✅ 10 Invoices (Billing and payment tracking)');
    console.log('   ✅ 16 Expenses (Project expense management)');
    
    console.log('\n🚀 Your AI agency database now has COMPLETE business operations data!');
    console.log('\n💼 Business Operations Impact:');
    console.log('   • Service Metrics: Track monthly performance and ROI');
    console.log('   • Notifications: Real-time user communication system');
    console.log('   • Invoices: Complete billing and payment tracking');
    console.log('   • Expenses: Project cost management and tracking');
    
  } catch (error) {
    console.error('\n❌ Data deployment failed:', error.message);
    process.exit(1);
  }
}

seedAdditionalTables();
