<script>
    import Notation from "./Notation.svelte";
    import {abcToMidi, midiToAbc, randomWhiteMidi} from '../utils'
    import { createEventDispatcher } from "svelte";

	export let low = 35;
	export let high = 45;

    const dispatcher = createEventDispatcher();
    let currentNote = midiToAbc(randomWhiteMidi());
	let correct = true;

	function handleNote(midi) {
		if (abcToMidi(currentNote) === midi) {
			dispatcher("hit");
			currentNote = midiToAbc(randomWhiteMidi(low, high));
		} else {
			dispatcher("miss");
		}
	}

	function handleMidi(ev) {
		if (ev.data[0] == 144)
			handleNote(ev.data[1]);
	}

	navigator.requestMIDIAccess().then((ac) => {
		for(let i of ac.inputs.values()) {
			i.onmidimessage = handleMidi;
		}
	});


</script>

<Notation music={currentNote} />