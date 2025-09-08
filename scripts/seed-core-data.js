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

async function seedCoreData() {
  console.log('🌱 Seeding Core Digital Agency Data...\n');
  
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
      ('550e8400-e29b-41d4-a716-446655440101', 'AI-Powered Web Applications', 'ai-web-applications', 'ai_development', 'Build intelligent web apps with Claude, GPT-4, and modern frameworks', ARRAY['Claude 3 Integration', 'GPT-4 API', 'Real-time Chat', 'Custom UI/UX'], ARRAY['Claude 3', 'GPT-4', 'React', 'Supabase'], 50000, 30000, 100000, 4, 12, 300, true, NOW()),
      ('550e8400-e29b-41d4-a716-446655440102', 'Rapid MVP Development', 'rapid-mvp-development', 'rapid_development', 'Get your idea to market in weeks, not months', ARRAY['Quick Prototyping', 'AI-Powered Development', 'Modern Stack', 'Fast Deployment'], ARRAY['Lovable', 'Webflow', 'Stripe', 'n8n'], 25000, 15000, 50000, 2, 6, 250, true, NOW()),
      ('550e8400-e29b-41d4-a716-446655440103', 'Process Automation', 'process-automation', 'automation', 'Automate repetitive tasks and workflows', ARRAY['Workflow Automation', 'API Integrations', 'Custom Triggers', 'Monitoring Dashboard'], ARRAY['n8n', 'Zapier', 'WhatsApp API', 'Stripe'], 15000, 10000, 30000, 1, 4, 400, true, NOW()),
      ('550e8400-e29b-41d4-a716-446655440104', 'AI Chatbots & Agents', 'ai-chatbots-agents', 'ai_development', 'Intelligent customer service and support systems', ARRAY['Natural Language Processing', 'Multi-channel Support', 'Learning Capabilities', 'Analytics Dashboard'], ARRAY['Claude 3', 'LangChain', 'WhatsApp', 'Supabase'], 30000, 20000, 60000, 3, 8, 350, true, NOW()),
      ('550e8400-e29b-41d4-a716-446655440105', 'Data Analytics Platform', 'data-analytics-platform', 'data_analytics', 'Turn data into actionable insights', ARRAY['Real-time Analytics', 'Custom Dashboards', 'Predictive Modeling', 'Data Visualization'], ARRAY['Python', 'PostgreSQL', 'Pinecone', 'React'], 40000, 25000, 80000, 6, 16, 280, true, NOW()),
      ('550e8400-e29b-41d4-a716-446655440106', 'E-commerce Solutions', 'ecommerce-solutions', 'ecommerce', 'Complete online store with AI recommendations', ARRAY['AI Recommendations', 'Payment Processing', 'Inventory Management', 'Customer Analytics'], ARRAY['Shopify', 'Stripe', 'Claude 3', 'React'], 35000, 20000, 70000, 4, 10, 320, true, NOW()),
      ('550e8400-e29b-41d4-a716-446655440107', 'Mobile App Development', 'mobile-app-development', 'mobile_development', 'Native and cross-platform mobile applications', ARRAY['Cross-platform Support', 'Native Performance', 'Push Notifications', 'Offline Capabilities'], ARRAY['React Native', 'Flutter', 'Supabase', 'Stripe'], 45000, 30000, 90000, 6, 14, 290, true, NOW()),
      ('550e8400-e29b-41d4-a716-446655440108', 'API Integration Services', 'api-integration-services', 'integration', 'Connect all your tools and platforms', ARRAY['Custom API Development', 'Third-party Integrations', 'Data Synchronization', 'Error Handling'], ARRAY['n8n', 'Zapier', 'REST APIs', 'Webhooks'], 20000, 10000, 40000, 2, 6, 380, true, NOW());
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
      ('550e8400-e29b-41d4-a716-446655440205', 'fintech-fraud-detection', 'FinTech: Fraud Detection with 99.9% Accuracy', 'FinTech Solutions', 'Finance', 'High fraud rates in payment processing', 'AI-powered fraud detection system', '99.9% fraud detection accuracy, 80% reduction in false positives', ARRAY['Python', 'Claude 3', 'PostgreSQL', 'React'], true, true, NOW(), NOW()),
      ('550e8400-e29b-41d4-a716-446655440206', 'quickbite-delivery', 'QuickBite: Food Delivery Revolution', 'QuickBite Delivery', 'Food & Beverage', 'Inefficient delivery routing and customer service', 'AI-powered delivery optimization and chatbot support', '30% faster deliveries, 50% reduction in customer complaints', ARRAY['React Native', 'Claude 3', 'Google Maps API', 'Stripe'], false, true, NOW(), NOW()),
      ('550e8400-e29b-41d4-a716-446655440207', 'prime-properties-crm', 'Prime Properties: Smart Real Estate CRM', 'Prime Properties', 'Real Estate', 'Manual lead management and follow-up processes', 'Intelligent CRM with automated lead nurturing', '200% increase in lead conversion, 80% time savings', ARRAY['React', 'Supabase', 'Claude 3', 'Email API'], false, true, NOW(), NOW()),
      ('550e8400-e29b-41d4-a716-446655440208', 'techcorp-ai-platform', 'TechCorp: Enterprise AI Platform', 'TechCorp Solutions', 'Software', 'Complex customer service operations', 'Comprehensive AI customer service platform', '70% reduction in support tickets, 95% customer satisfaction', ARRAY['Claude 3', 'React', 'PostgreSQL', 'n8n'], false, true, NOW(), NOW());
    `);
    console.log('✅ Case studies seeded');

    // Step 4: Seed Blog Posts
    console.log('📝 Step 4: Seeding blog posts...');
    await executeSql(`
      INSERT INTO blog_posts (id, title, slug, content, excerpt, author_id, is_published, published_at, created_at) VALUES
      ('550e8400-e29b-41d4-a716-446655440301', 'How AI is Revolutionizing Customer Service', 'ai-customer-service-revolution', 'Artificial Intelligence is transforming customer service across industries. From chatbots that understand context to intelligent routing systems, AI is making customer interactions faster, more accurate, and more satisfying. In this comprehensive guide, we explore the latest trends and technologies shaping the future of customer service.', 'Discover how AI chatbots and agents are improving customer experiences and reducing response times by up to 80%.', 'user-002', true, NOW(), NOW()),
      ('blog-002', 'Building MVPs in 2 Weeks: A Complete Guide', 'mvp-development-guide', 'Rapid MVP development is essential for startups looking to validate ideas quickly. With modern tools like Lovable, Webflow, and AI-powered development platforms, you can go from concept to market in record time. Learn the strategies and tools that successful startups use to build and launch MVPs efficiently.', 'Learn how to build and launch MVPs quickly using modern tools and AI-powered development platforms.', 'user-003', true, NOW(), NOW()),
      ('blog-003', 'The Future of E-commerce: AI-Powered Recommendations', 'ai-ecommerce-recommendations', 'E-commerce is evolving with AI-powered personalization. From intelligent product recommendations to dynamic pricing strategies, AI is reshaping how customers discover and purchase products online. Explore the technologies and strategies that are driving the next generation of online shopping experiences.', 'Explore how AI is reshaping online shopping experiences with personalized recommendations and intelligent automation.', 'user-004', true, NOW(), NOW()),
      ('blog-004', 'Process Automation: From Manual to Magical', 'process-automation-guide', 'Manual processes are the biggest productivity killers in modern businesses. Process automation using tools like n8n, Zapier, and custom AI workflows can transform your operations from time-consuming manual tasks to efficient, automated systems. Discover how to identify automation opportunities and implement solutions that scale.', 'Transform your business with intelligent process automation that reduces manual work by up to 90%.', 'user-005', true, NOW(), NOW()),
      ('blog-005', 'Healthcare Technology: Improving Patient Outcomes', 'healthcare-tech-patient-outcomes', 'Technology is revolutionizing healthcare delivery. From AI-powered diagnostic tools to intelligent patient management systems, digital solutions are improving patient outcomes and reducing healthcare costs. See how leading healthcare organizations are leveraging technology to provide better care.', 'See how digital solutions are improving patient care and reducing healthcare costs through intelligent automation.', 'user-002', true, NOW(), NOW()),
      ('blog-006', 'FinTech Innovation: AI in Financial Services', 'fintech-ai-innovation', 'The financial services industry is embracing AI to improve security, reduce fraud, and enhance customer experiences. From intelligent fraud detection to automated investment advice, AI is transforming how financial institutions operate. Learn about the latest innovations and their impact on the industry.', 'Discover how AI is transforming financial services with intelligent fraud detection and automated processes.', 'user-003', true, NOW(), NOW()),
      ('blog-007', 'Mobile App Development: Native vs Cross-Platform', 'mobile-app-development-guide', 'Choosing between native and cross-platform mobile development can make or break your app project. With frameworks like React Native and Flutter, cross-platform development has become increasingly viable. Compare the pros and cons of each approach and learn when to use which strategy.', 'Compare native and cross-platform mobile development approaches to choose the best strategy for your project.', 'user-004', true, NOW(), NOW()),
      ('blog-008', 'Data Analytics: Turning Information into Insights', 'data-analytics-insights', 'Data is the new oil, but only if you know how to extract its value. Modern data analytics platforms combine AI, machine learning, and visualization tools to turn raw data into actionable insights. Learn how to build effective data analytics solutions that drive business decisions.', 'Learn how to build effective data analytics solutions that turn raw data into actionable business insights.', 'user-005', true, NOW(), NOW());
    `);
    console.log('✅ Blog posts seeded');

    // Step 5: Seed Content Pages
    console.log('📄 Step 5: Seeding content pages...');
    await executeSql(`
      INSERT INTO content_pages (id, title, slug, content, author_id, status, created_at) VALUES
      ('page-001', 'About Us', 'about', 'AMO AI Agency specializes in rapid application development using cutting-edge AI technologies. We help businesses transform their ideas into production-ready applications in weeks, not months. Our team of expert developers and AI specialists work with the latest tools and frameworks to deliver exceptional results.', 'user-002', 'published', NOW()),
      ('page-002', 'Our Services', 'services', 'We offer comprehensive AI development services including web applications, mobile apps, process automation, and data analytics. Our expertise spans Claude 3, GPT-4, React, Supabase, and 50+ other cutting-edge technologies. From MVPs to enterprise solutions, we deliver results that drive business growth.', 'user-002', 'published', NOW()),
      ('page-003', 'Contact Information', 'contact', 'Get in touch with our team for your next project. We offer free consultations to explore possibilities and provide transparent pricing for all our services. Contact us via email, phone, or schedule a call to discuss your requirements.', 'user-002', 'published', NOW()),
      ('page-004', 'Privacy Policy', 'privacy', 'Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information. We are committed to maintaining the confidentiality and security of your data in accordance with applicable privacy laws and regulations.', 'user-002', 'published', NOW()),
      ('page-005', 'Terms of Service', 'terms', 'Please read our terms of service carefully before using our services. These terms govern your use of our website and services, including our development services, consulting, and support. By using our services, you agree to be bound by these terms.', 'user-002', 'published', NOW()),
      ('page-006', 'Case Studies', 'case-studies', 'Explore our successful projects and client stories. From FashionOS automation to FinTech fraud detection, our case studies showcase the real-world impact of AI-powered solutions. See how we help businesses achieve their goals through intelligent technology.', 'user-002', 'published', NOW()),
      ('page-007', 'Pricing Guide', 'pricing', 'Transparent pricing for all our services. We offer flexible packages ranging from $15K MVPs to $250K enterprise solutions. All projects include source code, documentation, and deployment. Custom quotes available for unique requirements.', 'user-002', 'published', NOW()),
      ('page-008', 'FAQ', 'faq', 'Frequently asked questions about our services, pricing, and development process. Find answers to common questions about AI development, project timelines, technology choices, and support. If you have additional questions, please contact us.', 'user-002', 'published', NOW());
    `);
    console.log('✅ Content pages seeded');

    // Final verification
    console.log('\n🔍 Final verification...');
    const verification = await executeSql(`
      SELECT 
        'services' as table_name, COUNT(*) as count FROM services
      UNION ALL
      SELECT 'case_studies', COUNT(*) FROM case_studies
      UNION ALL
      SELECT 'blog_posts', COUNT(*) FROM blog_posts
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

    console.log('\n🎉 Core digital agency data seeding completed successfully!');
    console.log('\n📋 What was seeded:');
    console.log('   ✅ 8 Services (AI development, automation, e-commerce, etc.)');
    console.log('   ✅ 8 Case Studies (real-world success stories)');
    console.log('   ✅ 8 Blog Posts (published content)');
    console.log('   ✅ 8 Content Pages (website content)');
    
    console.log('\n🚀 Your AI agency database now has realistic, comprehensive data!');
    
  } catch (error) {
    console.error('\n❌ Data seeding failed:', error.message);
    process.exit(1);
  }
}

seedCoreData();
