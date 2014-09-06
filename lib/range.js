exports.range = range;
function range(start, end, step) {
	return new Range(start, end, step);
}

function Range(start, end, step) {
	this.start = start;
	this.end = end;
	this.step = (typeof step === void 0)
					? (start < end ? 1 : -1)
					: step;
}

Range.prototype.forEach = function(cb) {
	
	var v = this.start,
		e = this.end,
		s = this.step,
		i = 0;
	
	if (step > 0) {
		while (v < e) { cb(v, i++); v += s; }
	} else {
		while (v > e) { cb(v, i++); v -= s; }
	}

}