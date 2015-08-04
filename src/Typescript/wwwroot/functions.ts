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
function multiplyWithTypes(x: number, y: number): number {
    return x * y;
}

//Anonymous function with Types
var multiply2WithTypes = function (x: number, y: number): number {
    return x * y;
};

//Function Type defined
var multiplyTypedFunction: (x: number, y: number) => number =
    function (x: number, y: number): number {
        return x * y;
    };

// multiplyInferredType has the full function type
var multiplyInferredType = function (x: number, y: number): number { return x * y; };

// The parameters 'x' and 'y' have the type number
var multiplyInferredType2: (baseValue: number, increment: number) => number =
    function (x, y) { return x * y; };

// Optional Parameters
function add2Or3Numbers(one: number, two: number, three?: number): number {
    if (three) {
        return one + two + three;
    } else {
        return one + two;
    }
}

// Default Parameters
function add2Or3NumbersWithDefault(one: number, two: number, three = 0): number {
        return one + two + three;
}

// Rest Parameters
function sumAllTheThings(...numbers: number[]): number {
    console.log('sumAllTheThings');
    var results = 0;
    for (var num of numbers) {
        results += num;
    }
    console.log(results);
    return results
}

// Typing a function that uses Rest Parameters
var sumAllTheThingsFunction: (...rest: number[]) => number = sumAllTheThings;

// Overloaded Function without types
function overloadedWithOutTypes(letterOrNumber) :any {
    if (typeof letterOrNumber === 'string') {
        return 'my string was: ' + letterOrNumber;
    }
    else if (typeof letterOrNumber === 'number') {
        return letterOrNumber * letterOrNumber;
    }
}

// Overloaded Function with types
function overloadedWithTypes(letterOrNumber: string): string;
function overloadedWithTypes(letterOrNumber: number): number;
function overloadedWithTypes(letterOrNumber): any {
    if (typeof letterOrNumber === 'string') {
        return 'my string was: ' + letterOrNumber;
    }
    else if (typeof letterOrNumber === 'number') {
        return letterOrNumber * letterOrNumber;
    }
}

// Function Interface definition 
interface myFunctionInterface {
    (word: string, myNumber: number, ...everythingElse: string[]): void;
}

// Using a function interface definition
var myFunctionBasedOnMyInterface: myFunctionInterface;
myFunctionBasedOnMyInterface = function (thisWord, thisNumber, ...rest) {
    // TODO: Do something magical with a string, a number and zero or more strings
};



