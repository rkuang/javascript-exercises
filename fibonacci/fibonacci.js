const fibonacci = function(a) {
    if (a < 1) return 'OOPS'
    if (a == 1 || a == 2) return 1;
    return fibonacci(a-1) + fibonacci(a-2);
}

module.exports = fibonacci
