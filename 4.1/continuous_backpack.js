const stdin = process.openStdin();

export class Thing {
    constructor(cost, weight) {
        this.c = parseFloat(cost);
        this.w = parseFloat(weight);
    }

    value() {
        return this.c / this.w;
    }
}

export function fillBackpack(capacity, things) {
    things.sort((a, b) => b.value() - a.value());
    let value = 0;

    for (let i = 0; i < things.length; i++) {
        let leftCapacity = capacity - things[i].w;
        if (leftCapacity <= 0) {
            value += (things[i].w + leftCapacity) * things[i].value();
            break;
        } else {
            value += things[i].c;
            capacity = leftCapacity;
        }
    }

    return value.toFixed(3);
}

stdin.on('data', function(data){
    let [rawCapacity, ...variables] = data.toString().split("\n");
    let capacity = parseFloat(rawCapacity.match(/\s\d+/g).toString());

    variables.splice(-1, 1);

    let things = [];
    for (let i = 0; i < variables.length; i++){
        let thing =
            new Thing(variables[i].match(/\d+\s/g), variables[i].match(/\s\d+/g));
        things.push(thing);
    }

    fillBackpack(capacity, things);
});
