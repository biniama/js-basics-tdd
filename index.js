module.exports = function fib(n) {

    // n % 1 !== 0 checks if number is float
    if (n < 0 || typeof n !== 'number' || n % 1 !== 0) { throw new Error('Please insert a positive integer number.'); }

    if (n === 0) { return 0; }
    if (n === 1) { return 1; }

    return fib(n - 1) + fib(n - 2);
};
