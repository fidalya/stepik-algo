/**
 * Дано целое число 1 ≤ n ≤ 40, необходимо вычислить n-е число Фибоначчи (напомним, что F_0=0, F_1=1,
 * и F_n=F_{n-1}+F_{n-2} при n ≥ 2)
 * 
 * Given an integer 1 ≤ n ≤ 40, you need to calculate the nth Fibonacci number 
 * (recall that F_0=0, F_1=1, and F_n=F_{n-1}+F_{n-2} for n ≥ 2)
 */

let stdin = process.openStdin();

stdin.on('data', function(data) {
    let n = parseInt(data.toString());

    if (n < 0) {
        console.log(' 0 >= n');
    } else {
        console.log(fib2(n));
    }
});

function fib(n) {
    let cache = [];
    cache[0] = 0;
    cache[1] = 1;
    for (let i = 2; i <= n; i++) {
        cache[i] = cache[i-2] + cache[i-1];
    }
    return cache[n];
}

function fib2(n) {
    if (n <= 1) {
        return n;
    }

    let previous = 0;
    let current = 1;

    for (let i = 2; i <= n; i++) {
        let new_current = current;
        current = previous + current;
        previous = new_current;
    }
    return current;
}
