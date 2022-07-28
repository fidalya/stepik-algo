import assert from "assert";
import {fillBackpack, Thing} from "./continuous_backpack.js";

describe('continuous_backpack', function() {
    describe('#fillBackpack() should return the maximum cost of item parts.', function() {
        it('should return sum of first and last', function() {
            let things = [new Thing('60', '20'), new Thing('100', '50'), new Thing('120', '30')];

            assert.strictEqual(fillBackpack(50, things), '180.000');
        });

        it('should return half of thing', function() {
            let things = [new Thing('80', '20')];

            assert.strictEqual(fillBackpack(10, things), '40.000');
        });
    });
});
