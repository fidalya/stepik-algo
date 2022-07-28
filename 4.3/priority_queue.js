/**
 * Первая строка входа содержит число операций 1 ≤ n ≤ 10^5
 * Каждая из последующих n строк задают операцию одного из следующих двух типов:
 * - Insert x, где 0 ≤ x ≤ 10^9 — целое число;
 * - ExtractMax.
 * Первая операция добавляет число x в очередь с приоритетами, вторая — извлекает максимальное число и выводит его.
 * 
 * The first line of the input contains the number of operations 1 ≤ n ≤ 10^5
 * Each of the next n lines specifies an operation of one of the following two types:
 * - Insert x, where 0 ≤ x ≤ 10^9 is an integer;
 * - ExtractMax.
 * The first operation adds the number xx to the priority queue, and the second one extracts the maximum number and outputs it.
 */

function parentIndex(i) {
    return Math.floor( (i - 1) / 2 );
}

function leftIndex(i) {
    return 2 * i + 1;
}

function rightIndex(i) {
    return 2 * (i + 1);
}

function siftUp(heap, i) {
    let temp;
    while (i > 0 && heap[parentIndex(i)] <= heap[i]) {
        temp = heap[i];
        heap[i] = heap[parentIndex(i)];
        heap[parentIndex(i)] = temp;
        i = parentIndex(i);
    }
}

function siftDown(heap, i) {
    let j, temp;
    let lastIndex = heap.length - 1;
    while (leftIndex(i) <= lastIndex) {
        j = i;
        if (heap[leftIndex(i)] > heap[j]) {
            j = leftIndex(i);
        }
        if (rightIndex(i) <= lastIndex && heap[rightIndex(i)] > heap[j]) {
            j = rightIndex(i);
        }
        if (i === j) {
            break;
        }
        temp = heap[i];
        heap[i] = heap[j];
        heap[j] = temp;
        i = j;
    }
}

export function insert(heap, newEl) {
    heap.push(newEl);
    let index = heap.length - 1;
    siftUp(heap, index);
}

export function extractMax(heap) {
    let max;

    if (heap.length > 1) {
        max = peekMax(heap);
        heap[0] = heap.pop();
        siftDown(heap, 0);
    } else {
        max = heap.pop();
    }

    console.log(max);
    return max;
}

function peekMax(heap) {
    return heap[0];
}

let input = '';

//for platform
process.stdin.on('readable', function () {
    let chunk;
    while ((chunk = process.stdin.read()) !== null) {
        input += chunk;
    }
});

process.stdin.on('end', function () {
    let map = {
        'Insert': insert,
        'ExtractMax': extractMax
    }
    let maxHeap = [];

    let variables = input.split("\n");

    for (let i = 0; i < variables.length; i++){
        let command = variables[i].match(/[a-zA-Z]+/g);
        let param = variables[i].match(/\s\d*/g);

        if (param != null) {
            param = parseInt(param[0])
        }
        if (command != null && map[command[0]] != null) {
            map[command[0]](maxHeap, param);
        }
    }
});


// for tests
export function main(data) {
    let map = {
        'Insert': insert,
        'ExtractMax': extractMax
    }
    let maxHeap = [];

    let [, ...commands] = data.toString().split("\n");

    for (let i = 0; i < commands.length; i++){
        let [command, ] = commands[i].match(/[a-zA-Z]+/g);

        let params = commands[i].match(/\s\d*/g);
        let param = params ? parseInt(params[0]) : null;

        if (map[command] != null) {
            map[command](maxHeap, param);
        }
    }

    return maxHeap;
}
