// Greeter Mixin
class Greeter {
    message: string;
    greet() {
        return this.message;
    }
}

// TakesBreaks Mixin
class TakesBreaks {
    onBreak: boolean;
    startBreak() {
        this.onBreak = true;
    }
    endBreak() {
        this.onBreak = false;
    }
}

class BreakTakingGreeter implements Greeter, TakesBreaks {
    constructor() {
        setInterval(() => console.log(this.interact()), 500);
    }

    interact() {
        if (!this.onBreak) {
            return this.greet();
        }
        return "I'm on Break";
    }

    // Greeter
    message: string = 'Hello';
    greet: () => string;
    // TakesBreaks
    onBreak: boolean = false;
    startBreak: () => void;
    endBreak: () => void;
}
applyMixins(BreakTakingGreeter, [Greeter, TakesBreaks])

var halfTimeWorker = new BreakTakingGreeter();

setInterval(() => halfTimeWorker.onBreak ? halfTimeWorker.endBreak() : halfTimeWorker.startBreak(), 1000);

////////////////////////////////////////
// In your runtime library somewhere
////////////////////////////////////////

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        })
    });
}