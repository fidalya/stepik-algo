/**
 * Первая строка содержит количество предметов 1 ≤ n ≤ 10^3 и вместимость рюкзака 0 ≤ W ≤ 2⋅10^6.
 * Каждая из следующих n строк задаёт стоимость 0 ≤ c_i ≤ 2⋅10^6. Выведите максимальную стоимость частей предметов
 * (от каждого предмета можно отделить любую часть, стоимость и объём при этом пропорционально уменьшатся),
 * помещающихся в данный рюкзак, с точностью не менее трёх знаков после запятой.
 * 
 * The first line contains the number of items 1 ≤ n ≤ 10^3 and the capacity of the backpack 0 ≤ W ≤ 2⋅10^6.
 * Each of the next n lines specifies the cost 0 ≤ c_i ≤ 2⋅10^6. Print the maximum cost of item parts 
 * (any part can be separated from each item, the cost and volume will decrease proportionally), 
 * and fit in this backpack, with an accuracy of at least three decimal places.
 */

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
