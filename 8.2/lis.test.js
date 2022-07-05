import assert from "assert";
import {main, lisBottomUp, ldsBottomUpNLogN, ldsBottomUp, sizeCondition, multiplicityCondition} from "./lis.js";

describe('count search', function () {
    describe('#main()', function () {
        it('1', function() {
            let data = '4\n' +
                '3 6 7 12';
            assert.equal(main(data), 3);
        });
    });

    describe('#ldsBottomUpNLogN() Decrease', function () {
        it('1', function() {
            let result = ldsBottomUpNLogN([5, 3, 4, 4, 2]);
            assert.equal(result.length, 4);
            assert.deepEqual(result, [1, 3, 4, 5]);
        });

        it('2', function() {
            let result = ldsBottomUpNLogN([1]);
            assert.equal(result.length, 1);
            assert.deepEqual(result, [1]);
        });

        it('3', function() {
            let result = ldsBottomUpNLogN([1, 2]);
            assert.equal(result.length, 1);
            assert.deepEqual(result, [2]);
        });

        it('4', function() {
            let result = ldsBottomUpNLogN([2, 1]);
            assert.equal(result.length, 2);
            assert.deepEqual(result, [1, 2]);
        });

        it('5', function() {
            let result = ldsBottomUpNLogN([1, 1]);
            assert.equal(result.length, 2);
            assert.deepEqual(result, [1, 2]);
        });

        it('6', function() {
            let result = ldsBottomUpNLogN([2, 3, 1, 2, 1, 3, 2, 1, 1, 2]);
            assert.equal(result.length, 5);
            assert.deepEqual(result, [2, 6, 7, 8, 9]);
        });

        it.skip('7', function() {
            let result = ldsBottomUpNLogN([1, 4, 6, 3, 8]);
            assert.equal(result.length, 4);
            assert.deepEqual(result, [1, 2, 3, 5]);
        }, );
    });

    describe('#lisBottomUp() Decrease', function () {
        it('1', function() {
            let result = ldsBottomUp([5, 3, 4, 4, 2]);
            assert.equal(result.length, 4);
            assert.deepEqual(result, [1, 3, 4, 5]);
        });

        it('2', function() {
            let result = ldsBottomUp([1]);
            assert.equal(result.length, 1);
            assert.deepEqual(result, [1]);
        });

        it('3', function() {
            let result = ldsBottomUp([1, 2]);
            assert.equal(result.length, 1);
            assert.deepEqual(result, [2]);
        });

        it('4', function() {
            let result = ldsBottomUp([2, 1]);
            assert.equal(result.length, 2);
            assert.deepEqual(result, [1, 2]);
        });

        it('5', function() {
            let result = ldsBottomUp([1, 1]);
            assert.equal(result.length, 2);
            assert.deepEqual(result, [1, 2]);
        });

        it('6', function() {
            let result = ldsBottomUp([2, 3, 1, 2, 1, 3, 2, 1, 1, 2]);
            assert.equal(result.length, 5);
            assert.deepEqual(result, [2, 6, 7, 8, 9]);
        });
    });

    describe('#lisBottomUp() Multiplicity', function () {
        it('1', function() {
            assert.equal(lisBottomUp([3, 6, 7, 12], multiplicityCondition), 3);
        });
    });

    describe('#lisBottomUp() Size', function () {
        it('1', function() {
            assert.equal(lisBottomUp([7, 2, 1, 3, 8, 4, 9, 1, 2, 6, 5, 9, 3, 8, 1], sizeCondition), 5);
        });

        it('2', function() {
            assert.equal(lisBottomUp([7, 2, 1, 3, 8, 4, 9], sizeCondition), 4);
        });
    });
});
