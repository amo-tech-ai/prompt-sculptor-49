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

async function seedCaseStudies() {
  console.log('🌱 Seeding case studies...\n');
  
  try {
    // Insert case studies
    const caseStudies = [
      {
        slug: 'fashionos-event-management',
        title: 'FashionOS',
        client_name: 'Fashion Events Inc.',
        industry: 'Event Management Platform',
        challenge: 'Manual event setup taking 3 days with high error rates and poor attendee experience.',
        solution: 'Built AI-powered event management platform with automated workflows, real-time analytics, and integrated payment processing.',
        results: 'Reduced 3-day setup to 3 minutes. 90% of tasks automated. 95% attendee satisfaction rate.',
        metrics: {
          time_saved: '99%',
          automation_rate: '90%',
          satisfaction_rate: '95%',
          revenue_increase: '150%'
        },
        technologies_used: ['React', 'Supabase', 'Stripe', 'n8n', 'Claude AI'],
        testimonial: 'AMO AI transformed our event management process. What used to take days now takes minutes.',
        testimonial_author: 'Sarah Johnson',
        testimonial_role: 'CEO, Fashion Events Inc.',
        is_featured: true,
        is_published: true
      },
      {
        slug: 'ilovemedellin-tourism',
        title: 'I Love Medellín',
        client_name: 'Medellín Tourism Board',
        industry: 'Tourism Marketplace',
        challenge: 'Fragmented tourism services with no centralized booking platform and limited AI assistance.',
        solution: 'Created comprehensive tourism marketplace with AI concierge, multi-vendor booking system, and real-time recommendations.',
        results: 'Complete booking platform with AI concierge. Targeting $75K monthly revenue. 40% increase in bookings.',
        metrics: {
          monthly_revenue_target: '$75,000',
          booking_increase: '40%',
          ai_interactions: '1000+ daily',
          vendor_satisfaction: '92%'
        },
        technologies_used: ['Next.js', 'Supabase', 'GPT-4', 'WhatsApp API', 'Stripe Connect'],
        testimonial: 'The AI concierge has revolutionized how tourists discover and book experiences in Medellín.',
        testimonial_author: 'Carlos Mendoza',
        testimonial_role: 'Director, Medellín Tourism Board',
        is_featured: true,
        is_published: true
      },
      {
        slug: 'automotive-marketplace',
        title: 'Automotive Marketplace',
        client_name: 'AutoConnect Solutions',
        industry: 'Multi-Dealer Platform',
        challenge: 'Disconnected dealer networks with manual inventory management and poor customer experience.',
        solution: 'Built unified automotive marketplace connecting 500+ dealers with AI-powered inventory management and customer matching.',
        results: 'Processing $4.3M in monthly transactions. 500+ dealers connected. 60% faster sales cycle.',
        metrics: {
          monthly_transactions: '$4,300,000',
          connected_dealers: '500+',
          sales_cycle_improvement: '60%',
          customer_satisfaction: '88%'
        },
        technologies_used: ['React', 'PostgreSQL', 'CrewAI', 'Pinecone', 'Stripe'],
        testimonial: 'The platform has transformed how we connect buyers with the perfect vehicle across our entire network.',
        testimonial_author: 'Michael Rodriguez',
        testimonial_role: 'CTO, AutoConnect Solutions',
        is_featured: true,
        is_published: true
      },
      {
        slug: 'healthcare-ai-diagnosis',
        title: 'MedAI Diagnosis',
        client_name: 'Regional Medical Center',
        industry: 'Healthcare AI',
        challenge: 'Long diagnosis times and limited specialist availability affecting patient outcomes.',
        solution: 'Developed AI-powered diagnostic system with computer vision and natural language processing for faster, more accurate diagnoses.',
        results: '50% faster diagnosis times. 95% accuracy rate. 30% reduction in specialist consultation wait times.',
        metrics: {
          diagnosis_speed: '50% faster',
          accuracy_rate: '95%',
          wait_time_reduction: '30%',
          patient_satisfaction: '94%'
        },
        technologies_used: ['Python', 'TensorFlow', 'OpenCV', 'Claude AI', 'PostgreSQL'],
        testimonial: 'The AI system has significantly improved our diagnostic capabilities and patient care quality.',
        testimonial_author: 'Dr. Emily Chen',
        testimonial_role: 'Chief Medical Officer',
        is_featured: false,
        is_published: true
      }
    ];

    for (const caseStudy of caseStudies) {
      console.log(`📊 Inserting: ${caseStudy.title}`);
      
      const result = await executeSql(`
        INSERT INTO case_studies (
          slug, title, client_name, industry, challenge, solution, results,
          metrics, technologies_used, testimonial, testimonial_author, 
          testimonial_role, is_featured, is_published, published_at
        ) VALUES (
          '${caseStudy.slug}',
          '${caseStudy.title}',
          '${caseStudy.client_name}',
          '${caseStudy.industry}',
          '${caseStudy.challenge}',
          '${caseStudy.solution}',
          '${caseStudy.results}',
          '${JSON.stringify(caseStudy.metrics)}',
          ARRAY[${caseStudy.technologies_used.map(tech => `'${tech}'`).join(',')}],
          '${caseStudy.testimonial}',
          '${caseStudy.testimonial_author}',
          '${caseStudy.testimonial_role}',
          ${caseStudy.is_featured},
          ${caseStudy.is_published},
          NOW()
        ) ON CONFLICT (slug) DO UPDATE SET
          title = EXCLUDED.title,
          client_name = EXCLUDED.client_name,
          industry = EXCLUDED.industry,
          challenge = EXCLUDED.challenge,
          solution = EXCLUDED.solution,
          results = EXCLUDED.results,
          metrics = EXCLUDED.metrics,
          technologies_used = EXCLUDED.technologies_used,
          testimonial = EXCLUDED.testimonial,
          testimonial_author = EXCLUDED.testimonial_author,
          testimonial_role = EXCLUDED.testimonial_role,
          is_featured = EXCLUDED.is_featured,
          is_published = EXCLUDED.is_published,
          updated_at = NOW()
        RETURNING id, title;
      `);
      
      if (result.data && result.data.length > 0) {
        console.log(`✅ Created: ${result.data[0].title}`);
      }
    }

    // Verify insertion
    console.log('\n🔍 Verifying case studies...');
    const verifyResult = await executeSql(`
      SELECT COUNT(*) as count FROM case_studies WHERE is_published = true;
    `);
    
    if (verifyResult.data && verifyResult.data.length > 0) {
      console.log(`✅ Total published case studies: ${verifyResult.data[0].count}`);
    }

    const featuredResult = await executeSql(`
      SELECT COUNT(*) as count FROM case_studies WHERE is_featured = true AND is_published = true;
    `);
    
    if (featuredResult.data && featuredResult.data.length > 0) {
      console.log(`✅ Featured case studies: ${featuredResult.data[0].count}`);
    }

    console.log('\n🎉 Case studies seeding completed successfully!');
    
  } catch (error) {
    console.error('\n❌ Case studies seeding failed:', error.message);
    process.exit(1);
  }
}

seedCaseStudies();
