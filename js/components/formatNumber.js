function formatNumber(number, positions = 2) { //=2 jeigu netycia niekas neduoda positions reiksmes, tai duoda 2
    
    if (typeof number !== 'number' ||
        !isFinite(number)) {
        console.error('ERROR: pirmasis parametras turi buti tikras skaicius.');
        return false;
    }
    if (typeof positions !== 'number' ||
        !isFinite(positions) ||
        positions % 1 !== 0 ||
        positions < 0 ||
        positions > 10) {
        console.error('ERROR: antrasis parametras turi buti tikras skaicius.');
        return false;
    }
    
    const fixed = 10 ** positions; // du daugybos zenklai reiskia kelima antruoju. 3 - treciuoju ir t.t..
    return Math.round(number * fixed) / fixed;
}

export { formatNumber }

/*
number * 100 / 100
50 -> 5000 -> 5000 -> 50
50.4 -> 5040 -> 50.4 -> 50.4
50.5415 -> 5054.15 -> 5054 -> 50.54
*/