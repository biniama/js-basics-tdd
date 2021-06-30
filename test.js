const fib = require("./index");
const { expect } = require("chai");

describe('fib function', () => {
    it('should return 0 for index 0', () => {
        expect(fib(0)).to.equal(0);
    });
    it('should return 1 for index 1', () => {
        expect(fib(1)).to.equal(1);
    })
    it('should return 21 for index 8', () => {
        expect(fib(8)).to.equal(21);
    })
    it('should throw an error for a negative number', () => {
        expect(() => fib(-2)).to.throw('Please insert a positive integer number.')
    })
    it('should throw an error for a string input', () => {
        expect(() => fib('hello')).to.throw('Please insert a positive integer number.');
    })
    it('should throw an error for a floating number input', () => {
        expect(() => fib(3.14)).to.throw('Please insert a positive integer number.');
    })
    // the following test will not terminate since the recursion takes a lot of time.
    // One solution is to use caching.
    // it('should return 100 for index 100', () => {
    //     expect(fib(100)).to.equal(100);
    // })
});