//Named function
function multiply(x, y) {
    return x * y;
}
//Anonymous function
var multiply2 = function (x, y) {
    return x * y;
};
//Capturing outside variable
var z = 100;
function multiplyWithZ(x, y) {
    return x * y * z;
}
//Named function with Types
function multiplyWithTypes(x, y) {
    return x * y;
}
//Anonymous function with Types
var multiply2WithTypes = function (x, y) {
    return x * y;
};
//Function Type defined
var multiplyTypedFunction = function (x, y) {
    return x * y;
};
// multiplyInferredType has the full function type
var multiplyInferredType = function (x, y) { return x * y; };
// The parameters 'x' and 'y' have the type number
var multiplyInferredType2 = function (x, y) { return x * y; };
// Optional Parameters
function add2Or3Numbers(one, two, three) {
    if (three) {
        return one + two + three;
    }
    else {
        return one + two;
    }
}
// Default Parameters
function add2Or3NumbersWithDefault(one, two, three) {
    if (three === void 0) { three = 0; }
    return one + two + three;
}
// Rest Parameters
function sumAllTheThings() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i - 0] = arguments[_i];
    }
    console.log('sumAllTheThings');
    var results = 0;
    for (var _a = 0; _a < numbers.length; _a++) {
        var num = numbers[_a];
        results += num;
    }
    console.log(results);
    return results;
}
// Typing a function that uses Rest Parameters
var sumAllTheThingsFunction = sumAllTheThings;
// Overloaded Function without types
function overloadedWithOutTypes(letterOrNumber) {
    if (typeof letterOrNumber === 'string') {
        return 'my string was: ' + letterOrNumber;
    }
    else if (typeof letterOrNumber === 'number') {
        return letterOrNumber * letterOrNumber;
    }
}
function overloadedWithTypes(letterOrNumber) {
    if (typeof letterOrNumber === 'string') {
        return 'my string was: ' + letterOrNumber;
    }
    else if (typeof letterOrNumber === 'number') {
        return letterOrNumber * letterOrNumber;
    }
}
// Using a function interface definition
var myFunctionBasedOnMyInterface;
myFunctionBasedOnMyInterface = function (thisWord, thisNumber) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    // TODO: Do something magical with a string, a number and zero or more strings
};
