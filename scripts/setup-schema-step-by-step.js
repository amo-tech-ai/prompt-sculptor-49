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

async function setupSchemaStepByStep() {
  console.log('🚀 Setting up AI Agency Schema Step by Step...\n');
  
  try {
    // Step 1: Enable extensions
    console.log('📦 Step 1: Enabling extensions...');
    await executeSql(`
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
      CREATE EXTENSION IF NOT EXISTS "pg_trgm";
    `);
    console.log('✅ Extensions enabled\n');
    
    // Step 2: Create enums
    console.log('🏷️  Step 2: Creating enums...');
    await executeSql(`
      DO $$ BEGIN
        CREATE TYPE user_role AS ENUM (
          'super_admin',
          'admin',
          'project_manager',
          'developer',
          'designer',
          'sales',
          'client',
          'guest'
        );
      EXCEPTION WHEN duplicate_object THEN NULL; END $$;
      
      DO $$ BEGIN
        CREATE TYPE project_status AS ENUM (
          'lead',
          'proposal',
          'negotiation',
          'active',
          'paused',
          'completed',
          'cancelled',
          'maintenance'
        );
      EXCEPTION WHEN duplicate_object THEN NULL; END $$;
      
      DO $$ BEGIN
        CREATE TYPE service_type AS ENUM (
          'ai_marketplace',
          'conversational_ai',
          'multi_agent_system',
          'event_management',
          'tourism_platform',
          'ecommerce_solution',
          'rag_knowledge_system',
          'workflow_automation',
          'computer_vision',
          'real_time_features',
          'custom_development'
        );
      EXCEPTION WHEN duplicate_object THEN NULL; END $$;
    `);
    console.log('✅ Enums created\n');
    
    // Step 3: Create organizations table
    console.log('🏢 Step 3: Creating organizations table...');
    await executeSql(`
      CREATE TABLE IF NOT EXISTS organizations (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        name VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        logo_url TEXT,
        website VARCHAR(255),
        description TEXT,
        settings JSONB DEFAULT '{}',
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);
    console.log('✅ Organizations table created\n');
    
    // Step 4: Create users table
    console.log('👥 Step 4: Creating users table...');
    await executeSql(`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
        email VARCHAR(255) UNIQUE NOT NULL,
        full_name VARCHAR(255) NOT NULL,
        avatar_url TEXT,
        role user_role DEFAULT 'guest',
        phone VARCHAR(50),
        timezone VARCHAR(50) DEFAULT 'UTC',
        preferences JSONB DEFAULT '{}',
        is_active BOOLEAN DEFAULT true,
        last_login_at TIMESTAMPTZ,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);
    console.log('✅ Users table created\n');
    
    // Step 5: Create clients table
    console.log('🤝 Step 5: Creating clients table...');
    await executeSql(`
      CREATE TABLE IF NOT EXISTS clients (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
        company_name VARCHAR(255) NOT NULL,
        contact_person VARCHAR(255),
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        address TEXT,
        country VARCHAR(100),
        website VARCHAR(255),
        industry VARCHAR(100),
        company_size VARCHAR(50),
        annual_revenue VARCHAR(50),
        notes TEXT,
        tags TEXT[],
        lead_source VARCHAR(100),
        assigned_to UUID REFERENCES users(id),
        metadata JSONB DEFAULT '{}',
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);
    console.log('✅ Clients table created\n');
    
    // Step 6: Create services table
    console.log('🛠️  Step 6: Creating services table...');
    await executeSql(`
      CREATE TABLE IF NOT EXISTS services (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        name VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        service_type service_type NOT NULL,
        description TEXT,
        features TEXT[],
        technologies TEXT[],
        base_price DECIMAL(10, 2),
        price_range_min DECIMAL(10, 2),
        price_range_max DECIMAL(10, 2),
        timeline_weeks_min INTEGER,
        timeline_weeks_max INTEGER,
        roi_percentage DECIMAL(5, 2),
        is_active BOOLEAN DEFAULT true,
        metadata JSONB DEFAULT '{}',
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);
    console.log('✅ Services table created\n');
    
    // Step 7: Create projects table
    console.log('📋 Step 7: Creating projects table...');
    await executeSql(`
      CREATE TABLE IF NOT EXISTS projects (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
        client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
        name VARCHAR(255) NOT NULL,
        code VARCHAR(50) UNIQUE NOT NULL,
        description TEXT,
        status project_status DEFAULT 'lead',
        service_ids UUID[],
        budget DECIMAL(10, 2),
        currency VARCHAR(3) DEFAULT 'USD',
        start_date DATE,
        end_date DATE,
        actual_end_date DATE,
        project_manager_id UUID REFERENCES users(id),
        team_member_ids UUID[],
        technologies TEXT[],
        repository_url VARCHAR(255),
        staging_url VARCHAR(255),
        production_url VARCHAR(255),
        documents JSONB DEFAULT '[]',
        metrics JSONB DEFAULT '{}',
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);
    console.log('✅ Projects table created\n');
    
    // Step 8: Create case studies table
    console.log('📊 Step 8: Creating case studies table...');
    await executeSql(`
      CREATE TABLE IF NOT EXISTS case_studies (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        project_id UUID REFERENCES projects(id),
        slug VARCHAR(255) UNIQUE NOT NULL,
        title VARCHAR(255) NOT NULL,
        client_name VARCHAR(255),
        industry VARCHAR(100),
        challenge TEXT,
        solution TEXT,
        results TEXT,
        metrics JSONB DEFAULT '{}',
        technologies_used TEXT[],
        testimonial TEXT,
        testimonial_author VARCHAR(255),
        testimonial_role VARCHAR(255),
        images JSONB DEFAULT '[]',
        is_featured BOOLEAN DEFAULT false,
        is_published BOOLEAN DEFAULT false,
        published_at TIMESTAMPTZ,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);
    console.log('✅ Case studies table created\n');
    
    // Step 9: Insert seed data
    console.log('🌱 Step 9: Inserting seed data...');
    await executeSql(`
      INSERT INTO services (name, slug, service_type, description, base_price, timeline_weeks_min, timeline_weeks_max, roi_percentage) VALUES
      ('AI Marketplace Platform', 'ai-marketplace', 'ai_marketplace', 'Complete marketplace with AI-powered search and recommendations', 75000, 8, 16, 293),
      ('Conversational AI System', 'conversational-ai', 'conversational_ai', 'GPT-4/Claude powered chatbots with CRM integration', 15000, 2, 6, 185),
      ('Multi-Agent Automation', 'multi-agent', 'multi_agent_system', 'CrewAI teams for complex workflow automation', 30000, 4, 10, 220),
      ('E-Commerce Solution', 'ecommerce', 'ecommerce_solution', 'Multi-vendor platform with AI features', 40000, 4, 8, 275),
      ('Workflow Automation', 'automation', 'workflow_automation', 'n8n workflows with WhatsApp and email integration', 10000, 1, 4, 350)
      ON CONFLICT (slug) DO NOTHING;
    `);
    console.log('✅ Seed data inserted\n');
    
    // Step 10: Verify setup
    console.log('🔍 Step 10: Verifying setup...');
    const tablesResult = await executeSql(`
      SELECT tablename FROM pg_tables 
      WHERE schemaname = 'public' 
      ORDER BY tablename;
    `);
    
    if (tablesResult.data && tablesResult.data.length > 0) {
      console.log(`✅ Created ${tablesResult.data.length} tables:`);
      tablesResult.data.forEach(table => {
        console.log(`   - ${table.tablename}`);
      });
    }
    
    const servicesResult = await executeSql(`
      SELECT COUNT(*) as count FROM services;
    `);
    
    if (servicesResult.data && servicesResult.data.length > 0) {
      console.log(`✅ Services: ${servicesResult.data[0].count} records`);
    }
    
    console.log('\n🎉 Schema setup completed successfully!');
    
  } catch (error) {
    console.error('\n❌ Schema setup failed:', error.message);
    process.exit(1);
  }
}

setupSchemaStepByStep();
