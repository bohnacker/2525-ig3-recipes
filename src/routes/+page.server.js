import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase.from('Recipes').select();
    console.log('Data from Supabase:', data); // Log the data to see what is returned
	return {
		recipes: data ?? []
	};
}
