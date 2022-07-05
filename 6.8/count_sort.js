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

    console.log(countSearch(numbers).join(' '));
});

function countSearch(array) {
    let n = 10;
    let b = Array(n + 1).fill(0);
    for (let j = 0; j < array.length; j++) {
        b[array[j]] = b[array[j]] + 1;
    }
    for (let i = 1; i < b.length; i++) {
        b[i] = b[i] + b[i - 1];
    }
    let result = Array(array.length).fill(0);
    for (let j = array.length - 1; j >= 0; j--) {
        result[b[array[j]] - 1] = array[j];
        b[array[j]] = b[array[j]] - 1;
    }

    return result;
}

export function main(data, counter) {
    let variables = data.split("\n");

    let numbers = variables[1].split(" ").map((value) => (parseInt(value)));
    return countSearch(numbers);
}