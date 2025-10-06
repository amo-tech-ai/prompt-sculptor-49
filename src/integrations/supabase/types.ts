export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      activities: {
        Row: {
          activity_type: Database["public"]["Enums"]["activity_type"]
          assigned_to: string | null
          completed_at: string | null
          created_at: string
          created_by: string | null
          description: string | null
          entity_id: string
          entity_type: string
          id: string
          scheduled_at: string | null
          subject: string
          updated_at: string
        }
        Insert: {
          activity_type: Database["public"]["Enums"]["activity_type"]
          assigned_to?: string | null
          completed_at?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          entity_id: string
          entity_type: string
          id?: string
          scheduled_at?: string | null
          subject: string
          updated_at?: string
        }
        Update: {
          activity_type?: Database["public"]["Enums"]["activity_type"]
          assigned_to?: string | null
          completed_at?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          entity_id?: string
          entity_type?: string
          id?: string
          scheduled_at?: string | null
          subject?: string
          updated_at?: string
        }
        Relationships: []
      }
      audit_log: {
        Row: {
          action: string
          created_at: string
          id: string
          new_data: Json | null
          old_data: Json | null
          record_id: string
          table_name: string
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string
          id?: string
          new_data?: Json | null
          old_data?: Json | null
          record_id: string
          table_name: string
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string
          id?: string
          new_data?: Json | null
          old_data?: Json | null
          record_id?: string
          table_name?: string
          user_id?: string | null
        }
        Relationships: []
      }
      briefs: {
        Row: {
          audience_age: string | null
          audience_location: string | null
          brand_guidelines: string | null
          budget: string
          color_preferences: string | null
          created_at: string
          desired_launch_date: string | null
          desired_outcomes: string[]
          id: string
          inspiration_urls: string[] | null
          integrations: string[] | null
          must_have_features: string[]
          nice_to_have_features: string[] | null
          pain_points: string[]
          primary_audience: string
          priority: string
          problem_statement: string
          project_description: string
          project_goals: string[]
          project_name: string
          special_requirements: string | null
          style: string
          submission_status: string | null
          updated_at: string
          user_email: string | null
        }
        Insert: {
          audience_age?: string | null
          audience_location?: string | null
          brand_guidelines?: string | null
          budget: string
          color_preferences?: string | null
          created_at?: string
          desired_launch_date?: string | null
          desired_outcomes?: string[]
          id?: string
          inspiration_urls?: string[] | null
          integrations?: string[] | null
          must_have_features?: string[]
          nice_to_have_features?: string[] | null
          pain_points?: string[]
          primary_audience: string
          priority: string
          problem_statement: string
          project_description: string
          project_goals?: string[]
          project_name: string
          special_requirements?: string | null
          style: string
          submission_status?: string | null
          updated_at?: string
          user_email?: string | null
        }
        Update: {
          audience_age?: string | null
          audience_location?: string | null
          brand_guidelines?: string | null
          budget?: string
          color_preferences?: string | null
          created_at?: string
          desired_launch_date?: string | null
          desired_outcomes?: string[]
          id?: string
          inspiration_urls?: string[] | null
          integrations?: string[] | null
          must_have_features?: string[]
          nice_to_have_features?: string[] | null
          pain_points?: string[]
          primary_audience?: string
          priority?: string
          problem_statement?: string
          project_description?: string
          project_goals?: string[]
          project_name?: string
          special_requirements?: string | null
          style?: string
          submission_status?: string | null
          updated_at?: string
          user_email?: string | null
        }
        Relationships: []
      }
      clients: {
        Row: {
          assigned_to: string | null
          company_name: string
          created_at: string
          email: string | null
          id: string
          industry: string | null
          name: string
          notes: string | null
          phone: string | null
          status: Database["public"]["Enums"]["client_status"]
          updated_at: string
          website: string | null
        }
        Insert: {
          assigned_to?: string | null
          company_name: string
          created_at?: string
          email?: string | null
          id?: string
          industry?: string | null
          name: string
          notes?: string | null
          phone?: string | null
          status?: Database["public"]["Enums"]["client_status"]
          updated_at?: string
          website?: string | null
        }
        Update: {
          assigned_to?: string | null
          company_name?: string
          created_at?: string
          email?: string | null
          id?: string
          industry?: string | null
          name?: string
          notes?: string | null
          phone?: string | null
          status?: Database["public"]["Enums"]["client_status"]
          updated_at?: string
          website?: string | null
        }
        Relationships: []
      }
      contacts: {
        Row: {
          client_id: string
          created_at: string
          email: string | null
          first_name: string
          id: string
          is_primary: boolean | null
          last_name: string
          notes: string | null
          phone: string | null
          position: string | null
          updated_at: string
        }
        Insert: {
          client_id: string
          created_at?: string
          email?: string | null
          first_name: string
          id?: string
          is_primary?: boolean | null
          last_name: string
          notes?: string | null
          phone?: string | null
          position?: string | null
          updated_at?: string
        }
        Update: {
          client_id?: string
          created_at?: string
          email?: string | null
          first_name?: string
          id?: string
          is_primary?: boolean | null
          last_name?: string
          notes?: string | null
          phone?: string | null
          position?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "contacts_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      deals: {
        Row: {
          actual_close_date: string | null
          assigned_to: string | null
          client_id: string
          created_at: string
          currency: string | null
          deal_name: string
          deal_value: number
          description: string | null
          expected_close_date: string | null
          id: string
          notes: string | null
          probability: number | null
          stage: Database["public"]["Enums"]["deal_stage"]
          updated_at: string
        }
        Insert: {
          actual_close_date?: string | null
          assigned_to?: string | null
          client_id: string
          created_at?: string
          currency?: string | null
          deal_name: string
          deal_value: number
          description?: string | null
          expected_close_date?: string | null
          id?: string
          notes?: string | null
          probability?: number | null
          stage?: Database["public"]["Enums"]["deal_stage"]
          updated_at?: string
        }
        Update: {
          actual_close_date?: string | null
          assigned_to?: string | null
          client_id?: string
          created_at?: string
          currency?: string | null
          deal_name?: string
          deal_value?: number
          description?: string | null
          expected_close_date?: string | null
          id?: string
          notes?: string | null
          probability?: number | null
          stage?: Database["public"]["Enums"]["deal_stage"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "deals_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          created_at: string
          description: string | null
          entity_id: string
          entity_type: string
          file_name: string
          file_size: number | null
          file_type: string | null
          id: string
          public_url: string | null
          storage_path: string
          uploaded_by: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          entity_id: string
          entity_type: string
          file_name: string
          file_size?: number | null
          file_type?: string | null
          id?: string
          public_url?: string | null
          storage_path: string
          uploaded_by?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          entity_id?: string
          entity_type?: string
          file_name?: string
          file_size?: number | null
          file_type?: string | null
          id?: string
          public_url?: string | null
          storage_path?: string
          uploaded_by?: string | null
        }
        Relationships: []
      }
      industries: {
        Row: {
          display_order: number | null
          id: string
          is_active: boolean | null
          name: string
        }
        Insert: {
          display_order?: number | null
          id?: string
          is_active?: boolean | null
          name: string
        }
        Update: {
          display_order?: number | null
          id?: string
          is_active?: boolean | null
          name?: string
        }
        Relationships: []
      }
      invoices: {
        Row: {
          amount: number
          client_id: string
          created_at: string
          currency: string | null
          deal_id: string | null
          description: string | null
          due_date: string
          id: string
          invoice_number: string | null
          issue_date: string
          notes: string | null
          paid_date: string | null
          status: Database["public"]["Enums"]["invoice_status"]
          updated_at: string
        }
        Insert: {
          amount: number
          client_id: string
          created_at?: string
          currency?: string | null
          deal_id?: string | null
          description?: string | null
          due_date: string
          id?: string
          invoice_number?: string | null
          issue_date?: string
          notes?: string | null
          paid_date?: string | null
          status?: Database["public"]["Enums"]["invoice_status"]
          updated_at?: string
        }
        Update: {
          amount?: number
          client_id?: string
          created_at?: string
          currency?: string | null
          deal_id?: string | null
          description?: string | null
          due_date?: string
          id?: string
          invoice_number?: string | null
          issue_date?: string
          notes?: string | null
          paid_date?: string | null
          status?: Database["public"]["Enums"]["invoice_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "invoices_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_deal_id_fkey"
            columns: ["deal_id"]
            isOneToOne: false
            referencedRelation: "deals"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string
          entity_id: string | null
          entity_type: string | null
          id: string
          is_read: boolean | null
          message: string | null
          notification_type: Database["public"]["Enums"]["notification_type"]
          title: string
          user_id: string
        }
        Insert: {
          created_at?: string
          entity_id?: string | null
          entity_type?: string | null
          id?: string
          is_read?: boolean | null
          message?: string | null
          notification_type: Database["public"]["Enums"]["notification_type"]
          title: string
          user_id: string
        }
        Update: {
          created_at?: string
          entity_id?: string | null
          entity_type?: string | null
          id?: string
          is_read?: boolean | null
          message?: string | null
          notification_type?: Database["public"]["Enums"]["notification_type"]
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string
          full_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email: string
          full_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string
          full_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_admin: {
        Args: { _user_id: string }
        Returns: boolean
      }
      is_sales: {
        Args: { _user_id: string }
        Returns: boolean
      }
    }
    Enums: {
      activity_type: "call" | "email" | "meeting" | "note" | "task"
      app_role: "admin" | "sales" | "viewer"
      client_status: "prospect" | "active" | "inactive" | "archived"
      deal_stage:
        | "lead"
        | "qualified"
        | "proposal"
        | "negotiation"
        | "won"
        | "lost"
      invoice_status: "draft" | "sent" | "paid" | "overdue" | "cancelled"
      notification_type:
        | "deal_assigned"
        | "invoice_due"
        | "activity_reminder"
        | "system"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      activity_type: ["call", "email", "meeting", "note", "task"],
      app_role: ["admin", "sales", "viewer"],
      client_status: ["prospect", "active", "inactive", "archived"],
      deal_stage: [
        "lead",
        "qualified",
        "proposal",
        "negotiation",
        "won",
        "lost",
      ],
      invoice_status: ["draft", "sent", "paid", "overdue", "cancelled"],
      notification_type: [
        "deal_assigned",
        "invoice_due",
        "activity_reminder",
        "system",
      ],
    },
  },
} as const
