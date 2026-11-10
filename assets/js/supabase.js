const SUPABASE_URL =
"https://VOTRE-PROJET.supabase.co";

const SUPABASE_KEY =
"VOTRE_CLE_PUBLISHABLE";

const supabaseClient =
supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);

export default supabaseClient;