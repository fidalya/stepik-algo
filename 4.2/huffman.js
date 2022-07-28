/**
 * По данной непустой строке s длины не более 10^4, состоящей из строчных букв латинского алфавита, постройте оптимальный
 * беспрефиксный код. В первой строке выведите количество различных букв k, встречающихся в строке, и размер получившейся
 * закодированной строки. В следующих k строках запишите коды букв в формате "letter: code".
 * В последней строке выведите закодированную строку.
 * 
 * Given a non-empty string s of length no more than 10^4, consisting of lowercase Latin letters, construct an optimal
 * unprefixed code. In the first line print the number of distinct letters k in the string and the size of the resulting 
 * encoded string. In the next k lines write the codes of the letters in the format "letter: code". 
 * The last line is the encoded string.
 */

const stdin = process.openStdin();

class Node {
    constructor (value, symbol) {
        this.value = value;
        this.symbol = symbol;
    }

    buildCode(code) {
        this.code = code;
    }
}

class InternalNode extends Node {
    constructor (left, right) {
        super((left ? left.value : 0) + (right ? right.value : 0));
        this.left = left;
        this.right = right;
    }

    buildCode(code) {
        super.buildCode(code);
        if (this.left) {
            this.left.buildCode(code + '0');
        }

        if (this.right) {
            this.right.buildCode(code + '1');
        }
    }
}

class Leaf extends Node {
    constructor (value, symbol) {
        super(value, symbol);
    }

    buildCode(code) {
        super.buildCode(code);
        console.log(this.symbol + ': ' + this.code);
    }
}

function extractMin(queue) {
    let min, index;

    for (let i = 0; i < queue.length; i++) {
        if (min == null || min.value > queue[i].value) {
            min = queue[i];
            index = i;
        }
    }

    return queue.splice(index, 1).pop();
}

export function huffman(rowStr) {
    let sourceList = rowStr.split('');
    let dictionary = sourceList.reduce((dictionary, symbol) => {
        if (dictionary.has(symbol)) {
            dictionary.get(symbol).value = dictionary.get(symbol).value + 1;
        } else {
            dictionary.set(symbol, new Leaf(1, symbol));
        }
        return dictionary;
    }, new Map());

    let priorityQueue = Array.from(dictionary.values());
    let sum = buildTree(priorityQueue, 0);

    console.log(dictionary.size + ' ' + sum);
    priorityQueue.pop().buildCode('');

    let encodedStr = sourceList.reduce((encoded, symbol) => {
        return encoded + dictionary.get(symbol).code;
    }, '');

    console.log(encodedStr);
    return encodedStr;
}

function buildTree(priorityQueue, sum) {
    if (priorityQueue.length === 1) {
        let left = extractMin(priorityQueue);
        let joinedNode = new InternalNode(left);
        sum += joinedNode.value;
        priorityQueue.push(joinedNode);
    }

    while (priorityQueue.length !== 1) {
        let left = extractMin(priorityQueue),
            right = extractMin(priorityQueue),
            joinedNode = new InternalNode(left, right);
        sum += joinedNode.value;
        priorityQueue.push(joinedNode);
    }

    return sum;
}

stdin.on('data', function (data) {
    let source = data.toString().replace(/\r?\n|\r/g, "");
    huffman(source);
});

