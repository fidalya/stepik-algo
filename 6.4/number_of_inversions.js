/**
 * Первая строка содержит число 1 ≤ n ≤ 10^5, вторая — массив A[1…n], содержащий натуральные числа, не превосходящие 10^9.
 * Необходимо посчитать число пар индексов 1 ≤ i < j ≤ n, для которых A[i]>A[j].
 * (Такая пара элементов называется инверсией массива. Количество инверсий в массиве является в некотором смысле его
 * мерой неупорядоченности: например, в упорядоченном по неубыванию массиве инверсий нет вообще, а в массиве,
 * упорядоченном по убыванию, инверсию образуют каждые два элемента.)
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

    let numbers = variables[1].split(" ").map((value) => (parseInt(value)));
    let counter = new Counter();
    mergeSort(numbers, counter);

    console.log(counter.i);
});

export class Counter {
    constructor() {
        this.i = 0;
    }
}

function mergeSort(array, counter) {
    if (array.length > 1) {
        let m = Math.floor(array.length / 2);
        let half = array.splice(0, m);
        return merge(mergeSort(half, counter), mergeSort(array, counter), counter);
    } else {
        return array;
    }
}

function merge(firstA, secondA, counter) {
    let res = [];
    let f = firstA.shift();
    let s = secondA.shift();

    while (firstA.length >= 0 || secondA.length >= 0) {
        if (!f && !s) {
            break;
        }

        if (!f) {
            res.push(s);
            s = secondA.shift();
        } else if (!s) {
            res.push(f);
            f = firstA.shift();
        } else if (f > s) {
            counter.i += firstA.length + 1;
            res.push(s);
            s = secondA.shift();
        } else {
            res.push(f);
            f = firstA.shift();
        }
    }

    return res;
}

export function main(data, counter) {
    let variables = data.split("\n");

    let numbers = variables[1].split(" ").map((value) => (parseInt(value)));
    return mergeSort(numbers, counter);
}

