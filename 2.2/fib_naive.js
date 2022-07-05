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