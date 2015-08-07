// Greeter Mixin
var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function () {
        return this.message;
    };
    return Greeter;
})();
// TakesBreaks Mixin
var TakesBreaks = (function () {
    function TakesBreaks() {
    }
    TakesBreaks.prototype.startBreak = function () {
        this.onBreak = true;
    };
    TakesBreaks.prototype.endBreak = function () {
        this.onBreak = false;
    };
    return TakesBreaks;
})();
var BreakTakingGreeter = (function () {
    function BreakTakingGreeter() {
        var _this = this;
        // Greeter
        this.message = 'Hello';
        // TakesBreaks
        this.onBreak = false;
        setInterval(function () { return console.log(_this.interact()); }, 500);
    }
    BreakTakingGreeter.prototype.interact = function () {
        if (!this.onBreak) {
            return this.greet();
        }
        return "I'm on Break";
    };
    return BreakTakingGreeter;
})();
applyMixins(BreakTakingGreeter, [Greeter, TakesBreaks]);
var halfTimeWorker = new BreakTakingGreeter();
setInterval(function () { return halfTimeWorker.onBreak ? halfTimeWorker.endBreak() : halfTimeWorker.startBreak(); }, 1000);
////////////////////////////////////////
// In your runtime library somewhere
////////////////////////////////////////
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
//# sourceMappingURL=mixins.js.map