import * as assert from 'assert';
import { main, calculateMax } from './dynamic.js'

describe('count search', function () {
    describe('#main()', function () {
        it('1', function() {
            let data = '2\n' +
                '1 2';
            assert.equal(main(data), 3);
        });
    });

    describe('#calculateMax()', function () {
        it('1', function() {
            assert.equal(calculateMax( [0, 1, 2]), 3);
        });

        it('2', function() {
            assert.equal(calculateMax( [0, 2, -1]), 1);
        });

        it('3', function() {
            assert.equal(calculateMax( [0, -1, 2, 1]), 3);
        });

        it('4', function() {
            assert.equal(calculateMax( [0, 2, -5, -1, 3]), 4);
        });
    });
});
