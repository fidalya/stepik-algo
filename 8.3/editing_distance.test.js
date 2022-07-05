import assert from "assert";
import { main, editDistBU, editDistBUMemoize } from './editing_distance.js'

describe('count search', function () {
    describe('#main()', function () {
        it('1', function() {
            let data = 'ab\n' +
                'ab';
            assert.equal(main(data), 0);
        });

        it.skip('2', function() {
            let data = 'short\n' +
                'ports';
            assert.equal(main(data), 3);
        });

        it('3', function() {
            let data = 'DISTANCE\n' +
                'EDITING';
            assert.equal(main(data), 5);
        });
    });

    describe('#editDistBU()', function () {
        it('1', function () {
            assert.equal(editDistBU(['a', 'b'], ['a', 'b']), 0);
        });
    })

    describe('#editDistBUMemoize()', function () {
        it('1', function() {
            assert.equal(editDistBUMemoize(['a', 'b'], ['a', 'b']), 0);
        });

        it('2', function() {
            assert.equal(editDistBUMemoize(['s', 'h', 'o', 'r', 't'], ['p', 'o', 'r', 't', 's']), 3);
        });

        it('3', function() {
            let ar1 = ['d', 'i', 's', 't', 'a', 'n', 'c', 'e'];
            let ar2 = ['e', 'd', 'i', 't', 'i', 'n', 'g'];
            assert.equal(editDistBUMemoize(ar1,ar2), 5);
        });
    });
});
