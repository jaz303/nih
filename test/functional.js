var _       = require('..'),
    test    = require('tape');

// test('all', function(a) {

//     a.equal(
//         _.all(function(v) {
//             return v > 5
//         }, [6, 7, 8, 9, 10]),
//         true
//     );

//     a.equal(
//         _.all(function(v) {
//             return v > 5
//         }, [5, 6, 7, 8, 9, 10]),
//         false
//     );

//     a.end();

// });

// test('any', function(a) {

//     a.equal(
//         _.any(function(v) {
//             return v > 5
//         }, [1, 2, 3, 4, 5, 6]),
//         true
//     );

//     a.equal(
//         _.all(function(v) {
//             return v > 5
//         }, [1, 2, 3, 5, 6]),
//         false
//     );

//     a.end();

// });

test('auto curry 1', function(a) {

    function add4(a, b, c, d) {
        return a + b + c + d;
    }

    var curried = _.autoCurry(add4);

    var add3 = curried(1);
    var add2 = add3(2);
    var add1 = add2(3);

    var res = add1(4);

    a.ok(res === 10);

    a.end();

});

test('auto curry 2', function(a) {

    function add4(a, b, c, d) {
        return a + b + c + d;
    }

    var curried = _.autoCurry(add4);

    var add1 = curried(1, 2, 3);
    var res = add1(10);

    a.ok(res === 16);

    a.end();

});

test('auto curry - explicit arity', function(a) {

    function sillyAdd2(a, b, c, d) {
        return a + b;
    }

    var curried = _.autoCurry(sillyAdd2, 2);

    var add1 = curried(10);
    var res = add1(5);

    a.ok(res === 15);

    a.end();

});

test('auto curry - excess args', function(a) {

    function addN(a, b, c) {
        var out = 0;
        for (var i = 0; i < arguments.length; ++i) {
            out += arguments[i];
        }
        return out;
    }

    var curried = _.autoCurry(addN);

    var add2 = curried(10);
    var add1 = add2(9);

    var res = add1(8, 7, 6, 5, 4, 3, 2, 1);

    a.ok(res === 55);

    a.end();

});