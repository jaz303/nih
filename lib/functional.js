exports.mapValues   = mapValues;
exports.autoCurry   = autoCurry;
exports.curry       = curry;

var slice = Array.prototype.slice;

function mapValues(fn, obj) {
    var out = {};
    for (var k in obj) {
        out[k] = fn(obj[k]);
    }
    return out;
}

function autoCurry(fn, minArity) {

    minArity = (minArity === undefined) ? fn.length : minArity;

    function makeCurry(args) {
        return function() {

            var r_args;
            if (args.length === 0) {
                r_args = arguments;
            } else {
                r_args = args.concat(slice.call(arguments));
            }

            if (r_args.length >= minArity) {
                return fn.apply(this, r_args);
            } else {
                return makeCurry(
                    (r_args === arguments)
                        ? slice.call(r_args)
                        : r_args
                );
            }

        }
    }

    return makeCurry([]);

}

function curry(fn /* args */) {
    var args = slice.call(arguments, 1);
    return function() {
        return fn.apply(this, args.concat(slice.call(arguments)));
    };
}