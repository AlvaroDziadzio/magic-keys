<script>
	import SingleNote from "./components/SingleNote.svelte";

	let points = 0;

</script>

<main>
	<SingleNote on:hit={() => points += 1} on:miss={() => points -= 2}/>
	<span>{points}</span>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>