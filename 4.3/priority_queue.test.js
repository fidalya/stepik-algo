import assert from "assert";
import {extractMax, insert, main} from "./priority_queue.js";

describe('priority queue', function () {
    describe('#main()', function () {
        it('1', function() {
            let data = '6 \n' +
                'Insert 200\n' +
                'Insert 10\n' +
                'ExtractMax\n' +
                'Insert 5\n' +
                'Insert 500\n' +
                'ExtractMax';
            assert.deepEqual(main(data), [10, 5]);
        });

        it('2', function() {
            let data = '4\n' +
                'Insert 200\n' +
                'Insert 200\n' +
                'Insert 200\n' +
                'ExtractMax';
            assert.deepEqual(main(data), [200, 200]);
        });

        it('3', function() {
            let data = '2\n' +
                'Insert 200\n' +
                'ExtractMax';
            assert.deepEqual(main(data), []);
        });

        it('4', function() {
            let data = '11\n' +
                'Insert 2\n' +
                'Insert 3\n' +
                'Insert 18\n' +
                'Insert 15\n' +
                'Insert 18\n' +
                'Insert 12\n' +
                'Insert 12\n' +
                'Insert 2\n' +
                'ExtractMax\n' +
                'ExtractMax\n' +
                'ExtractMax\n' +
                'ExtractMax';
            assert.deepEqual(main(data), [12, 3, 2, 2]);
        });

        it('5', function() {
            let data = '8\n' +
                'Insert 304\n' +
                'Insert 255\n' +
                'Insert 146\n' +
                'Insert 29\n' +
                'Insert 157\n' +
                'Insert 96\n' +
                'Insert 105\n' +
                'ExtractMax';
            assert.deepEqual(main(data), [255, 157, 146, 29, 105, 96]);
        });

        it('6', function() {
            let data = '5\n' +
                'Insert 10\n' +
                'Insert 10\n' +
                'Insert 8\n' +
                'ExtractMax\n' +
                'ExtractMax\n' +
                'ExtractMax';
            assert.deepEqual(main(data), []);
        });
    });

    describe('#insert()', function () {
        it('1', function() {
            let heap = [];
            insert(heap, 1);
            insert(heap, 5);
            insert(heap, 4);
            assert.deepEqual(heap, [5, 1, 4]);
        });
    });

    describe('#extractMax()', function () {
        it('1', function() {
            let heap = [];
            insert(heap, 1);
            insert(heap, 5);
            insert(heap, 4);
            let max = extractMax(heap);
            assert.equal(max, 5);
            assert.deepEqual(heap, [4, 1]);
        });
    });

    describe('#bouth', function () {
        it('1', function() {
            let heap = [];
            let max;
            insert(heap, 200);
            insert(heap, 10);
            max = extractMax(heap);
            assert.equal(max, 200);
            insert(heap, 5);
            insert(heap, 500);
            max = extractMax(heap);
            assert.equal(max, 500);
        });
    });
});
