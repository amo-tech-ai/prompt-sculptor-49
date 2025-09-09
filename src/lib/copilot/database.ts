import { supabase } from '@/lib/supabase';
import { BriefState } from './types';

/**
 * Save the current brief state to Supabase
 */
export const saveBriefState = async (
  sessionId: string,
  stage: string,
  data: Partial<BriefState>
) => {
  try {
    // Save to copilot_states table
    const { error: stateError } = await supabase
      .from('copilot_states')
      .upsert({
        session_id: sessionId,
        stage,
        state_data: data,
        updated_at: new Date().toISOString()
      });
      
    if (stateError) {
      console.error('Failed to save state:', stateError);
      throw stateError;
    }

    // Also save a record in copilot_interactions for tracking
    const { error: interactionError } = await supabase
      .from('copilot_interactions')
      .insert({
        session_id: sessionId,
        interaction_type: 'state_change',
        interaction_data: {
          stage,
          timestamp: new Date().toISOString()
        }
      });

    if (interactionError) {
      console.error('Failed to log interaction:', interactionError);
    }

    console.log(`✅ State saved for session ${sessionId}, stage: ${stage}`);
  } catch (error) {
    console.error('Database save error:', error);
    throw error;
  }
};

/**
 * Load the brief state from Supabase
 */
export const loadBriefState = async (sessionId: string): Promise<Partial<BriefState> | null> => {
  try {
    const { data, error } = await supabase
      .from('copilot_states')
      .select('*')
      .eq('session_id', sessionId)
      .order('updated_at', { ascending: false })
      .limit(1)
      .single();
      
    if (error) {
      if (error.code === 'PGRST116') {
        // No data found, return null
        console.log('No existing state found for session:', sessionId);
        return null;
      }
      console.error('Failed to load state:', error);
      return null;
    }
    
    console.log(`✅ State loaded for session ${sessionId}`);
    return data?.state_data as Partial<BriefState>;
  } catch (error) {
    console.error('Database load error:', error);
    return null;
  }
};

/**
 * Save form data to copilot_forms table
 */
export const saveFormData = async (
  sessionId: string,
  formType: string,
  formData: any
) => {
  try {
    const { error } = await supabase
      .from('copilot_forms')
      .insert({
        session_id: sessionId,
        form_type: formType,
        form_data: formData,
        status: 'in_progress',
        created_at: new Date().toISOString()
      });
      
    if (error) {
      console.error('Failed to save form data:', error);
      throw error;
    }

    console.log(`✅ Form data saved for ${formType}`);
  } catch (error) {
    console.error('Form save error:', error);
    throw error;
  }
};

/**
 * Update form status
 */
export const updateFormStatus = async (
  sessionId: string,
  formType: string,
  status: 'draft' | 'in_progress' | 'submitted' | 'approved' | 'rejected'
) => {
  try {
    const { error } = await supabase
      .from('copilot_forms')
      .update({ 
        status,
        updated_at: new Date().toISOString()
      })
      .eq('session_id', sessionId)
      .eq('form_type', formType);
      
    if (error) {
      console.error('Failed to update form status:', error);
      throw error;
    }

    console.log(`✅ Form status updated to ${status}`);
  } catch (error) {
    console.error('Form status update error:', error);
    throw error;
  }
};

/**
 * Generate final proposal and save to database
 */
export const generateProposal = async (
  sessionId: string,
  briefState: BriefState
) => {
  try {
    // Create a comprehensive proposal object
    const proposal = {
      session_id: sessionId,
      business_info: briefState.businessInfo,
      requirements: briefState.requirementsInfo,
      technical_specs: briefState.technicalInfo,
      business_intelligence: briefState.businessIntelligence,
      decision_factors: briefState.decisionInfo,
      analysis: briefState.analysis,
      generated_at: new Date().toISOString(),
      status: 'draft'
    };

    // Save to a proposals table (if exists) or copilot_forms
    const { error } = await supabase
      .from('copilot_forms')
      .insert({
        session_id: sessionId,
        form_type: 'proposal',
        form_data: proposal,
        status: 'submitted',
        created_at: new Date().toISOString()
      });
      
    if (error) {
      console.error('Failed to save proposal:', error);
      throw error;
    }

    console.log(`✅ Proposal generated for session ${sessionId}`);
    return proposal;
  } catch (error) {
    console.error('Proposal generation error:', error);
    throw error;
  }
};
