import assert from "assert";
import {Counter, main} from "./number_of_inversions.js";

describe('binary search', function () {
    describe('#main() should sort and count inversions', function () {
        it('if array has equal elements', function() {
            let data = '5\n' +
                '2 3 9 2 9';
            let counter = new Counter();
            assert.deepEqual(main(data, counter), [2, 2, 3, 9, 9]);
            assert.equal(counter.i, 2);
        });

        it('if array has any number of inversions', function() {
            let data = '5\n' +
                '1 3 8 2 9';
            let counter = new Counter();
            assert.deepEqual(main(data, counter), [1, 2, 3, 8, 9]);
            assert.equal(counter.i, 2);
        });

        it('if array has all shuffled', function() {
            let data = '7\n' +
                '7 6 5 4 3 2 1';
            let counter = new Counter();
            assert.deepEqual(main(data, counter), [1, 2, 3, 4, 5, 6, 7]);
            assert.equal(counter.i, 21);
        });

        it('if array has only one inversion', function() {
            let data = '5\n' +
                '1 2 3 5 4';
            let counter = new Counter();
            assert.deepEqual(main(data, counter), [1, 2, 3, 4, 5]);
            assert.equal(counter.i, 1);
        });
    });
});
