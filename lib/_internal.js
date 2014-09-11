exports.callback = function(thing) {
	if (typeof thing === 'function') {
		return thing;
	} else {
		return function(obj) { return obj[thing]; }
	}
}