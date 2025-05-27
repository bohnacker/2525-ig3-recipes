import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

export async function POST({ request, cookies }) {
	const test = await request.json();
	console.log('Received data:', test);

	// write to supabase
	const { data, error } = await supabase.from('Recipes').insert({
		title: 'Spaghetti Bolognese',
		incredients: [],
		description: 'A classic Italian pasta dish',
		portions: 4
	});
    if (error) {
        console.error('Error inserting data:', error);
        return json({ error: 'Failed to add recipe' }, { status: 500 });
    }

	const id = 0;
	return json({ id }, { status: 201 });
}
