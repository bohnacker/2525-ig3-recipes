<script>
	let { data } = $props();

	async function writeToDB() {
		const response = await fetch('/addRecipe', {
			method: 'POST',
			body: JSON.stringify({ data: 'Hello World' }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
</script>

<ul>
	{#each data.recipes as recipe}
		<li>{recipe.title}</li>
	{/each}
</ul>

<!-- make a button that looks like one -->
<button class="btn btn-primary" onclick={writeToDB}>Write something to DB</button>
