var reduce = require('./functional').reduce;

exports.extend = extend;
function extend(obj, args) {
    obj = obj || {};
    for (var i = 1, l = arguments.length; i < l; ++i) {
        var arg = arguments[i];
        if (arg) {
            Object.keys(arg).forEach(function(k) {
                obj[k] = arg[k];
            });
        }
    }
    return obj;
}

exports.defaults = defaults;
function defaults(obj, defaults) {
    obj = obj || {};
    Object.keys(defaults).forEach(function(d) {
        if (!(d in obj)) {
            obj[d] = defaults[d];
        }
    });
    return obj;
}

exports.set = set;
function set(collection) {
    return reduce(function(s, val) {
        s[val] = true;
        return s;
    }, {}, collection);
}