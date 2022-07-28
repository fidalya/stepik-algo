import assert from "assert";
import {main} from "./count_sort.js";

describe('count search', function () {
    describe('#main()', function () {
        it('should sort small array', function() {
            let data = '5\n' +
                '2 3 9 2 9';
            assert.deepEqual(main(data), [2, 2, 3, 9, 9]);
        });

        it('should sort array', function() {
            let data = '9\n' +
                '9 8 7 6 5 4 3 2 1';
            assert.deepEqual(main(data), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });

        it('should sort array with equal elements', function() {
            let data = '20\n' +
                '1 10 1 10 10 10 1 1 1 10 1 10 1 10 10 10 1 1 1 10';
            assert.deepEqual(main(data), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
        });
    });
});
