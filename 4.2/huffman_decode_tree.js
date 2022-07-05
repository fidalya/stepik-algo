export function huffman_decode_tree(data) {
    let variables = data.toString().split("\n");
    variables.splice(-1, 1);

    let sourceList = variables.pop().repeat(30).split('').reverse();

    let dictionary = new Map();
    for (let i = 1; i < variables.length; i++){
        dictionary.set(variables[i].match(/\d+/g)[0], variables[i].match(/[a-z]/g)[0]);
    }

    let code = '',
        result = '';

    while (sourceList.length >= 1 && result.length < 10000) {
        code = code + sourceList.pop();

        if (dictionary.has(code)) {
            result += dictionary.get(code);
            code = '';
        }
    }

    console.log(result.toLowerCase());
    console.log(result.length >= 10000 ? '' : result);
    return result;
}

