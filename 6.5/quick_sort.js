let chunks = [];

process.stdin.on('readable', function () {
    let chunk;
    while ((chunk = process.stdin.read()) !== null) {
        chunks.push(chunk);
    }
});

process.stdin.on('end', function () {
    let variables = chunks.join('').split("\n");

    let lefts = [];
    let rights = [];
    for (let i = 1; i < variables.length - 1; i++){
        lefts.push(parseInt(variables[i].match(/\-*\d+\s/g)));
        rights.push(parseInt(variables[i].match(/\s\-*\d+/g)));
    }

    quickSort(lefts, 0, lefts.length - 1);
    quickSort(rights, 0, rights.length - 1);

    let result = '';
    let numbers = variables.pop().split(" ").map((value) => (parseInt(value)));
    for (let i = 0; i < numbers.length; i++) {
        let lC = lefts.reduce((count, elem) => elem <= numbers[i] ? count + 1 : count, 0);
        let rC = rights.reduce((count, elem) => elem < numbers[i] ? count + 1 : count, 0);
        result += lC - rC + ' ';
    }

    console.log(result);
});

export function quickSort(array, l, r) {
    if (l >= r) {
        return array;
    }
    while (l < r) {
        let coordinates = partition(array, l, r);
        let fIndex = coordinates[0];
        let lIndex = coordinates[1];
        let l1 = fIndex - l;
        let l2 = r - lIndex;
        if (l1 < l2) {
            quickSort(array, l, fIndex - 1);
            l = lIndex + 1;
        } else {
            quickSort(array, lIndex + 1, r);
            r = fIndex - 1;
        }
    }
}

function partition(array, l, r) {
    let randomIndex = Math.floor(Math.random() * (r - l + 1)) + l;
    let x = array[randomIndex];
    swap(array, l, randomIndex);

    let j = l;
    let k = j;
    for (let i = l + 1; i <= r; i++) {
        if (array[i] < x) {
            j++;
            k++;

            if (j === k) {
                swap(array, j, i);
            } else {
                let firstK = array[j];
                array[j] = array[i];
                array[i] = array[k];
                array[k] = firstK;
            }
        }
        if (array[i] === x) {
            k++;
            swap(array, k, i);
        }
    }
    swap(array, l, j);
    return [j, k];
}

function swap(array, a, b) {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}


export function main(data) {
    let variables = data.toString().split("\n");

    let lefts = [];
    let rights = [];
    for (let i = 1; i < variables.length - 1; i++){
        lefts.push(parseInt(variables[i].match(/\-*\d+\s/g)));
        rights.push(parseInt(variables[i].match(/\s\-*\d+/g)));
    }

    lefts.sort();
    rights.sort();

    let result = '';
    let numbers = variables.pop().split(" ").map((value) => (parseInt(value)));
    for (let i = 0; i < numbers.length; i++) {
        let lC = lefts.reduce((count, elem) => elem <= numbers[i] ? count + 1 : count, 0);
        let rC = rights.reduce((count, elem) => elem < numbers[i] ? count + 1 : count, 0);
        result += lC - rC + ' ';
    }

    return result;
}

export function quickSortSt(array, l, r) {
    let index = Math.floor(Math.random() * (r - l + 1));
    let x = array[index + l];
    let i = l;
    let j = r;
    let k = l;
    while (i <= j) {
        while(array[i] < x) {
            i = i + 1;
            k = k + 1;
        }
        while(array[j] > x) {
            j = j - 1;
        }
        if (i <= j) {
            swap(array, i, j);
            i = i + 1;
            j = j - 1;
        }
    }
    if (l < j) quickSortSt(array, l, j);
    if (i < r) quickSortSt(array, i, r);
}