const pA = [1, 1];

const pB = [2, 2];

function calcDistance(array1, array2) {
    const a = array1[0] - array1[1];
    const b = Math.pow(a);
    const c = array2[0] - array2[1];
    const d = Math.pow(c);
    const e = b + d;
    const distance = Math.sqrt(e);
    console.log(distance);

}

calcDistance(pA, pB);