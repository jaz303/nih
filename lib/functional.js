var slice = Array.prototype.slice;

var isArray = require('./_isArray');

exports.each = each;
function each(cb, list) {
    if (list.forEach) {
        list.forEach(cb);
    } else if (typeof list === 'object') {
        for (var k in list) {
            cb(list[k], k);
        }
    }
}

exports.reduce = reduce;
function reduce(cb, initial, collection) {
    var value = initial;
    each(function(item, ix) {
        value = cb(value, item, ix);
    }, collection);
    return value;
}

exports.map = map;
function map(cb, collection) {
    if (collection.map) {
        return collection.map(cb);
    } else if (collection && typeof collection === 'object') {
        var out = {};
        for (var k in collection) {
            out[k] = cb(collection[k], k);
        }
        return out;
    }
}

exports.map_a = map_a;
function map_a(cb, collection) {
    if (isArray(collection)) {
        return collection.map(cb);
    } else {
        var out = [];
        each(function(value, ix) {
            out.push(cb(value, ix));
        }, collection);
        return out;
    }
}

exports.filter = filter;
function filter(cb, collection) {
    if (collection.filter) {
        return collection.filter(cb);
    } else {
        var out = {};
        for (var k in collection) {
            var val = collection[k];
            if (cb(val, k)) {
                out[k] = val;
            }
        }
        return out;
    }
}

exports.filter_a = filter_a;
function filter_a(cb, collection) {
    if (isArray(collection)) {
        return collection.filter(cb);
    } else {
        var out = [];
        each(function(value, ix) {
            if (cb(value, ix)) {
                out.push(value);
            }
        }, collection);
        return out;
    }
}

exports.tap = tap;
function tap(cb, collection) {
    each(cb, collection);
    return collection;
}

exports.all = all;
function all(fn, collection) {
    if (isArray(collection)) {
        for (var i = 0, len = collection.length; i < len; ++i) {
            if (!fn(collection[i], i)) {
                return false;
            }
        }
        return true;
    } else if (collection.forEach) {
        var ok = true;
        collection.forEach(function(item, ix) {
            if (!fn(item, ix)) {
                ok = false;
            }
        });
        return ok;
    } else {
        for (var k in collection) {
            if (!fn(collection[k], k)) {
                return false;
            }
        }
        return true;
    }
}

exports.any = any;
function any(fn, collection) {
    if (isArray(collection)) {
        for (var i = 0, len = collection.length; i < len; ++i) {
            if (fn(collection[i], i)) {
                return true;
            }
        }
        return false;
    } else if (collection.forEach) {
        var ok = false;
        collection.forEach(function(item, ix) {
            if (fn(item, ix)) {
                ok = true;
            }
        });
        return ok;
    } else {
        for (var k in collection) {
            if (fn(collection[k], k)) {
                return true;
            }
        }
        return false;
    }
}

exports.assoc = assoc;
function assoc(fn, collection) {
    return reduce(function(dict, item) {
        dict[fn(item)] = item;
        return dict;
    }, {}, collection);
}

exports.assoc_p = assoc_p;
function assoc_p(prop, collection) {
    return assoc(function(obj) { return obj[prop]; }, collection);
}

exports.assoc_m = assoc_m;
function assoc_m(method, collection) {
    return assoc(function(obj) { return obj[method](); }, collection);
}

exports.group = group;
function group(fn, collection) {
    return reduce(function(dict, item) {
        var key = fn(item);
        (dict[key] || (dict[key] = [])).push(item);
        return dict;
    }, {}, collection);
}

exports.group_p = group_p;
function group_p(prop, collection) {
    return group(function(obj) { return obj[prop]; }, collection);
}

exports.group_m = group_m;
function group_m(method, collection) {
    return group(function(obj) { return obj[method](); }, collection);
}

exports.pipe = pipe;
function pipe(ops, val) {
    each(function(fn) { val = fn(val); }, ops);
    return val;
}

exports.values = values;
function values(collection) {
    var out = [];
    each(function(value) {
        out.push(value);
    }, collection);
    return out;
}

require('./_decorate')(exports);