var reduce = require('./functional').reduce;

exports.pluck = pluck;
function pluck(keys, obj) {
    return reduce(function(out, v, k) {
        if (keys.indexOf(k) >= 0) {
            out[k] = v; 
        }
        return out;
    }, {}, obj);
}

exports.prop = prop;
function prop(prop, obj) {
    return obj[prop];
}

require('./_decorate')(exports);