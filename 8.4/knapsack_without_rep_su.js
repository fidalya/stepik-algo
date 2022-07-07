/**
 * Первая строка входа содержит целые числа 1 ≤ W ≤ 10^4 и 1 ≤ n ≤ 300 — вместимость рюкзака и число золотых слитков.
 * Следующая строка содержит n целых чисел 0 ≤ w_1 ,..., w_n ≤ 10^5, задающих веса слитков.
 * Найдите максимальный вес золота, который можно унести в рюкзаке.
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

    let w = variables[0].split(" ")[0];
    let weights = variables[1].split(" ").map((str) => parseInt(str));

    console.log(knapsackWithoutRep(parseInt(w), weights));
});

export function knapsackWithoutRep(w, weights, costs) {
    let n = weights.length;
    let matrix = Array(n + 1);
    for (let i = 0; i < matrix.length; i++) {
        let end = i === 0 ? w + 1 : 1;
        matrix[i] = Array(w + 1).fill(0, 0, end);
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= w; j++) {
            matrix[i][j] = matrix[i - 1][j];
            if (weights[i - 1] <= j) {
                matrix[i][j] = Math.max(matrix[i][j], matrix[i - 1][j - weights[i - 1]] + costs[i - 1])
            }
        }
    }

    return matrix[n][w];
}

export function main(data) {
    let variables = data.split("\n");

    let w = variables[0].split(" ")[0];
    let weights = variables[1].split(" ").map((str) => parseInt(str));

    return knapsackWithoutRep(parseInt(w), weights, weights);
}