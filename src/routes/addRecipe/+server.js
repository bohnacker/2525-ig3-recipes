import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

export async function POST({ request, cookies }) {
	const data = await request.json();
	console.log('Received data:', data);

	// write to supabase
	const { res, error } = await supabase.from('Recipes').insert({
		title: data.title,
		incredients: data.incredients,
		description: data.description,
		portions: data.portions,
	});
    if (error) {
        console.error('Error inserting data:', error);
        return json({ error: 'Failed to add recipe' }, { status: 500 });
    }

	const id = 0;
	return json({ id }, { status: 201 });
}
