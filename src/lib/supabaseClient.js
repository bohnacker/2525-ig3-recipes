import { createClient } from '@supabase/supabase-js';
// get env variables from .env file
import { SUPABASE_URL, SUPABASE_API_KEY } from '$env/static/private';
console.log('Supabase URL:', SUPABASE_URL); // Log the Supabase URL

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
