/// Class Expressions

// Unnamed
class childClass extends class { doSomething() { return 'no' } } {
    constructor(){
        super();
    }
}

let child = new childClass();
console.log(child.doSomething());

// Named
let parentClass = class { doSomethingElse() { return 'maybe' } };

class babyClass extends parentClass {
    constructor() {
        super();
    }
}

let baby = new babyClass();
console.log(baby.doSomethingElse());


/// User Defined Type Guards

//if (typeof x === "String") { 
//    ///Do Something fun here! 
//}

class Car {
    name: string;
}
interface SportsCar extends Car {
    revEngine();
}

function isSportsCar(a: Car): a is SportsCar {
    return a.name === 'Tesla';
}

var x: Car;

if (isSportsCar(x)) {
    x.revEngine(); // OK, x is SportsCar in this block
}

/// Intersection Types
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
  for (let id in first) {
        result[id] = first[id];
    }

    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}

var extended = extend({ a: 'answer to everything' }, { b: 42 });
console.log(extended.a); // works
console.log(extended.b); // works 

/// Abstract Classes
abstract class myAbstract{
    fiz(): number { return this.bang(); }
    abstract bang(): number;
}

//var a = new myAbstract();  // error, Cannot create an instance of the abstract class 'myAbstract'

class myConcrete extends myAbstract {
    bang() { return 1; }
}

var b = new b();  // Yay, it worked

/// Generic Type Aliases
type reversOrder<A, B, C> = (c:C, b:B, a:A) => A;
var example: reversOrder<number, string, boolean>;
example(true, 'two', 99);