/**
 * Дано число 1 ≤ n ≤ 10^7, необходимо найти последнюю цифру n-го числа Фибоначчи.
 */

let stdin = process.openStdin();

stdin.on('data', function(data) {
    let n = parseInt(data.toString());

    if (n < 0 ) {
        console.log('n > 0');
    } else {
        console.log(lastFib(n));
    }
});

function lastFib(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    let res, a = 0, b = 1;

    for (let i = 1; i < n; i++) {
       res = (a + b) % 10;
       a = b;
       b = res;
    }

    return res;
}