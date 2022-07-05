import assert from "assert";
import {huffman} from "./huffman.js";

describe('huffman', function () {
    describe('#huffman()', function () {
        it('should return -1 when the value is not present', function() {
            assert.equal(huffman('a'), '0');
        });

        it('should return -1 when the value is not present', function () {
            assert.equal(huffman('abacabad'), '01001100100111');
        });

        it('should return -1 when the value is not present', function () {
            assert.equal(huffman('sdkjfhklkjhdkjfhsdvewqweqwxqwaaaaa'), '00111101010111010001111010110000101110111111010101110100011110011110111001100101100001110010000110010000011101101101101101');
        });

        it('should return -1 when the value is not present', function () {
            assert.equal(huffman('aaaaaaaaaaaaaaaaaaaaaaaaaaab'), '1111111111111111111111111110');
        });
    });
});
