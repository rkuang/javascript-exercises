const sumAll = function(n, m) {
    if ((n < 0 || m < 0) ||
            typeof n !== 'number' ||
            typeof m !== 'number') {
        return 'ERROR';
    }

    let lower = Math.min(n, m);
    let upper = Math.max(n, m);
    let sum = 0;
    for (let i=lower; i<=upper; i++) {
        sum += i;
    }
    return sum;
}

module.exports = sumAll
