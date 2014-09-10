module.exports = Array.isArray || function(thing) {
    return Object.prototype.toString.call(thing) === '[object Array]';
};