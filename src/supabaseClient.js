import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://kxkcumlkmwjkgkrjzqxo.supabase.co";
const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4a2N1bWxrbXdqa2drcmp6cXhvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MTcyNTIyNiwiZXhwIjoyMDc3MzAxMjI2fQ.S6YGoLLOs3dP868ilSB3SS_XNb6uLmbLCJJ7JPsbJJw";

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
