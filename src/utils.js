const abcmiditable =  {
    C: 60,
    D: 62,
    E: 64,
    F: 65,
    G: 67,
    A: 69,
    B: 71,
    c: 72,
    d: 74,
    e: 76,
    f: 77,
    g: 79,
    a: 81,
    b: 83,
}

function abcToMidi(abc) {
    let midi = 0;
    midi -= (abc.match(/_/g) || []).length;
    midi += (abc.match(/\^/g) || []).length;

    midi += (abc.match(/'/g) || []).length * 12;
    midi -= (abc.match(/,/g) || []).length * 12;

    midi += abcmiditable[abc.replaceAll("^", "").replaceAll("_", "").replaceAll(",", "").replaceAll("'", "")];
    return midi;
}

const seqToAbcTable = ["C", "D", "E", "F", "G", "A", "B"];
const seqToMidiTable = [0, 2, 4, 5, 7, 9, 11];

function randomWhiteMidi(low, high) {

    low = low || 35;
    high = high || 42;

    const note = low+Math.floor(Math.random()*(high-low));
    return seqToMidiTable[note%seqToMidiTable.length]+(12*Math.floor(note/seqToMidiTable.length));

}

function midiToAbc(midi) {

    if (!seqToMidiTable.includes(midi%12))
        return undefined; //TODO: handle black keys
    
    let abc = seqToAbcTable[seqToMidiTable.indexOf(midi%12)]

    if (midi < 60) {
        abc += ",".repeat(Math.ceil((60-midi)/12));
    }

    if (midi > 71) {
        abc += "'".repeat(Math.floor((midi-60)/12));
    }

    return abc;

}



export {abcToMidi, midiToAbc, randomWhiteMidi}