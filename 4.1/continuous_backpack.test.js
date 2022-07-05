import assert from "assert";
import {fillBackpack, Thing} from "./continuous_backpack";

describe('continuous_backpack', function() {
    describe('#fillBackpack()', function() {
        it('should return -1 when the value is not present', function() {
            let things = [new Thing('60', '20'), new Thing('100', '50'), new Thing('120', '30')];

            assert.strictEqual(fillBackpack(50, things), '180.000');
        });

        it('should return -1 when the value is not present', function() {
            let things = [new Thing('80', '20')];

            assert.strictEqual(fillBackpack(10, things), '40.000');
        });
    });
});
