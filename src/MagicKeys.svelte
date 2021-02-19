<script>
	import SingleNote from "./components/SingleNote.svelte";

	let points = 0;

</script>

<main>
	{#if navigator.requestMIDIAccess}
		<SingleNote on:hit={() => points += 1} on:miss={() => points -= 2}/>
		<span>{points}</span>
	{:else}
		<h1>Your browser does not support MIDI or you're using HTTP instead of HTTPS.</h1>
	{/if}
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