<script>
	let { data } = $props();

	let title = $state('');
	let incredients = $state('');
	let description = $state('');
	let portions = $state('');

	async function writeToDB() {
		const response = await fetch('/addRecipe', {
			method: 'POST',
			body: JSON.stringify({ title, incredients: JSON.parse(incredients), description, portions }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
</script>

<!-- <ul>
	{#each data.recipes as recipe}
		<li>{recipe.title}</li>
	{/each}
</ul> -->

<!-- make a button that looks like one -->
<!-- <button class="btn btn-primary" onclick={writeToDB}>Write something to DB</button> -->

<h1>Add a new recipe</h1>
<div>
	<label for="title">Title</label>
	<input name="title" id="title" bind:value={title} />
</div>
<div>
	<label for="incredients">Incredients</label>
	<input name="incredients" id="incredients" bind:value={incredients} />
</div>
<div>
	<label for="description">Description</label>
	<input name="description" id="description" bind:value={description} />
</div>
<div>
	<label for="portions">Portions</label>
	<input name="portions" id="portions" bind:value={portions} />
</div>
<div>
	<button onclick={writeToDB}>Add Recipe</button>
</div>
