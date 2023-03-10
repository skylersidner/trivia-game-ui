import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || '';

const hasSupabaseConfig = Boolean(supabaseUrl && supabaseAnonKey);

if (hasSupabaseConfig) {
    console.log('Supabase configuration successful!');
} else {
    throw new Error('Supabase configuration failed!');
}
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
