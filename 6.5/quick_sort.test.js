import assert from "assert";
import {main, quickSort, quickSortSt} from "./quick_sort.js";

describe('quick sort', function () {
    describe('#quickSortSt()', function () {
        it('should sort.1', function() {
            let numbers = [2, 3, 9, 2, 9];
            quickSortSt(numbers, 0, numbers.length - 1);
            assert.deepEqual(numbers, [2, 2, 3, 9, 9]);
        });

        it('should sort.2', function() {
            let numbers = [1, 3, 8, 2, 9];
            quickSortSt(numbers, 0, numbers.length - 1);
            assert.deepEqual(numbers, [1, 2, 3, 8, 9]);
        });
    });

    describe('#quickSort()', function () {
        it('should sort.1', function() {
            let numbers = [2, 3, 9, 2, 9];
            quickSort(numbers, 0, numbers.length - 1);
            assert.deepEqual(numbers, [2, 2, 3, 9, 9]);
        });

        it('should sort.2', function() {
            let numbers = [1, 3, 8, 2, 9];
            quickSort(numbers, 0, numbers.length - 1);
            assert.deepEqual(numbers, [1, 2, 3, 8, 9]);
        });
    });

    describe('#main() calculate that', function () {
        it('point can be inside segment, or doesn`t contain anywhere', function() {
            let data = '2 3\n' +
                '0 5\n' +
                '7 10\n' +
                '1 6 11';
            assert.equal(main(data), '1 0 0 ');
        });

        it('point can be on the boundary', function() {
            let data = '6 6\n' +
                '0 3\n' +
                '1 3\n' +
                '2 3\n' +
                '3 4\n' +
                '3 5\n' +
                '3 6\n' +
                '1 2 3 4 5 6';
            assert.equal(main(data), '2 3 6 3 2 1 ');
        });

        it('segments can overlap', function() {
            let data = '6 9\n' +
                '0 0\n' +
                '-1 1\n' +
                '-2 2\n' +
                '-3 3\n' +
                '-4 4\n' +
                '-5 5\n' +
                '-5 -4 -3 -1 0 1 3 4 5';
            assert.equal(main(data), '1 2 3 5 6 5 3 2 1 ');
        });

        it('only one segment', function() {
            let data = '1 3\n' +
                '0 5\n' +
                '2 3 4';
            assert.equal(main(data), '1 1 1 ');
        });

        it('duplicate segments', function() {
            let data = '10 5\n' +
                '-2 3\n' +
                '0 3\n' +
                '-1 0\n' +
                '-1 3\n' +
                '0 1\n' +
                '-2 -1\n' +
                '1 3\n' +
                '2 3\n' +
                '1 2\n' +
                '2 3\n' +
                '-3 -1 0 2 3';
            assert.equal(main(data), '0 4 5 7 6 ');
        });

        it('point far from segment', function() {
            let data = '1 1\n' +
                '-2 3\n' +
                '-10';
            assert.equal(main(data), '0 ');
        });

        it('point in the middle', function() {
            let data = '1 1\n' +
                '-2 3\n' +
                '-1';
            assert.equal(main(data), '1 ');
        });

        it('on the left boundary', function() {
            let data = '1 1\n' +
                '-2 3\n' +
                '-2';
            assert.equal(main(data), '1 ');
        });

        it('on the right boundary', function() {
            let data = '1 1\n' +
                '-2 3\n' +
                '3';
            assert.equal(main(data), '1 ');
        });

        it('segments Intersect on the boundary with point', function() {
            let data = '2 1\n' +
                '-2 3\n' +
                '3 5\n' +
                '3';
            assert.equal(main(data), '2 ');
        });
    });
});
