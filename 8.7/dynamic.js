/**
 * лестница
 * Даны число 1 ≤ n ≤ 10^2 ступенек лестницы и целые числа -10^4 ≤ a_1, ... , a_n ≤ 10^4, которыми помечены ступеньки.
 * Найдите максимальную сумму, которую можно получить, идя по лестнице снизу вверх (от нулевой до n-й ступеньки),
 * каждый раз поднимаясь на одну или две ступеньки.
 */

let input = '';

process.stdin.on('readable', function () {
    let chunk;
    while ((chunk = process.stdin.read()) !== null) {
        input += chunk;
    }
});

process.stdin.on('end', function () {
    let variables = input.split("\n");

    let numbers = variables[1].split(" ").map((str) => parseInt(str));

    console.log(calculateMax(numbers));
});

export function calculateMax(d) {
    let n = d.length;
    let k = 2;
    let a = [];
    let r;
    a[0] = 0;
    for (let i = 1; i <= n; i++) {
        r = Math.min(k, i);
        a[i] = a[i - 1] + d[i - 1];
        for (let j = 2; j <= r; j++) {
            if (a[i] < a[i - j] + d[i - 1]) {
                a[i] = a[i - j] + d[i - 1];
            }
        }
    }
    return a[n];
}

export function main(data) {
    let variables = data.split("\n");

    let numbers = variables[1].split(" ").map((str) => parseInt(str));

    return calculateMax(numbers);
}
