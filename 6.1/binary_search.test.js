import assert from "assert";
import {main} from "./binary_search.js";

describe('binary search', function () {
    describe('#main()', function () {
        it('should print index of equal element or -1', function() {
            let data = '5 1 5 8 12 13\n' +
                '5 8 1 23 1 11';
            assert.equal(main(data), '3 1 -1 1 -1');
        });
    });
});
