import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Environment variables VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are required');
}

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);
