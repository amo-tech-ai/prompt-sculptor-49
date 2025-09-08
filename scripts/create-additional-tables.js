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

async function createAdditionalTables() {
  console.log('🚀 Creating Additional Tables (service_metrics, notifications, invoices, expenses)...\n');
  
  try {
    // Step 1: Create service_metrics table
    console.log('📊 Step 1: Creating service_metrics table...');
    await executeSql(`
      CREATE TABLE IF NOT EXISTS public.service_metrics (
        id uuid NOT NULL DEFAULT extensions.uuid_generate_v4(),
        service_id uuid NULL,
        month date NOT NULL,
        projects_count integer NULL DEFAULT 0,
        total_revenue numeric(10, 2) NULL DEFAULT 0,
        average_timeline_weeks numeric(4, 2) NULL,
        average_roi numeric(5, 2) NULL,
        client_satisfaction numeric(3, 2) NULL,
        created_at timestamp with time zone NULL DEFAULT now(),
        CONSTRAINT service_metrics_pkey PRIMARY KEY (id),
        CONSTRAINT service_metrics_service_id_month_key UNIQUE (service_id, month),
        CONSTRAINT service_metrics_service_id_fkey FOREIGN KEY (service_id) REFERENCES services (id) ON DELETE CASCADE
      ) TABLESPACE pg_default;
    `);
    console.log('✅ service_metrics table created');

    // Step 2: Create notifications table
    console.log('🔔 Step 2: Creating notifications table...');
    await executeSql(`
      CREATE TABLE IF NOT EXISTS public.notifications (
        id uuid NOT NULL DEFAULT extensions.uuid_generate_v4(),
        user_id uuid NULL,
        type character varying(50) NOT NULL,
        title character varying(255) NOT NULL,
        message text NULL,
        data jsonb NULL DEFAULT '{}'::jsonb,
        is_read boolean NULL DEFAULT false,
        read_at timestamp with time zone NULL,
        created_at timestamp with time zone NULL DEFAULT now(),
        CONSTRAINT notifications_pkey PRIMARY KEY (id),
        CONSTRAINT notifications_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
      ) TABLESPACE pg_default;
    `);
    console.log('✅ notifications table created');

    // Step 3: Create invoices table
    console.log('💰 Step 3: Creating invoices table...');
    await executeSql(`
      CREATE TABLE IF NOT EXISTS public.invoices (
        id uuid NOT NULL DEFAULT extensions.uuid_generate_v4(),
        invoice_number character varying(50) NOT NULL,
        project_id uuid NULL,
        client_id uuid NOT NULL,
        phase_id uuid NULL,
        amount numeric(10, 2) NOT NULL,
        currency character varying(3) NULL DEFAULT 'USD'::character varying,
        tax_rate numeric(5, 2) NULL DEFAULT 0,
        tax_amount numeric(10, 2) NULL DEFAULT 0,
        total_amount numeric(10, 2) NOT NULL,
        status public.payment_status NULL DEFAULT 'pending'::payment_status,
        issue_date date NOT NULL,
        due_date date NOT NULL,
        paid_date date NULL,
        payment_method character varying(50) NULL,
        payment_reference character varying(255) NULL,
        notes text NULL,
        line_items jsonb NULL DEFAULT '[]'::jsonb,
        created_at timestamp with time zone NULL DEFAULT now(),
        updated_at timestamp with time zone NULL DEFAULT now(),
        CONSTRAINT invoices_pkey PRIMARY KEY (id),
        CONSTRAINT invoices_invoice_number_key UNIQUE (invoice_number),
        CONSTRAINT invoices_client_id_fkey FOREIGN KEY (client_id) REFERENCES clients (id),
        CONSTRAINT invoices_phase_id_fkey FOREIGN KEY (phase_id) REFERENCES project_phases (id),
        CONSTRAINT invoices_project_id_fkey FOREIGN KEY (project_id) REFERENCES projects (id)
      ) TABLESPACE pg_default;
    `);
    console.log('✅ invoices table created');

    // Step 4: Create expenses table
    console.log('💸 Step 4: Creating expenses table...');
    await executeSql(`
      CREATE TABLE IF NOT EXISTS public.expenses (
        id uuid NOT NULL DEFAULT extensions.uuid_generate_v4(),
        project_id uuid NULL,
        category character varying(100) NOT NULL,
        description text NULL,
        amount numeric(10, 2) NOT NULL,
        currency character varying(3) NULL DEFAULT 'USD'::character varying,
        vendor character varying(255) NULL,
        receipt_url character varying(500) NULL,
        expense_date date NOT NULL,
        submitted_by uuid NULL,
        approved_by uuid NULL,
        is_billable boolean NULL DEFAULT false,
        created_at timestamp with time zone NULL DEFAULT now(),
        updated_at timestamp with time zone NULL DEFAULT now(),
        CONSTRAINT expenses_pkey PRIMARY KEY (id),
        CONSTRAINT expenses_approved_by_fkey FOREIGN KEY (approved_by) REFERENCES users (id),
        CONSTRAINT expenses_project_id_fkey FOREIGN KEY (project_id) REFERENCES projects (id),
        CONSTRAINT expenses_submitted_by_fkey FOREIGN KEY (submitted_by) REFERENCES users (id)
      ) TABLESPACE pg_default;
    `);
    console.log('✅ expenses table created');

    // Step 5: Create indexes for invoices
    console.log('📇 Step 5: Creating indexes for invoices...');
    await executeSql(`
      CREATE INDEX IF NOT EXISTS idx_invoices_project ON public.invoices USING btree (project_id) TABLESPACE pg_default;
      CREATE INDEX IF NOT EXISTS idx_invoices_client ON public.invoices USING btree (client_id) TABLESPACE pg_default;
      CREATE INDEX IF NOT EXISTS idx_invoices_status ON public.invoices USING btree (status) TABLESPACE pg_default;
      CREATE INDEX IF NOT EXISTS idx_invoices_dates ON public.invoices USING btree (issue_date, due_date) TABLESPACE pg_default;
    `);
    console.log('✅ indexes created');

    console.log('\n🎉 All additional tables created successfully!');
    console.log('\n📋 Tables created:');
    console.log('   ✅ service_metrics (Service performance tracking)');
    console.log('   ✅ notifications (User notifications system)');
    console.log('   ✅ invoices (Billing and payment tracking)');
    console.log('   ✅ expenses (Project expense management)');
    
  } catch (error) {
    console.error('\n❌ Table creation failed:', error.message);
    process.exit(1);
  }
}

createAdditionalTables();
