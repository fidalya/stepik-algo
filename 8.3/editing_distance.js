/**
 * Вычислите расстояние редактирования двух данных непустых строк длины не более 10^2,
 * содержащих строчные буквы латинского алфавита.
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
    let oldSymbols = variables[0].split("");
    let newSymbols = variables[1].split("");

    console.log(editDistBU(oldSymbols, newSymbols));
});

export function editDistBU(oldSymbols, newSymbols) {
    let n = oldSymbols.length;
    let m = newSymbols.length;
    let matrix = Array(n + 1);
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = Array(m + 1).fill(0, 0, 1);
    }
    for (let j = 0; j <= m; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            let c = diff(oldSymbols[i - 1], newSymbols[j - 1]);
            matrix[i][j] = Math.min(matrix[i - 1][j] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j - 1] + c);
        }
    }

    return matrix[n][m];
}

export function editDistBUMemoize(oldSymbols, newSymbols) {
    let n = oldSymbols.length;
    let m = newSymbols.length;

    let matrix = Array(2);
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = Array(m + 1);
    }
    for (let j = 0; j <= m; j++) {
        matrix[0][j] = j;
    }

    let row = 0, col = 0;

    while (row < n) {
        row++;
        while (col <= m) {
            if (col === 0) {
                matrix[1][col] = matrix[0][col] + 1;
            } else {
                let c = diff(oldSymbols[row - 1], newSymbols[col - 1]);
                matrix[1][col] = Math.min(matrix[0][col] + 1, matrix[1][col - 1] + 1, matrix[0][col - 1] + c);
            }
            col++;
        }
        for (let i = 0; i <= m; i++) {
            matrix[0][i] = matrix[1][i];
            matrix[1][i] = 0;
        }
        col = 0;
    }

    return matrix[0][m];
}

function diff(a, b) {
    return a === b ? 0 : 1;
}

export function main(data) {
    let variables = data.split("\n");
    let oldSymbols = variables[0].split("");
    let newSymbols = variables[1].split("");

    return editDistBU(oldSymbols, newSymbols);
}