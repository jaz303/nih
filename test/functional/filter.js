var test = require('tape');
var filter = require('../..').filter;

test("filter - array", function(assert) {

    var res = filter(function(item, ix) {
        return item > 5;
    }, [4, 5, 6, 7]);

    assert.deepEqual([6, 7], res);
    assert.end();

});

// test("filter - object with forEach", function(assert) {

//     var o = {
//         filter: function(cb) {
//             cb(4, 0);
//             cb(5, 1);
//             cb(6, 2);
//             cb(7, 3);
//         }
//     };

//     var res = filter(function(item, ix) {
//         return item > 5;
//     }, o);

//     assert.deepEqual(res, {2: 6, 3: 7});
//     assert.end();

// });

test("filter - object", function(assert) {

    var res = filter(function(item, ix) {
        return item > 3;
    }, {a: 2, b: 3, c: 4, d: 5});

    assert.deepEqual({c: 4, d: 5}, res);
    assert.end();

});
