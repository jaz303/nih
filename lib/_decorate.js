var autoCurry = require('./curry').autoCurry;

module.exports = function decorate(obj, keys) {
    (keys || Object.keys(obj)).forEach(function(k) {
        obj[k].c = autoCurry(obj[k]);
    })
}