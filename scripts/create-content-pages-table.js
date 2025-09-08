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

async function createContentPagesTable() {
  console.log('🚀 Creating Content Pages Table...\n');
  
  try {
    // Step 1: Create content_pages table
    console.log('📄 Step 1: Creating content_pages table...');
    await executeSql(`
      CREATE TABLE IF NOT EXISTS public.content_pages (
        id uuid NOT NULL DEFAULT extensions.uuid_generate_v4(),
        slug character varying(255) NOT NULL,
        title character varying(255) NOT NULL,
        content text NULL,
        content_json jsonb NULL,
        meta_title character varying(255) NULL,
        meta_description text NULL,
        meta_keywords text[] NULL,
        og_image character varying(500) NULL,
        author_id uuid NULL,
        status character varying(50) NULL DEFAULT 'draft'::character varying,
        published_at timestamp with time zone NULL,
        views_count integer NULL DEFAULT 0,
        created_at timestamp with time zone NULL DEFAULT now(),
        updated_at timestamp with time zone NULL DEFAULT now(),
        CONSTRAINT content_pages_pkey PRIMARY KEY (id),
        CONSTRAINT content_pages_slug_key UNIQUE (slug),
        CONSTRAINT content_pages_author_id_fkey FOREIGN KEY (author_id) REFERENCES users (id)
      ) TABLESPACE pg_default;
    `);
    console.log('✅ content_pages table created');

    // Step 2: Create index
    console.log('📇 Step 2: Creating index for content_pages...');
    await executeSql(`
      CREATE INDEX IF NOT EXISTS idx_content_pages_slug ON public.content_pages USING btree (slug) TABLESPACE pg_default;
    `);
    console.log('✅ index created');

    console.log('\n🎉 Content pages table created successfully!');
    console.log('\n📋 Table created:');
    console.log('   ✅ content_pages (Content management system)');
    
  } catch (error) {
    console.error('\n❌ Table creation failed:', error.message);
    process.exit(1);
  }
}

createContentPagesTable();
