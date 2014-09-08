var reduce = require('./functional').reduce;

exports.add = add;
function add(y, x) {
    return x + y;
}

exports.sub = sub;
function sub(y, x) {
    return x - y;
}

exports.mul = mul;
function mul(y, x) {
    return x * y;
}

exports.div = div;
function div(y, x) {
    return x / y;
}

exports.sum = sum;
function sum(collection) {
	return reduce(function(s, val) {
		return s + val;
	}, 0, collection);
}

require('./_decorate')(exports);