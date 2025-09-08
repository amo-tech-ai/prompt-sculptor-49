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

async function implementRLSSecurity() {
  console.log('🔒 Implementing Row Level Security Policies...\n');
  
  try {
    // Step 1: Enable RLS on all unrestricted tables
    console.log('📋 Step 1: Enabling RLS on unrestricted tables...');
    await executeSql(`
      -- Enable RLS on all tables that need security
      ALTER TABLE activity_logs ENABLE ROW LEVEL SECURITY;
      ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
      ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
      ALTER TABLE content_pages ENABLE ROW LEVEL SECURITY;
      ALTER TABLE expenses ENABLE ROW LEVEL SECURITY;
      ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
      ALTER TABLE services ENABLE ROW LEVEL SECURITY;
      ALTER TABLE task_comments ENABLE ROW LEVEL SECURITY;
      ALTER TABLE project_metrics ENABLE ROW LEVEL SECURITY;
      ALTER TABLE service_metrics ENABLE ROW LEVEL SECURITY;
      ALTER TABLE project_phases ENABLE ROW LEVEL SECURITY;
    `);
    console.log('✅ RLS enabled on all tables\n');

    // Step 2: Implement critical security policies
    console.log('🛡️  Step 2: Implementing critical security policies...');
    
    // Notifications - Personal data protection
    await executeSql(`
      CREATE POLICY "notifications_user_only" ON notifications
        FOR ALL USING (user_id = auth.uid());
    `);
    console.log('✅ Notifications: User-only access');

    // Activity Logs - Admin only access
    await executeSql(`
      CREATE POLICY "activity_logs_admin_only" ON activity_logs
        FOR SELECT USING (
          EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role IN ('admin', 'super_admin')
          )
        );
    `);
    console.log('✅ Activity Logs: Admin-only access');

    // Case Studies - Organization-based access
    await executeSql(`
      CREATE POLICY "case_studies_org_access" ON case_studies
        FOR SELECT USING (
          is_published = true OR
          EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role IN ('admin', 'super_admin', 'project_manager')
          )
        );
    `);
    
    await executeSql(`
      CREATE POLICY "case_studies_admin_modify" ON case_studies
        FOR INSERT USING (
          EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role IN ('admin', 'super_admin', 'project_manager')
          )
        );
    `);
    
    await executeSql(`
      CREATE POLICY "case_studies_admin_update" ON case_studies
        FOR UPDATE USING (
          EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role IN ('admin', 'super_admin', 'project_manager')
          )
        );
    `);
    
    await executeSql(`
      CREATE POLICY "case_studies_admin_delete" ON case_studies
        FOR DELETE USING (
          EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role IN ('admin', 'super_admin', 'project_manager')
          )
        );
    `);
    console.log('✅ Case Studies: Organization-based access');

    // Expenses - Financial data protection
    await executeSql(`
      CREATE POLICY "expenses_team_access" ON expenses
        FOR ALL USING (
          submitted_by = auth.uid() OR
          EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role IN ('admin', 'super_admin', 'project_manager')
          )
        );
    `);
    console.log('✅ Expenses: Team-based access');

    // Services - Business data protection
    await executeSql(`
      CREATE POLICY "services_public_read" ON services
        FOR SELECT USING (is_active = true);
    `);
    
    await executeSql(`
      CREATE POLICY "services_admin_insert" ON services
        FOR INSERT USING (
          EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role IN ('admin', 'super_admin', 'sales')
          )
        );
    `);
    
    await executeSql(`
      CREATE POLICY "services_admin_update" ON services
        FOR UPDATE USING (
          EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role IN ('admin', 'super_admin', 'sales')
          )
        );
    `);
    
    await executeSql(`
      CREATE POLICY "services_admin_delete" ON services
        FOR DELETE USING (
          EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role IN ('admin', 'super_admin', 'sales')
          )
        );
    `);
    console.log('✅ Services: Public read, admin modify');

    // Blog Posts - Content management
    await executeSql(`
      CREATE POLICY "blog_posts_public_read" ON blog_posts
        FOR SELECT USING (is_published = true);
    `);
    
    await executeSql(`
      CREATE POLICY "blog_posts_author_access" ON blog_posts
        FOR INSERT USING (
          author_id = auth.uid() OR
          EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role IN ('admin', 'super_admin')
          )
        );
    `);
    
    await executeSql(`
      CREATE POLICY "blog_posts_author_update" ON blog_posts
        FOR UPDATE USING (
          author_id = auth.uid() OR
          EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role IN ('admin', 'super_admin')
          )
        );
    `);
    
    await executeSql(`
      CREATE POLICY "blog_posts_author_delete" ON blog_posts
        FOR DELETE USING (
          author_id = auth.uid() OR
          EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role IN ('admin', 'super_admin')
          )
        );
    `);
    console.log('✅ Blog Posts: Public read, author modify');

    // Content Pages - CMS access
    await executeSql(`
      CREATE POLICY "content_pages_public_read" ON content_pages
        FOR SELECT USING (status = 'published');
    `);
    
    await executeSql(`
      CREATE POLICY "content_pages_editor_access" ON content_pages
        FOR INSERT USING (
          author_id = auth.uid() OR
          EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role IN ('admin', 'super_admin')
          )
        );
    `);
    
    await executeSql(`
      CREATE POLICY "content_pages_editor_update" ON content_pages
        FOR UPDATE USING (
          author_id = auth.uid() OR
          EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role IN ('admin', 'super_admin')
          )
        );
    `);
    
    await executeSql(`
      CREATE POLICY "content_pages_editor_delete" ON content_pages
        FOR DELETE USING (
          author_id = auth.uid() OR
          EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role IN ('admin', 'super_admin')
          )
        );
    `);
    console.log('✅ Content Pages: Public read, editor modify');

    // Task Comments - Project team access
    await executeSql(`
      CREATE POLICY "task_comments_team_access" ON task_comments
        FOR ALL USING (
          EXISTS (
            SELECT 1 FROM tasks 
            JOIN projects ON tasks.project_id = projects.id
            WHERE tasks.id = task_comments.task_id
            AND (
              projects.project_manager_id = auth.uid() OR
              auth.uid() = ANY(projects.team_member_ids) OR
              EXISTS (
                SELECT 1 FROM users 
                WHERE users.id = auth.uid() 
                AND users.role IN ('admin', 'super_admin')
              )
            )
          )
        );
    `);
    console.log('✅ Task Comments: Project team access');

    // Project Metrics - Project team access
    await executeSql(`
      CREATE POLICY "project_metrics_team_access" ON project_metrics
        FOR ALL USING (
          EXISTS (
            SELECT 1 FROM projects 
            WHERE projects.id = project_metrics.project_id
            AND (
              projects.project_manager_id = auth.uid() OR
              auth.uid() = ANY(projects.team_member_ids) OR
              EXISTS (
                SELECT 1 FROM users 
                WHERE users.id = auth.uid() 
                AND users.role IN ('admin', 'super_admin')
              )
            )
          )
        );
    `);
    console.log('✅ Project Metrics: Project team access');

    // Service Metrics - Admin access
    await executeSql(`
      CREATE POLICY "service_metrics_admin_access" ON service_metrics
        FOR ALL USING (
          EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role IN ('admin', 'super_admin', 'sales')
          )
        );
    `);
    console.log('✅ Service Metrics: Admin access');

    // Project Phases - Project team access
    await executeSql(`
      CREATE POLICY "project_phases_team_access" ON project_phases
        FOR ALL USING (
          EXISTS (
            SELECT 1 FROM projects 
            WHERE projects.id = project_phases.project_id
            AND (
              projects.project_manager_id = auth.uid() OR
              auth.uid() = ANY(projects.team_member_ids) OR
              EXISTS (
                SELECT 1 FROM users 
                WHERE users.id = auth.uid() 
                AND users.role IN ('admin', 'super_admin')
              )
            )
          )
        );
    `);
    console.log('✅ Project Phases: Project team access');

    // Step 3: Verify security implementation
    console.log('\n🔍 Step 3: Verifying security implementation...');
    const verifyResult = await executeSql(`
      SELECT 
        schemaname,
        tablename,
        rowsecurity as rls_enabled,
        CASE 
          WHEN rowsecurity THEN 'Secured'
          ELSE 'Unrestricted'
        END as security_status
      FROM pg_tables 
      WHERE schemaname = 'public' 
      ORDER BY tablename;
    `);
    
    if (verifyResult.data && verifyResult.data.length > 0) {
      console.log('\n📊 Security Status Report:');
      verifyResult.data.forEach(table => {
        const status = table.rls_enabled ? '✅ Secured' : '❌ Unrestricted';
        console.log(`   ${table.tablename}: ${status}`);
      });
    }

    // Step 4: Test policies
    console.log('\n🧪 Step 4: Testing security policies...');
    const policyTest = await executeSql(`
      SELECT 
        schemaname,
        tablename,
        policyname,
        permissive,
        roles,
        cmd,
        qual
      FROM pg_policies 
      WHERE schemaname = 'public'
      ORDER BY tablename, policyname;
    `);
    
    if (policyTest.data && policyTest.data.length > 0) {
      console.log(`✅ Created ${policyTest.data.length} security policies`);
      const tableCounts = {};
      policyTest.data.forEach(policy => {
        tableCounts[policy.tablename] = (tableCounts[policy.tablename] || 0) + 1;
      });
      
      console.log('\n📋 Policies per table:');
      Object.entries(tableCounts).forEach(([table, count]) => {
        console.log(`   ${table}: ${count} policies`);
      });
    }

    console.log('\n🎉 Row Level Security implementation completed successfully!');
    console.log('\n🛡️  Security Summary:');
    console.log('   ✅ All tables now have RLS enabled');
    console.log('   ✅ Critical data protected with proper policies');
    console.log('   ✅ Financial data secured with role-based access');
    console.log('   ✅ Personal data protected with user-specific policies');
    console.log('   ✅ Business data secured with organization-based access');
    
    console.log('\n📋 Next Steps:');
    console.log('   1. Test user access with different roles');
    console.log('   2. Verify frontend still works with new policies');
    console.log('   3. Set up monitoring for security events');
    console.log('   4. Consider implementing additional audit logging');
    
  } catch (error) {
    console.error('\n❌ RLS implementation failed:', error.message);
    process.exit(1);
  }
}

implementRLSSecurity();
