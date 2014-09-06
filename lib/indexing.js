var reduce = require('./functional').reduce;

exports.pluck = pluck;
function pluck(keys, obj) {
    return reduce(function(out, k) {
        out[k] = obj[k];
        return out;
    }, {});
}

exports.prop = prop;
function prop(prop, obj) {
    return obj[prop];
}

require('./_decorate')(exports);