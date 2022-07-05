/**
 * По данным двум числам 1 ≤ a,b ≤ 2⋅10^9 найдите их наибольший общий делитель.
 */

let stdin = process.openStdin();

stdin.on('data', function(data) {
    let params = data.toString().split(" ").map(x => parseInt(x));

    if (params.length === 2 && params.every(isCorrect)) {
        console.log(euclidGCD2(params[0], params[1]));
    } else {
        console.log(' 1 <= a,b <= 2 * 10^9');
    }
});

const isCorrect = (currentValue) => currentValue >= 1;

function euclidGCD(a, b) {
    if (a === 0) {
        return b;
    }
    if (b === 0) {
        return a;
    }
    if (a >= b) {
        a %= b;
    } else {
        b %= a;
    }

    return euclidGCD(a, b);
}

function euclidGCD2(a, b) {
    if (b > 0) {
        return euclidGCD2(b, a % b);
    }

    return a;
}
