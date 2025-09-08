-- ============================================
-- SAMPLE DATA PART 1: ORGANIZATIONS & USERS
-- ============================================

-- Insert Organizations (Multi-tenant setup)
INSERT INTO organizations (id, name, slug, logo_url, website, description, settings) VALUES
(
  '550e8400-e29b-41d4-a716-446655440001',
  'AMO AI Digital Agency',
  'amo-ai-agency',
  'https://cdn.amoai.agency/logo.png',
  'https://amoai.agency',
  'Leading AI development agency specializing in rapid deployment using Claude, GPT-4, CrewAI, and modern tech stacks',
  '{"theme": "dark", "timezone": "America/New_York", "billing_currency": "USD"}'::jsonb
),
(
  '550e8400-e29b-41d4-a716-446655440002',
  'TechCorp Enterprises',
  'techcorp-enterprises',
  'https://techcorp.com/logo.png',
  'https://techcorp.com',
  'Large enterprise technology consulting firm',
  '{"theme": "light", "timezone": "UTC", "billing_currency": "EUR"}'::jsonb
);

-- Insert Users (Agency team and client users)
INSERT INTO users (id, organization_id, email, full_name, avatar_url, role, phone, timezone, preferences, is_active) VALUES
-- AMO AI Agency Team
(
  '11111111-1111-1111-1111-111111111111',
  '550e8400-e29b-41d4-a716-446655440001',
  'alex@amoai.agency',
  'Alex Rodriguez',
  'https://cdn.amoai.agency/avatars/alex.jpg',
  'super_admin',
  '+1-555-0101',
  'America/New_York',
  '{"notifications": true, "dark_mode": true, "language": "en"}'::jsonb,
  true
),
(
  '22222222-2222-2222-2222-222222222222',
  '550e8400-e29b-41d4-a716-446655440001',
  'sarah.chen@amoai.agency',
  'Sarah Chen',
  'https://cdn.amoai.agency/avatars/sarah.jpg',
  'project_manager',
  '+1-555-0102',
  'America/Los_Angeles',
  '{"notifications": true, "dark_mode": false, "language": "en"}'::jsonb,
  true
),
(
  '33333333-3333-3333-3333-333333333333',
  '550e8400-e29b-41d4-a716-446655440001',
  'marcus.dev@amoai.agency',
  'Marcus Johnson',
  'https://cdn.amoai.agency/avatars/marcus.jpg',
  'developer',
  '+1-555-0103',
  'America/Chicago',
  '{"notifications": false, "dark_mode": true, "language": "en"}'::jsonb,
  true
),
(
  '44444444-4444-4444-4444-444444444444',
  '550e8400-e29b-41d4-a716-446655440001',
  'elena.design@amoai.agency',
  'Elena Vasquez',
  'https://cdn.amoai.agency/avatars/elena.jpg',
  'designer',
  '+1-555-0104',
  'America/Denver',
  '{"notifications": true, "dark_mode": false, "language": "es"}'::jsonb,
  true
),
(
  '55555555-5555-5555-5555-555555555555',
  '550e8400-e29b-41d4-a716-446655440001',
  'james.sales@amoai.agency',
  'James Wright',
  'https://cdn.amoai.agency/avatars/james.jpg',
  'sales',
  '+1-555-0105',
  'America/New_York',
  '{"notifications": true, "dark_mode": false, "language": "en"}'::jsonb,
  true
),
-- Client Users
(
  '66666666-6666-6666-6666-666666666666',
  '550e8400-e29b-41d4-a716-446655440002',
  'david.kim@fashionweek.com',
  'David Kim',
  'https://fashionweek.com/avatars/david.jpg',
  'client',
  '+1-555-0201',
  'America/New_York',
  '{"notifications": true, "dark_mode": false, "language": "en"}'::jsonb,
  true
),
(
  '77777777-7777-7777-7777-777777777777',
  '550e8400-e29b-41d4-a716-446655440002',
  'maria.gonzalez@ilovemedellin.co',
  'Maria Gonzalez',
  'https://ilovemedellin.co/avatars/maria.jpg',
  'client',
  '+57-300-123-4567',
  'America/Bogota',
  '{"notifications": true, "dark_mode": false, "language": "es"}'::jsonb,
  true
),
(
  '88888888-8888-8888-8888-888888888888',
  '550e8400-e29b-41d4-a716-446655440002',
  'robert.wilson@automax.com',
  'Robert Wilson',
  'https://automax.com/avatars/robert.jpg',
  'client',
  '+1-555-0203',
  'America/Detroit',
  '{"notifications": false, "dark_mode": true, "language": "en"}'::jsonb,
  true
);
