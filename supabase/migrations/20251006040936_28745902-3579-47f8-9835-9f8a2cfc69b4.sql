-- Create briefs table to store project brief submissions
CREATE TABLE public.briefs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Project Vision
  project_name TEXT NOT NULL,
  project_description TEXT NOT NULL,
  problem_statement TEXT NOT NULL,
  project_goals TEXT[] NOT NULL DEFAULT '{}',
  
  -- Target Audience
  primary_audience TEXT NOT NULL,
  audience_age TEXT,
  audience_location TEXT,
  pain_points TEXT[] NOT NULL DEFAULT '{}',
  desired_outcomes TEXT[] NOT NULL DEFAULT '{}',
  
  -- Features
  must_have_features TEXT[] NOT NULL DEFAULT '{}',
  nice_to_have_features TEXT[] DEFAULT '{}',
  integrations TEXT[] DEFAULT '{}',
  special_requirements TEXT,
  
  -- Design Preferences
  style TEXT NOT NULL,
  color_preferences TEXT,
  inspiration_urls TEXT[] DEFAULT '{}',
  brand_guidelines TEXT,
  
  -- Timeline & Budget
  desired_launch_date DATE,
  budget TEXT NOT NULL,
  priority TEXT NOT NULL,
  
  -- Metadata
  user_email TEXT,
  submission_status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.briefs ENABLE ROW LEVEL SECURITY;

-- Create policy for public insert (no authentication required for submissions)
CREATE POLICY "Anyone can submit a brief"
ON public.briefs
FOR INSERT
WITH CHECK (true);

-- Create policy for viewing own submissions (optional for future)
CREATE POLICY "Users can view their own briefs"
ON public.briefs
FOR SELECT
USING (user_email = current_setting('request.jwt.claims', true)::json->>'email');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_briefs_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_briefs_updated_at
BEFORE UPDATE ON public.briefs
FOR EACH ROW
EXECUTE FUNCTION public.update_briefs_updated_at();

-- Create index for faster queries
CREATE INDEX idx_briefs_created_at ON public.briefs(created_at DESC);
CREATE INDEX idx_briefs_user_email ON public.briefs(user_email);