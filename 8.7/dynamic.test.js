import * as assert from 'assert';
import { main, calculateMax } from './dynamic.js'

describe('count search', function () {
    describe('#main()', function () {
        it('test for platform input parameters', function() {
            let data = '2\n' +
                '1 2';
            assert.equal(main(data), 3);
        });
    });

    describe('#calculateMax()', function () {
        it('might find maximum amount going up one rungs', function() {
            assert.equal(calculateMax( [0, 1, 2]), 3);
        });

        it('should not skip the last rung', function() {
            assert.equal(calculateMax( [0, 2, -1]), 1);
        });

        it('should find the maximum amount even negative labels are available', function() {
            assert.equal(calculateMax( [0, -1, 2, 1]), 3);
        });

        it('should find maximum amount going up one or two rungs', function() {
            assert.equal(calculateMax( [0, 2, -5, -1, 3]), 4);
        });
    });
});
