exports.attr = attr;
function attr(attr, el) {
    return el.getAttribute(attr);
}

require('./_decorate')(exports);