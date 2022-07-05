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