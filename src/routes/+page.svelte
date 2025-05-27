<script>
	let { data } = $props();
</script>

<ul>
	{#each data.recipes as recipe}
		<li>{recipe.title}</li>
	{/each}
</ul>
