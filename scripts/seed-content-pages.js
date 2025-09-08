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

async function seedContentPages() {
  console.log('🚀 Seeding Content Pages with PRD-based Sample Data...\n');
  
  try {
    // Step 1: Seed content pages based on PRD
    console.log('📄 Step 1: Seeding content pages...');
    await executeSql(`
      INSERT INTO content_pages (id, slug, title, content, content_json, meta_title, meta_description, meta_keywords, og_image, author_id, status, published_at, views_count) VALUES
      (
        '550e8400-e29b-41d4-a716-446655441501',
        'ai-powered-digital-agency',
        'AI-Powered Digital Agency: Transform Your Business in 2-8 Weeks',
        'Transform your business operations with our AI-powered digital agency platform. We deliver enterprise-grade AI solutions in 2-8 weeks instead of the industry standard 6 months. Our proven automation frameworks achieve 90% process automation with 293% average ROI.',
        '{"sections": [{"type": "hero", "title": "AI-Powered Digital Agency", "subtitle": "Transform Your Business in 2-8 Weeks", "cta": "Start Your Project"}, {"type": "features", "items": ["3-minute solutions vs 3-day processes", "293% average ROI in 3 months", "$4.3M monthly revenue generated", "14+ integrated technologies"]}, {"type": "testimonials", "items": [{"quote": "AMO AI transformed our entire operation. What used to take 3 days now happens in 3 minutes.", "author": "David Kim, Operations Director"}]}]}'::jsonb,
        'AI-Powered Digital Agency | 2-8 Week Delivery | 293% ROI',
        'Transform your business with AI automation. We deliver enterprise-grade solutions in 2-8 weeks with 293% average ROI. Proven track record with $4.3M monthly revenue.',
        ARRAY['AI automation', 'digital agency', 'business transformation', 'ROI', 'enterprise AI'],
        'https://cdn.amoai.agency/og/ai-agency-hero.jpg',
        '11111111-1111-1111-1111-111111111111',
        'published',
        '2024-01-15 10:00:00',
        1250
      ),
      (
        '550e8400-e29b-41d4-a716-446655441502',
        'fashionos-case-study',
        'FashionOS: From 3 Days to 3 Minutes - Complete Event Management Automation',
        'Fashion Week Global was struggling with a complex 3-day event setup process that required 100+ staff members and had a 12% error rate. We built FashionOS, a comprehensive AI-powered event management platform that automates 90% of the coordination process.',
        '{"sections": [{"type": "challenge", "title": "The Challenge", "content": "3-day setup process, 100+ staff, 12% error rate"}, {"type": "solution", "title": "Our Solution", "content": "AI-powered platform with 90% automation"}, {"type": "results", "title": "Results", "content": "3-minute setup, 90% automation, $400K annual savings"}]}'::jsonb,
        'FashionOS Case Study: 3 Days to 3 Minutes | AMO AI',
        'See how we transformed Fashion Week Global from 3-day setup to 3-minute automation with 90% process automation and $400K annual savings.',
        ARRAY['FashionOS', 'event management', 'automation', 'case study', 'fashion week'],
        'https://cdn.amoai.agency/og/fashionos-case-study.jpg',
        '22222222-2222-2222-2222-222222222222',
        'published',
        '2024-04-20 10:00:00',
        890
      ),
      (
        '550e8400-e29b-41d4-a716-446655441503',
        'automax-marketplace',
        'AutoMax: $4.3M Monthly GMV with AI-Powered Automotive Marketplace',
        'AutoMax needed to connect 500 dealers with a unified platform that could handle 50,000+ vehicle listings while providing intelligent search and recommendation capabilities. We developed a comprehensive AI marketplace with advanced search algorithms and machine learning-powered recommendations.',
        '{"sections": [{"type": "challenge", "title": "The Challenge", "content": "Connect 500 dealers, 50K+ vehicles, intelligent search"}, {"type": "solution", "title": "Our Solution", "content": "AI marketplace with ML recommendations"}, {"type": "results", "title": "Results", "content": "$4.3M monthly GMV, 500+ dealers, 95% search accuracy"}]}'::jsonb,
        'AutoMax Case Study: $4.3M Monthly GMV | AI Marketplace',
        'Discover how we built an AI-powered automotive marketplace for AutoMax, achieving $4.3M monthly GMV with 500+ dealers and 95% search accuracy.',
        ARRAY['AutoMax', 'automotive marketplace', 'AI search', 'GMV', 'case study'],
        'https://cdn.amoai.agency/og/automax-case-study.jpg',
        '22222222-2222-2222-2222-222222222222',
        'published',
        '2024-02-15 14:30:00',
        1120
      ),
      (
        '550e8400-e29b-41d4-a716-446655441504',
        'i-love-medellin-tourism',
        'I Love Medellín: Tourism Revolution with AI Concierge and Local Payments',
        'Medellín needed a comprehensive tourism platform that could handle experience booking, property rentals, and provide AI-powered concierge services while integrating with local payment methods. We created a multi-vertical tourism marketplace with intelligent booking systems and Claude-powered AI concierge.',
        '{"sections": [{"type": "challenge", "title": "The Challenge", "content": "Tourism platform, AI concierge, local payments"}, {"type": "solution", "title": "Our Solution", "content": "Multi-vertical marketplace with Claude AI"}, {"type": "results", "title": "Results", "content": "50 properties, 120 experiences, 95% automation, $25K monthly revenue"}]}'::jsonb,
        'I Love Medellín: Tourism Revolution | AI Concierge Platform',
        'Explore how we built a tourism revolution for Medellín with AI concierge, local payments, and 95% automation achieving $25K monthly revenue.',
        ARRAY['I Love Medellín', 'tourism', 'AI concierge', 'Colombia', 'marketplace'],
        'https://cdn.amoai.agency/og/medellin-case-study.jpg',
        '22222222-2222-2222-2222-222222222222',
        'published',
        '2024-04-25 09:15:00',
        750
      ),
      (
        '550e8400-e29b-41d4-a716-446655441505',
        'ai-discovery-system',
        'AI-Powered Discovery System: Replace 2.5-Hour Calls with 30-Minute AI Conversations',
        'Our AI-powered discovery system replaces traditional 2.5-hour discovery calls with intelligent 30-minute AI conversations. The system uses adaptive questioning, industry pattern recognition, and automatic project scoping to capture 95% information accuracy while reducing discovery time by 80%.',
        '{"sections": [{"type": "problem", "title": "The Problem", "content": "2.5-hour discovery calls, low information capture"}, {"type": "solution", "title": "Our Solution", "content": "AI-powered discovery with CopilotKit and Claude"}, {"type": "benefits", "title": "Benefits", "content": "80% time reduction, 95% accuracy, 60% self-qualification"}]}'::jsonb,
        'AI Discovery System: 30-Minute AI Conversations | AMO AI',
        'Discover how our AI-powered discovery system reduces discovery time by 80% while achieving 95% information capture accuracy through intelligent conversations.',
        ARRAY['AI discovery', 'CopilotKit', 'Claude', 'automation', 'conversational AI'],
        'https://cdn.amoai.agency/og/ai-discovery-system.jpg',
        '33333333-3333-3333-3333-333333333333',
        'published',
        '2024-03-10 11:00:00',
        680
      ),
      (
        '550e8400-e29b-41d4-a716-446655441506',
        'instant-proposal-generator',
        'Instant Proposal Generator: Professional Proposals in Real-Time',
        'Generate professional proposals in real-time with our instant proposal generator. The system provides dynamic pricing based on scope, timeline calculation, resource allocation, and risk assessment. Transform your sales process from 2-day proposal creation to instant generation.',
        '{"sections": [{"type": "problem", "title": "The Problem", "content": "2-day proposal creation, inconsistent pricing"}, {"type": "solution", "title": "Our Solution", "content": "Real-time proposal generation with dynamic pricing"}, {"type": "features", "title": "Features", "content": "Dynamic pricing, timeline calculation, resource allocation"}]}'::jsonb,
        'Instant Proposal Generator: Real-Time Professional Proposals',
        'Generate professional proposals instantly with dynamic pricing, timeline calculation, and resource allocation. Transform your sales process from days to minutes.',
        ARRAY['proposal generator', 'sales automation', 'dynamic pricing', 'real-time', 'business proposals'],
        'https://cdn.amoai.agency/og/proposal-generator.jpg',
        '33333333-3333-3333-3333-333333333333',
        'published',
        '2024-03-15 14:00:00',
        520
      ),
      (
        '550e8400-e29b-41d4-a716-446655441507',
        'multi-agent-systems',
        'Multi-Agent Systems with CrewAI: Intelligent Automation Teams',
        'Our multi-agent systems use CrewAI to create intelligent automation teams. Each agent has specialized roles: Research Agent for market analysis, Analysis Agent for data processing, Content Agent for proposal writing, QA Agent for testing, and Monitor Agent for performance tracking.',
        '{"sections": [{"type": "overview", "title": "Multi-Agent Architecture", "content": "Specialized AI agents working together"}, {"type": "agents", "title": "Agent Roles", "content": "Research, Analysis, Content, QA, Monitor agents"}, {"type": "benefits", "title": "Benefits", "content": "92% success rate, automated workflows, intelligent decision making"}]}'::jsonb,
        'Multi-Agent Systems: CrewAI Intelligent Automation Teams',
        'Discover our multi-agent systems using CrewAI for intelligent automation. Specialized agents achieve 92% success rate in automated workflows.',
        ARRAY['CrewAI', 'multi-agent systems', 'automation', 'AI agents', 'intelligent workflows'],
        'https://cdn.amoai.agency/og/multi-agent-systems.jpg',
        '33333333-3333-3333-3333-333333333333',
        'published',
        '2024-03-20 16:00:00',
        420
      ),
      (
        '550e8400-e29b-41d4-a716-446655441508',
        'whatsapp-business-integration',
        'WhatsApp Business Integration: Seamless Client Communication',
        'Integrate WhatsApp Business API for seamless client communication. Our system handles client updates, appointment reminders, quick approvals, support tickets, and payment notifications. Features include natural language processing, multi-language support, and media handling.',
        '{"sections": [{"type": "features", "title": "Features", "content": "Client updates, reminders, approvals, support, payments"}, {"type": "capabilities", "title": "Capabilities", "content": "NLP, multi-language, media handling, quick replies"}, {"type": "benefits", "title": "Benefits", "content": "95% client satisfaction, instant communication, automated workflows"}]}'::jsonb,
        'WhatsApp Business Integration: Seamless Client Communication',
        'Integrate WhatsApp Business API for seamless client communication with NLP, multi-language support, and automated workflows.',
        ARRAY['WhatsApp Business', 'client communication', 'NLP', 'automation', 'messaging'],
        'https://cdn.amoai.agency/og/whatsapp-integration.jpg',
        '33333333-3333-3333-3333-333333333333',
        'published',
        '2024-03-25 10:30:00',
        380
      ),
      (
        '550e8400-e29b-41d4-a716-446655441509',
        'workflow-automation-n8n',
        'Workflow Automation with n8n: 70% Process Automation',
        'Our n8n-powered workflow automation achieves 70% process automation across all business operations. Pre-built workflows include lead processing (5min vs 2hrs), project kickoff (instant vs 1 day), invoice generation (automated), and status updates (no manual work).',
        '{"sections": [{"type": "workflows", "title": "Pre-built Workflows", "content": "Lead processing, project kickoff, invoicing, status updates"}, {"type": "automation", "title": "Automation Level", "content": "70% process automation achieved"}, {"type": "benefits", "title": "Benefits", "content": "5min vs 2hrs lead processing, instant project kickoff"}]}'::jsonb,
        'Workflow Automation with n8n: 70% Process Automation',
        'Achieve 70% process automation with our n8n-powered workflows. Transform lead processing from 2 hours to 5 minutes with intelligent automation.',
        ARRAY['n8n', 'workflow automation', 'process automation', 'business automation', 'efficiency'],
        'https://cdn.amoai.agency/og/n8n-automation.jpg',
        '33333333-3333-3333-3333-333333333333',
        'published',
        '2024-03-30 13:45:00',
        340
      ),
      (
        '550e8400-e29b-41d4-a716-446655441510',
        'client-self-service-portal',
        'Client Self-Service Portal: Complete Project Visibility',
        'Our client self-service portal provides complete project visibility and control. Features include project status viewing, document access, approval workflows, support tickets, and invoice management. Clients can track progress, access deliverables, and manage their projects independently.',
        '{"sections": [{"type": "features", "title": "Portal Features", "content": "Project status, documents, approvals, support, invoices"}, {"type": "benefits", "title": "Client Benefits", "content": "Complete visibility, self-service, real-time updates"}, {"type": "impact", "title": "Business Impact", "content": "Reduced support tickets, improved satisfaction, streamlined operations"}]}'::jsonb,
        'Client Self-Service Portal: Complete Project Visibility',
        'Provide clients with complete project visibility through our self-service portal. Features include status tracking, document access, and approval workflows.',
        ARRAY['client portal', 'self-service', 'project visibility', 'client experience', 'portal'],
        'https://cdn.amoai.agency/og/client-portal.jpg',
        '44444444-4444-4444-4444-444444444444',
        'published',
        '2024-04-05 15:20:00',
        290
      ),
      (
        '550e8400-e29b-41d4-a716-446655441511',
        'performance-analytics',
        'Performance Analytics: Real-Time Business Intelligence',
        'Our performance analytics dashboard provides real-time business intelligence across project health, team performance, client satisfaction, and financial metrics. Track timeline, budget, tasks with Gantt charts, team velocity with bar charts, and NPS trends with real-time updates.',
        '{"sections": [{"type": "metrics", "title": "Key Metrics", "content": "Project health, team performance, client satisfaction, financial"}, {"type": "visualizations", "title": "Visualizations", "content": "Gantt charts, bar charts, trend lines, P&L forecasts"}, {"type": "updates", "title": "Update Frequency", "content": "Real-time project health, daily team performance, weekly satisfaction"}]}'::jsonb,
        'Performance Analytics: Real-Time Business Intelligence',
        'Get real-time business intelligence with our performance analytics dashboard. Track project health, team performance, and financial metrics with advanced visualizations.',
        ARRAY['analytics', 'business intelligence', 'performance metrics', 'dashboards', 'real-time'],
        'https://cdn.amoai.agency/og/performance-analytics.jpg',
        '44444444-4444-4444-4444-444444444444',
        'published',
        '2024-04-10 12:00:00',
        260
      ),
      (
        '550e8400-e29b-41d4-a716-446655441512',
        'rag-knowledge-system',
        'RAG Knowledge System: Intelligent Document Search and Q&A',
        'Our RAG (Retrieval-Augmented Generation) knowledge system provides intelligent document search and Q&A capabilities. The system includes document ingestion pipeline, vector database with Pinecone, semantic search, and continuous learning across industry knowledge bases.',
        '{"sections": [{"type": "components", "title": "System Components", "content": "Document ingestion, vector database, semantic search, Q&A interface"}, {"type": "knowledge", "title": "Knowledge Base", "content": "Fashion (500+ docs), E-commerce (800+ docs), Tourism (300+ docs), Tech specs (1000+ docs)"}, {"type": "benefits", "title": "Benefits", "content": "Intelligent search, accurate answers, continuous learning"}]}'::jsonb,
        'RAG Knowledge System: Intelligent Document Search and Q&A',
        'Access intelligent document search and Q&A with our RAG knowledge system. Features semantic search, vector database, and continuous learning across industry knowledge.',
        ARRAY['RAG', 'knowledge system', 'document search', 'Pinecone', 'semantic search'],
        'https://cdn.amoai.agency/og/rag-knowledge.jpg',
        '33333333-3333-3333-3333-333333333333',
        'published',
        '2024-04-15 14:30:00',
        180
      );
    `);
    console.log('✅ content pages seeded');

    // Final verification
    console.log('\n🔍 Final verification...');
    const verification = await executeSql(`
      SELECT 
        'content_pages' as table_name, 
        COUNT(*) as count,
        COUNT(CASE WHEN status = 'published' THEN 1 END) as published_count
      FROM content_pages;
    `);

    if (verification.data && verification.data.length > 0) {
      const result = verification.data[0];
      console.log('\n📊 Content Pages Summary:');
      console.log(`   Total pages: ${result.count}`);
      console.log(`   Published pages: ${result.published_count}`);
    }

    console.log('\n🎉 Content pages sample data deployment successful!');
    console.log('\n📋 What was deployed:');
    console.log('   ✅ 12 Content Pages (Based on PRD content)');
    console.log('   ✅ Case Studies (FashionOS, AutoMax, I Love Medellín)');
    console.log('   ✅ Feature Pages (AI Discovery, Proposal Generator, Multi-Agent Systems)');
    console.log('   ✅ Integration Pages (WhatsApp, n8n, Client Portal)');
    console.log('   ✅ Technical Pages (Performance Analytics, RAG Knowledge System)');
    
    console.log('\n🚀 Your AI agency now has comprehensive content management!');
    console.log('\n💼 Content Management Impact:');
    console.log('   • SEO-optimized pages with meta tags and keywords');
    console.log('   • Structured content with JSON sections for dynamic rendering');
    console.log('   • Author attribution and publishing workflow');
    console.log('   • View tracking and analytics integration');
    console.log('   • Complete content strategy based on PRD requirements');
    
  } catch (error) {
    console.error('\n❌ Data deployment failed:', error.message);
    process.exit(1);
  }
}

seedContentPages();
