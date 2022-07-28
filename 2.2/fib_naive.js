/**
 * Дано целое число 1 ≤ n ≤ 40, необходимо вычислить n-е число Фибоначчи (напомним, что F_0=0, F_1=1,
 * и F_n=F_{n-1}+F_{n-2} при n ≥ 2)
 * 
 * There is an integer 1 ≤ n ≤ 40, you need to calculate the nth Fibonacci number 
 * (recall that F_0=0, F_1=1, and F_n=F_{n-1}+F_{n-2} for n ≥ 2)
 */

let stdin = process.openStdin();

stdin.on('data', function(data) {
    let n = parseInt(data.toString());

    if (n < 0) {
        console.log(' 0 >= n');
    } else {
        console.log(fib(n));
    }
});

function fib(n) {
    if (n === 0 || n === 1) {
        return n;
    }

    return fib(n-1) + fib(n-2);
}
