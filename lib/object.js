exports.pluck	= pluck;

function pluck(keys, obj) {
	var out = {};
	keys.forEach(function(k) {
		if (k in obj) {
			out[k] = obj[k];	
		}
	});
	return out;
}