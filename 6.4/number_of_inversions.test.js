import assert from "assert";
import {Counter, main} from "./number_of_inversions.js";

describe('binary search', function () {
    describe('#main()', function () {
        it('1', function() {
            let data = '5\n' +
                '2 3 9 2 9';
            let counter = new Counter();
            // let counter = 0;
            assert.deepEqual(main(data, counter), [2, 2, 3, 9, 9]);
            assert.equal(counter.i, 2);
            // assert.equal(counter, 2);
        });

        it('2', function() {
            let data = '5\n' +
                '1 3 8 2 9';
            let counter = new Counter();
            assert.deepEqual(main(data, counter), [1, 2, 3, 8, 9]);
            assert.equal(counter.i, 2);
        });

        it('3', function() {
            let data = '7\n' +
                '7 6 5 4 3 2 1';
            let counter = new Counter();
            assert.deepEqual(main(data, counter), [1, 2, 3, 4, 5, 6, 7]);
            assert.equal(counter.i, 21);
        });

        it('4', function() {
            let data = '5\n' +
                '1 2 3 5 4';
            let counter = new Counter();
            assert.deepEqual(main(data, counter), [1, 2, 3, 4, 5]);
            assert.equal(counter.i, 1);
        });
    });
});
