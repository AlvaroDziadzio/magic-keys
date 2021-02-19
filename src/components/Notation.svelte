
<script>
    import abcjs from 'abcjs'
    const header = "X:1\n";
    
    export let music;
    let div;

    $: abcjs.renderAbc(div, header+music, {
        scale: 2,
        staffwidth: 1,
        paddingtop: 0,
        paddingbottom: 0,
        paddingright: 0,
        paddingleft: 0,
        add_classes: true,
        selectTypes: false
	});

</script>

<div bind:this={div}></div>