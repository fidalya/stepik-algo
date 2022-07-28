/**
 * Покрыть отрезки точками
 * По данным n отрезкам необходимо найти множество точек минимального размера,
 * для которого каждый из отрезков содержит хотя бы одну из точек.
 * 
 * Cover segments with dots
 * Given n segments, it is necessary to find a set of points of minimum size,
 * for which each of the segments contains at least one of the points.
 */

const stdin = process.openStdin();

class Segment {
    constructor(left, right) {
        this.l = parseInt(left);
        this.r = parseInt(right);
    }
}

function getCoveringList(segments) {
    segments.sort((a, b) => a.r - b.r);

    let list = [];
    let current = -1;

    for (let i = 0; i < segments.length; i++) {
        if (current < segments[i].l) {
            current = segments[i].r;
            list.push(current);
        }
    }

    console.log(list.length + '\n' + list.join(' '));
}

stdin.on('data', function(data){
    let variables = data.toString().split("\n");
    variables.splice(-1,1);

    let segments = [];
    for (let i = 1; i < variables.length; i++){
        let segment = new Segment(variables[i].match(/\d+\s/g), variables[i].match(/\s\d+/g));
        segments.push(segment);
    }

    getCoveringList(segments);
});
