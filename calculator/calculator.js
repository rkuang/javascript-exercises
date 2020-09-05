function add (a, b) {
	return a+b;
}

function subtract (a, b) {
	return a-b;
}

function sum (array) {
	let sum = 0;
	array.forEach(num => sum+=num);
	return sum;
}

function multiply (array) {
	if (array.length == 0) return 0;
	let product = array[0];
	for (let i=1; i<array.length; i++) {
		product *= array[i];
	}
	return product;
}

function power(a, b) {
	return a**b;
}

function factorial(a) {
	let result = 1;
	for (let i=1; i<=a; i++) result *= i;
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
