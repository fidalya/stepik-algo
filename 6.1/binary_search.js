/**
 * В первой строке даны целое число 1 ≤ n ≤ 10^5 и массив A[1…n] из n различных натуральных чисел, не превышающих 10^9,
 * в порядке возрастания, во второй — целое число 1 ≤ k ≤ 10^5 и k натуральных чисел b_1,…,b_k, не превышающих 10^9.
 * Для каждого i от 1 до k необходимо вывести индекс 1 ≤ j ≤ n, для которого A[j] = b_i, или −1, если такого j нет.
 * 
 * The first line contains an integer 1 ≤ n ≤ 10^5 and an array A[1…n] of n different natural numbers not exceeding 10^9,
 * in ascending order, the second one contains an integer 1 ≤ k ≤ 10^5 and k natural numbers b_1,…,b_k not exceeding 10^9.
 * For each, i from 1 to k, print the index 1 ≤ j ≤ n for which A[j] = b_i, or −1 if there is no such j.
 */

//for platform
let input = '';

process.stdin.on('readable', function () {
    let chunk;
    while ((chunk = process.stdin.read()) !== null) {
        input += chunk;
    }
});

process.stdin.on('end', function () {
    let variables = input.split("\n");

    let numbers = variables[0].split(" ").map((value) => (parseInt(value)));
    numbers.splice(0, 1);
    let wanted = variables[1].split(" ").map((value) => (parseInt(value)));
    wanted.splice(0, 1);

    let res = [];
    for (let i = 0; i < wanted.length; i++) {
        res.push(binarySearch(numbers, wanted[i]));
    }

    console.log(res.join(" "));
});

function binarySearch(array, wanted) {
    let m,
        l = 0,
        r = array.length - 1;

    while (l <= r) {
        m = l + Math.floor((r - l) / 2);
        if (array[m] === wanted) {
            return m + 1;
        } else if (wanted > array[m]) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return -1;
}

// for tests
export function main(data) {
    let arr = data.split("\n");
    let [rawNumbers, rawWanted] = arr;

    let [, ...numbers] = rawNumbers.split(" ").map((value) => (parseInt(value)));
    let [, ...wanted] = rawWanted.split(" ").map((value) => (parseInt(value)));

    let res = [];
    for (let i = 0; i < wanted.length; i++) {
        res.push(binarySearch(numbers, wanted[i]));
    }

    return res.join(" ");
}
