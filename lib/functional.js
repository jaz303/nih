var slice = Array.prototype.slice;

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

exports.tap = tap;
function tap(cb, collection) {
    each(cb, collection);
    return collection;
}

exports.all = all;
function all(fn, collection) {
    // TODO: nice implementation
}

exports.any = any;
function any(fn, collection) {
    // TODO: nice implementation
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

exports.pipe = pipe;
function pipe(ops, val) {
    each(function(fn) { val = fn(val); }, ops);
    return val;
}

require('./_decorate')(exports);