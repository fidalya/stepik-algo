import assert from "assert";
import { main, knapsackWithoutRep } from './knapsack_without_rep_su.js'


describe('count search', function () {
    describe('#main()', function () {
        it('test for platform input parameters', function() {
            let data = '10 3\n' +
                '1 4 8';
            assert.equal(main(data), 9);
        });
    });

    describe('#knapsackWithoutRep()', function () {
        it('should return a large weight of gold can be carried in a backpack without repetition', function() {
            assert.equal(knapsackWithoutRep(10, [6, 3, 4, 2], [30, 14, 16, 9]), 46);
        });

        it('should return a large weight of gold can be carried in a backpack', function() {
            assert.equal(knapsackWithoutRep(10, [1, 4, 8], [1, 4, 8]), 9);
        });
    });
});
