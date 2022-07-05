import assert from "assert";
import {huffman_decode_tree} from "./huffman_decode_tree.js";

describe('#huffman_decode_tree()', function () {
    it.skip('1', function() {
        let data = '1 1 \na: 0\n0\n';
        assert.equal(huffman_decode_tree(data), 'a');
    });

    it.skip('2', function() {
        let data = '4 14 \na: 0\nb: 10\nc: 110\nd: 111\n01001100100111\n';
        assert.equal(huffman_decode_tree(data), 'abacabad');
    });

    it.skip('3', function() {
        let data = '19 34\np: 1111011\no: 1111100\nr: 1111101\nc: 1111110\ne: 1111111\nn: 1011\n' +
            'k: 110\n' +
            'v: 11100\n' +
            's: 111010\n' +
            'a: 111011\n' +
            'm: 111100\n' +
            'u: 1111010\n' +
            'f: 00\n' +
            'j: 010\n' +
            'd: 011\n' +
            'g: 1000\n' +
            'h: 1001\n' +
            'b: 10100\n' +
            'l: 10101\n' +
            '1110101110111110110110111110101000110111001100101001001010000101100101101001000110001101100011000110001101100011000110001101100010010111011111101011100110100011110010101110011111101111111001111101010111001111001011101110110010010010001000000100111100111010110101011101111111101010011100101001000001000001001100110011111111011010011010010011010011111010111011111011011011111010100011011100110010100100101000010110010110100100011000110110001100011000110110001100011000110110001001011101111110101110011010001111001010111001111110111111100111110101011100111100101110111011001001001000100000010011110011101011010101110111111110101001110010100100000100000100110011001111111101101001101001001101001111101011101111101101101111101010001101110011001010010010100001011001011010010001100011011000110001100011011000110001100011011000100101110111111010111001101000111100101011100111111011111110011111010101110011110010111011101100100100100010000001001111001110101101010111011111111010100111001010010000010000010011001100111111110110100110100100110100111110101110111110110110111110101000110111001100101001001010000101100101101001000110001101100011000110001101100011000110001101100010010111011111101011100110100011110010101110011111101111111001111101010111001111001011101110110010010010001000000100111100111010110101011101111111101010011100101001000001000001001100110011111111011010011010010011010011\n';
        assert.equal(huffman_decode_tree(data), 'saaddsgkvkjhfbfnfnjjfkfkkfkfkfkkfkfkfkkfhdnuvkgmlkdporjvmnnnfhfggfjdkdlldncbvbgfgfhhhedjdjjdjdsaaddsgkvkjhfbfnfnjjfkfkkfkfkfkkfkfkfkkfhdnuvkgmlkdporjvmnnnfhfggfjdkdlldncbvbgfgfhhhedjdjjdjdsaaddsgkvkjhfbfnfnjjfkfkkfkfkfkkfkfkfkkfhdnuvkgmlkdporjvmnnnfhfggfjdkdlldncbvbgfgfhhhedjdjjdjdsaaddsgkvkjhfbfnfnjjfkfkkfkfkfkkfkfkfkkfhdnuvkgmlkdporjvmnnnfhfggfjdkdlldncbvbgfgfhhhedjdjjdjd'.repeat(30));
    });
});
