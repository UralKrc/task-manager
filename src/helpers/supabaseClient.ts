import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://idrhkxfoumogcfasmpvd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkcmhreGZvdW1vZ2NmYXNtcHZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1OTcwOTEsImV4cCI6MjAyMTE3MzA5MX0.VZZK_gbiayQnDV-eXW_Zj8iVNefSG9x7_Q_6JAhLhM8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
