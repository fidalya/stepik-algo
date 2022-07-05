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