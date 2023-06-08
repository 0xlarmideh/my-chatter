import { createClient } from "@supabase/supabase-js";

const supabaseUrl = NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// export { supabase };
export default supabase;
