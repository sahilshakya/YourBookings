import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://utxmkcysrcjxicappvge.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0eG1rY3lzcmNqeGljYXBwdmdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxMjA5MTUsImV4cCI6MjAxNTY5NjkxNX0.FGmBywAmvxjjkIOCW8Vr3rjKqfc31NlU9fuQMLuckvU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
