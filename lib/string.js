exports.prepend 	= prepend;
exports.append		= append;

function prepend(prefix, str) {
    return prefix + str;
}

function append(suffix, str) {
    return ('' + str) + suffix;
}