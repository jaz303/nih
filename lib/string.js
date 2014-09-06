exports.prepend = prepend;
function prepend(prefix, str) {
    return prefix + str;
}

exports.append = append;
function append(suffix, str) {
    return ('' + str) + suffix;
}

require('./_decorate')(exports);