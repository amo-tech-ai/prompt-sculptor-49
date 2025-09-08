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

async function deployRemainingSampleData() {
  console.log('🚀 Deploying Remaining Sample Data (Project Phases, Tasks, CopilotKit)...\n');
  
  try {
    // Step 1: Deploy Project Phases
    console.log('📋 Step 1: Deploying project phases...');
    await executeSql(`
      INSERT INTO project_phases (id, project_id, name, description, phase_number, start_date, end_date, deliverables, payment_percentage, is_completed, completed_at) VALUES
      ('550e8400-e29b-41d4-a716-446655440501', '550e8400-e29b-41d4-a716-446655440301', 'Discovery & Planning', 'Requirements gathering, user research, and technical architecture planning', 1, '2024-01-15', '2024-01-29', ARRAY['Requirements Document', 'User Research Report', 'Technical Architecture', 'Project Timeline'], 25.00, true, '2024-01-29 17:00:00'),
      ('550e8400-e29b-41d4-a716-446655440502', '550e8400-e29b-41d4-a716-446655440301', 'Design & Prototyping', 'UI/UX design, wireframes, and interactive prototypes', 2, '2024-01-30', '2024-02-19', ARRAY['UI/UX Designs', 'Interactive Prototype', 'Design System', 'User Flow Diagrams'], 25.00, true, '2024-02-19 16:30:00'),
      ('550e8400-e29b-41d4-a716-446655440503', '550e8400-e29b-41d4-a716-446655440301', 'Development & Integration', 'Core platform development, AI integration, and third-party connections', 3, '2024-02-20', '2024-03-25', ARRAY['Core Platform', 'AI Integration', 'API Connections', 'Database Setup'], 40.00, true, '2024-03-25 14:20:00'),
      ('550e8400-e29b-41d4-a716-446655440504', '550e8400-e29b-41d4-a716-446655440301', 'Testing & Launch', 'Quality assurance, user testing, deployment, and training', 4, '2024-03-26', '2024-04-10', ARRAY['QA Testing Report', 'User Training Materials', 'Deployment Guide', 'Live Platform'], 10.00, true, '2024-04-10 12:00:00'),
      ('550e8400-e29b-41d4-a716-446655440505', '550e8400-e29b-41d4-a716-446655440302', 'Market Research & Planning', 'Colombian market analysis, payment integration research, and platform architecture', 1, '2024-03-01', '2024-03-15', ARRAY['Market Research Report', 'Payment Integration Analysis', 'Platform Architecture', 'Local Compliance Guide'], 20.00, true, '2024-03-15 15:45:00'),
      ('550e8400-e29b-41d4-a716-446655440506', '550e8400-e29b-41d4-a716-446655440302', 'Core Development', 'Booking system, property management, and experience catalog development', 2, '2024-03-16', '2024-04-30', ARRAY['Booking System', 'Property Management Portal', 'Experience Catalog', 'User Authentication'], 40.00, true, '2024-04-30 18:00:00'),
      ('550e8400-e29b-41d4-a716-446655440507', '550e8400-e29b-41d4-a716-446655440302', 'AI & Automation', 'AI concierge implementation, WhatsApp integration, and workflow automation', 3, '2024-05-01', '2024-05-20', ARRAY['AI Concierge', 'WhatsApp Integration', 'Automated Workflows', 'Payment Gateway'], 30.00, false, NULL),
      ('550e8400-e29b-41d4-a716-446655440508', '550e8400-e29b-41d4-a716-446655440302', 'Launch & Optimization', 'Platform launch, marketing integration, and performance optimization', 4, '2024-05-21', '2024-05-30', ARRAY['Live Platform', 'Marketing Integration', 'Performance Reports', 'User Training'], 10.00, false, NULL);
    `);
    console.log('✅ Project phases deployed');

    // Step 2: Deploy Tasks
    console.log('✅ Step 2: Deploying tasks...');
    await executeSql(`
      INSERT INTO tasks (id, project_id, phase_id, title, description, status, priority, assigned_to, assigned_by, due_date, estimated_hours, actual_hours, tags, dependencies, attachments, checklist) VALUES
      ('550e8400-e29b-41d4-a716-446655440601', '550e8400-e29b-41d4-a716-446655440301', '550e8400-e29b-41d4-a716-446655440501', 'Requirements Gathering with Fashion Week Team', 'Conduct detailed interviews with event coordinators, designers, and models to understand current pain points and automation opportunities', 'completed', 1, '22222222-2222-2222-2222-222222222222', '22222222-2222-2222-2222-222222222222', '2024-01-20', 16.00, 18.50, ARRAY['requirements', 'interviews', 'discovery'], ARRAY[]::uuid[], '[{"name": "Interview Notes", "url": "https://docs.amoai.agency/fashionos-interviews.pdf"}]'::jsonb, '[{"item": "Schedule interviews with 5 event coordinators", "completed": true}, {"item": "Interview 3 designers", "completed": true}, {"item": "Talk to 5 models about current process", "completed": true}, {"item": "Document pain points", "completed": true}]'::jsonb),
      ('550e8400-e29b-41d4-a716-446655440602', '550e8400-e29b-41d4-a716-446655440301', '550e8400-e29b-41d4-a716-446655440502', 'Designer Portal UI/UX Design', 'Create comprehensive UI/UX designs for the designer portal including portfolio management, buyer meetings, and order processing interfaces', 'completed', 1, '44444444-4444-4444-4444-444444444444', '22222222-2222-2222-2222-222222222222', '2024-02-10', 24.00, 26.25, ARRAY['design', 'ui-ux', 'designer-portal'], ARRAY['550e8400-e29b-41d4-a716-446655440601']::uuid[], '[{"name": "Figma Designs", "url": "https://figma.com/fashionos-designer-portal"}]'::jsonb, '[{"item": "Portfolio management interface", "completed": true}, {"item": "Buyer meeting scheduler", "completed": true}, {"item": "Order processing flow", "completed": true}, {"item": "Analytics dashboard", "completed": true}]'::jsonb),
      ('550e8400-e29b-41d4-a716-446655440603', '550e8400-e29b-41d4-a716-446655440301', '550e8400-e29b-41d4-a716-446655440503', 'CrewAI Multi-Agent System Implementation', 'Develop and deploy CrewAI agents for event coordination, including scheduling agent, logistics agent, and communication agent', 'completed', 1, '33333333-3333-3333-3333-333333333333', '22222222-2222-2222-2222-222222222222', '2024-03-15', 40.00, 38.75, ARRAY['crewai', 'ai-agents', 'automation'], ARRAY['550e8400-e29b-41d4-a716-446655440602']::uuid[], '[{"name": "Agent Configuration", "url": "https://github.com/amoai/fashionos/blob/main/agents/config.py"}]'::jsonb, '[{"item": "Schedule coordination agent", "completed": true}, {"item": "Logistics management agent", "completed": true}, {"item": "Communication automation agent", "completed": true}, {"item": "Performance monitoring", "completed": true}]'::jsonb),
      ('550e8400-e29b-41d4-a716-446655440604', '550e8400-e29b-41d4-a716-446655440302', '550e8400-e29b-41d4-a716-446655440507', 'Claude AI Concierge Integration', 'Implement Claude-powered AI concierge with local knowledge about Medellín, cultural context, and personalized recommendations', 'in_progress', 1, '33333333-3333-3333-3333-333333333333', '22222222-2222-2222-2222-222222222222', '2024-05-15', 32.00, 18.50, ARRAY['claude-ai', 'concierge', 'local-knowledge'], ARRAY[]::uuid[], '[{"name": "Claude Integration Guide", "url": "https://docs.amoai.agency/claude-integration.md"}]'::jsonb, '[{"item": "Claude API setup", "completed": true}, {"item": "Local knowledge base creation", "completed": true}, {"item": "Cultural context training", "completed": false}, {"item": "Recommendation engine", "completed": false}]'::jsonb),
      ('550e8400-e29b-41d4-a716-446655440605', '550e8400-e29b-41d4-a716-446655440302', '550e8400-e29b-41d4-a716-446655440507', 'WhatsApp Commerce Integration', 'Implement WhatsApp Business API for booking confirmations, customer support, and promotional messaging', 'todo', 2, '33333333-3333-3333-3333-333333333333', '22222222-2222-2222-2222-222222222222', '2024-05-18', 24.00, 0.00, ARRAY['whatsapp', 'commerce', 'messaging'], ARRAY['550e8400-e29b-41d4-a716-446655440604']::uuid[], '[]'::jsonb, '[{"item": "WhatsApp Business API setup", "completed": false}, {"item": "Booking confirmation templates", "completed": false}, {"item": "Customer support bot", "completed": false}, {"item": "Promotional messaging system", "completed": false}]'::jsonb),
      ('550e8400-e29b-41d4-a716-446655440606', '550e8400-e29b-41d4-a716-446655440302', '550e8400-e29b-41d4-a716-446655440507', 'Colombian Payment Gateway Integration', 'Integrate PSE, Nequi, and Efecty payment methods for local market accessibility', 'review', 1, '33333333-3333-3333-3333-333333333333', '22222222-2222-2222-2222-222222222222', '2024-05-12', 20.00, 22.00, ARRAY['payments', 'pse', 'nequi', 'colombia'], ARRAY[]::uuid[], '[{"name": "Payment Integration Tests", "url": "https://docs.amoai.agency/colombia-payment-tests.pdf"}]'::jsonb, '[{"item": "PSE integration", "completed": true}, {"item": "Nequi wallet integration", "completed": true}, {"item": "Efecty cash network", "completed": true}, {"item": "Payment testing", "completed": false}]'::jsonb);
    `);
    console.log('✅ Tasks deployed');

    // Step 3: Deploy CopilotKit Forms
    console.log('🤖 Step 3: Deploying CopilotKit forms...');
    await executeSql(`
      INSERT INTO copilot_forms (id, form_type, user_id, project_id, status, form_data, validation_errors, submitted_at, approved_by, approved_at) VALUES
      ('550e8400-e29b-41d4-a716-446655440701', 'project_brief', '66666666-6666-6666-6666-666666666666', '550e8400-e29b-41d4-a716-446655440301', 'approved', '{"project_name": "Fashion Week Management Platform", "industry": "Fashion & Events", "company_size": "201-500", "current_challenges": ["Manual event coordination takes 3 days", "High error rate in scheduling", "Difficulty managing 100+ staff members", "Poor communication between stakeholders"], "desired_outcomes": ["Automate event setup process", "Reduce coordination time to minutes", "Eliminate scheduling errors", "Improve stakeholder communication"], "budget_range": "$100K-$200K", "timeline": "3-4 months", "technical_requirements": {"platforms": ["Web", "Mobile"], "integrations": ["Payment processing", "Calendar systems", "Communication tools"], "scalability": "High - 50+ events annually"}, "ai_automation_goals": {"automation_percentage": 90, "areas_to_automate": ["Event scheduling", "Vendor coordination", "Guest management", "Real-time updates"]}}'::jsonb, '[]'::jsonb, '2024-01-10 14:30:00', '22222222-2222-2222-2222-222222222222', '2024-01-10 16:45:00'),
      ('550e8400-e29b-41d4-a716-446655440702', 'service_request', '77777777-7777-7777-7777-777777777777', '550e8400-e29b-41d4-a716-446655440302', 'submitted', '{"service_type": "Tourism Platform", "location": "Medellín, Colombia", "target_market": "International tourists and locals", "platform_features": ["Experience booking", "Property rentals", "AI concierge", "Local payment methods"], "language_requirements": ["Spanish", "English"], "payment_methods": ["PSE", "Nequi", "Efecty", "Credit Cards"], "revenue_model": "Commission-based", "target_monthly_revenue": 75000, "launch_timeline": "2-3 months", "special_requirements": {"local_compliance": true, "cultural_sensitivity": "High", "whatsapp_integration": true}}'::jsonb, '[{"field": "legal_documentation", "message": "Requires Colombian business registration documents"}]'::jsonb, '2024-02-28 11:20:00', NULL, NULL),
      ('550e8400-e29b-41d4-a716-446655440703', 'contact', '88888888-8888-8888-8888-888888888888', NULL, 'approved', '{"inquiry_type": "New Project", "company": "AutoMax Dealer Network", "contact_person": "Robert Wilson", "email": "robert.wilson@automax.com", "phone": "+1-313-555-0003", "project_description": "Need AI-powered automotive marketplace connecting 500+ dealers with intelligent search and recommendation capabilities", "urgency": "High", "budget_estimate": "$150K-$250K", "key_requirements": ["Handle 50,000+ vehicle listings", "AI-powered search and recommendations", "Real-time inventory synchronization", "Dealer portal and analytics"], "success_metrics": {"target_gmv": 5000000, "dealer_adoption": "100%", "search_accuracy": "95%+"}}'::jsonb, '[]'::jsonb, '2023-09-15 09:30:00', '55555555-5555-5555-5555-555555555555', '2023-09-15 14:15:00');
    `);
    console.log('✅ CopilotKit forms deployed');

    // Step 4: Deploy CopilotKit States
    console.log('🔄 Step 4: Deploying CopilotKit states...');
    await executeSql(`
      INSERT INTO copilot_states (id, session_id, user_id, state_name, state_data, previous_state, next_states, metadata) VALUES
      ('550e8400-e29b-41d4-a716-446655440801', 'session_fash_001', '66666666-6666-6666-6666-666666666666', 'project_brief_started', '{"form_progress": 0.2, "current_section": "basic_info", "started_at": "2024-01-10T14:30:00Z", "answers_count": 3, "estimated_completion": 15}'::jsonb, NULL, ARRAY['project_brief_technical', 'project_brief_budget'], '{"ip_address": "192.168.1.100", "user_agent": "Mozilla/5.0", "device": "desktop"}'::jsonb),
      ('550e8400-e29b-41d4-a716-446655440802', 'session_fash_001', '66666666-6666-6666-6666-666666666666', 'project_brief_technical', '{"form_progress": 0.7, "current_section": "technical_requirements", "ai_suggestions_accepted": 3, "answers_count": 12, "estimated_completion": 5}'::jsonb, 'project_brief_started', ARRAY['project_brief_completed'], '{"suggestions_shown": 5, "suggestions_accepted": 3, "time_saved_minutes": 8}'::jsonb),
      ('550e8400-e29b-41d4-a716-446655440803', 'session_med_001', '77777777-7777-7777-7777-777777777777', 'service_request_payment_config', '{"form_progress": 0.85, "current_section": "payment_methods", "local_payment_methods": ["PSE", "Nequi", "Efecty"], "validation_pending": true}'::jsonb, 'service_request_features', ARRAY['service_request_submitted'], '{"local_market": "colombia", "payment_complexity": "high", "compliance_required": true}'::jsonb);
    `);
    console.log('✅ CopilotKit states deployed');

    // Step 5: Deploy CopilotKit Interactions
    console.log('💬 Step 5: Deploying CopilotKit interactions...');
    await executeSql(`
      INSERT INTO copilot_interactions (id, user_id, session_id, interaction_type, content, metadata, response_time_ms, is_successful, error_message) VALUES
      ('550e8400-e29b-41d4-a716-446655440901', '66666666-6666-6666-6666-666666666666', 'session_fash_001', 'suggestion', 'Based on your event management needs, I suggest including real-time coordination features and automated vendor communication.', '{"suggestion_type": "feature_recommendation", "confidence": 0.92, "context": "event_management"}'::jsonb, 250, true, NULL),
      ('550e8400-e29b-41d4-a716-446655440902', '66666666-6666-6666-6666-666666666666', 'session_fash_001', 'form_fill', 'Auto-filled technical requirements based on fashion industry best practices', '{"fields_filled": 4, "auto_completion": true, "accuracy": 0.95}'::jsonb, 150, true, NULL),
      ('550e8400-e29b-41d4-a716-446655440903', '77777777-7777-7777-7777-777777777777', 'session_med_001', 'message', 'For Colombian market, PSE and Nequi are essential payment methods. Efecty provides cash network coverage.', '{"message_type": "payment_advice", "local_expertise": true, "market": "colombia"}'::jsonb, 180, true, NULL),
      ('550e8400-e29b-41d4-a716-446655440904', '88888888-8888-8888-8888-888888888888', 'session_auto_001', 'action', 'Generated automotive marketplace feature recommendations based on industry analysis', '{"action_type": "feature_generation", "industry": "automotive", "features_generated": 8}'::jsonb, 420, true, NULL),
      ('550e8400-e29b-41d4-a716-446655440905', '77777777-7777-7777-7777-777777777777', 'session_med_002', 'error', 'Failed to validate Colombian tax registration format', '{"error_type": "validation_error", "field": "tax_id", "format": "colombian_nit"}'::jsonb, 500, false, 'Invalid NIT format for Colombian business registration');
    `);
    console.log('✅ CopilotKit interactions deployed');

    // Step 6: Deploy CopilotKit Suggestions
    console.log('💡 Step 6: Deploying CopilotKit suggestions...');
    await executeSql(`
      INSERT INTO copilot_suggestions (id, user_id, context_type, context_id, suggestion_text, confidence_score, was_accepted, feedback_rating, feedback_comment) VALUES
      ('550e8400-e29b-41d4-a716-446655441001', '66666666-6666-6666-6666-666666666666', 'project', '550e8400-e29b-41d4-a716-446655440301', 'Consider implementing CrewAI multi-agent system for event coordination. This could automate 90% of your current manual processes.', 0.92, true, 5, 'Excellent suggestion! This is exactly what we needed for automation.'),
      ('550e8400-e29b-41d4-a716-446655441002', '66666666-6666-6666-6666-666666666666', 'form', '550e8400-e29b-41d4-a716-446655440701', 'Based on your event size, recommend real-time WhatsApp notifications for stakeholder communication.', 0.88, true, 4, 'Great idea! WhatsApp integration will be crucial for our international events.');
    `);
    console.log('✅ CopilotKit suggestions deployed');

    // Final verification
    console.log('\n🔍 Final verification...');
    const verification = await executeSql(`
      SELECT 
        'project_phases' as table_name, COUNT(*) as count FROM project_phases
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
      console.log('\n📊 Additional Data Summary:');
      verification.data.forEach(row => {
        console.log(`   ${row.table_name}: ${row.count} records`);
      });
    }

    console.log('\n🎉 Remaining sample data deployment successful!');
    console.log('\n📋 What was deployed:');
    console.log('   ✅ 8 Project Phases (Detailed project milestones)');
    console.log('   ✅ 6 Tasks (Realistic development tasks with status)');
    console.log('   ✅ 3 CopilotKit Forms (AI-powered form submissions)');
    console.log('   ✅ 3 CopilotKit States (User journey tracking)');
    console.log('   ✅ 5 CopilotKit Interactions (AI assistance log)');
    console.log('   ✅ 2 CopilotKit Suggestions (AI recommendations)');
    
    console.log('\n🚀 Your AI agency database now has COMPLETE sample data!');
    console.log('\n💼 Complete Business Impact:');
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

deployRemainingSampleData();
