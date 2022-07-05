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

    let res = ldsBottomUp(numbers);
    console.log(res.length);
    console.log(res.join(' '));
});

export function multiplicityCondition(array, i, j) {
    return array[i] % array[j] === 0;
}

export function sizeCondition(array, i, j) {
    return array[j] < array[i];
}

function upperBound(array, wanted) {
    let m,
        l = -1,
        r = array.length;
    // a[l] <= x
    // a[r] > x
    while (r > l + 1) {
        m = (l + r) >> 1;
        if (array[m] >= wanted) {
            l = m;
        } else {
            r = m;
        }
    }
    return r;
}

export function ldsBottomUpNLogN(array) {
    let n = array.length;
    let d = [];
    let pos = [];
    let prev = Array(n - 1);
    let length = 0;

    pos[0] = -1;
    d[0] = Infinity;
    for (let i = 1; i <= n; i++) {
        d[i] = - Infinity;
    }

    for (let i = 0; i <= n; i++) {
        let j = upperBound(d, array[i]);
        if (n === 1 || (d[j - 1] >= array[i] && array[i] > d[j])) {
            d[j] = array[i];
            pos[j] = i;
            prev[i] = pos[j - 1];
            length = Math.max(length, j);
        }
    }
    let answer = [];
    let p = pos[length];
    while (p !== -1) {
        answer.push(p + 1);
        p = prev[p];
    }
    answer.reverse();

    return answer;
}

export function ldsBottomUp(array) {
    let d = Array(array.length);
    for (let i = 0; i < array.length; i++) {
        d[i] = 1;
        for (let j = 0; j <= i - 1; j++) {
            if(array[j] >= array[i] && (d[j] + 1) > d[i]) {
                d[i] = d[j] + 1;
            }
        }
    }

    let count = 0;
    let k = 0;
    for (let i = 0; i < array.length; i++) {
        if (d[i] >= d[k]) {
            k = i;
            count = d[i];
        }
    }

    let l = Array(count);
    let j = count;
    for (let i = k; i >= 0 ; i--) {
        if (d[i] === j) {
            j--;
            l[j] = i + 1;
        }
    }

    return l;
}

export function lisBottomUp(array, condition) {
    let d = Array(array.length);
    for (let i = 0; i < array.length; i++) {
        d[i] = 1;
        for (let j = 0; j <= i - 1; j++) {
            if(condition(array, i, j) && (d[j] + 1) > d[i]) {
                d[i] = d[j] + 1;
            }
        }
    }
    let ans = 0;
    for (let i = 0; i < array.length; i++) {
        ans = Math.max(ans, d[i]);
    }

    return ans;
}

export function main(data) {
    let variables = data.split("\n");

    let numbers = variables[1].split(" ").map((value) => (parseInt(value)));
    return lisBottomUp(numbers, multiplicityCondition);
}
