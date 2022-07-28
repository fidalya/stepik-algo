import assert from "assert";
import {huffman} from "./huffman.js";

describe('huffman', function () {
    describe('#huffman() should return', function () {
        it('encoded string; a:0', function() {
            assert.equal(huffman('a'), '0');
        });

        it('encoded string 1', function () {
            assert.equal(huffman('abacabad'), '01001100100111');
        });

        it('encoded string 2', function () {
            assert.equal(huffman('sdkjfhklkjhdkjfhsdvewqweqwxqwaaaaa'), '00111101010111010001111010110000101110111111010101110100011110011110111001100101100001110010000110010000011101101101101101');
        });

        it('encoded string; a:1, b:0', function () {
            assert.equal(huffman('aaaaaaaaaaaaaaaaaaaaaaaaaaab'), '1111111111111111111111111110');
        });
    });
});
