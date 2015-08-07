var Colors;
(function (Colors) {
    var Warm;
    (function (Warm) {
        var Red = (function () {
            function Red() {
            }
            return Red;
        })();
        Warm.Red = Red;
        var Yellow = (function () {
            function Yellow() {
            }
            return Yellow;
        })();
        Warm.Yellow = Yellow;
    })(Warm = Colors.Warm || (Colors.Warm = {}));
    var Cold;
    (function (Cold) {
        var Blue = (function () {
            function Blue() {
            }
            return Blue;
        })();
        Cold.Blue = Blue;
    })(Cold = Colors.Cold || (Colors.Cold = {}));
})(Colors || (Colors = {}));
var colors = Colors;
var red0 = new colors.Warm.Red();
var warmColors = Colors.Warm;
var red1 = new warmColors.Red(); // Just like calling 'new Colors.Warm.Red()'
//# sourceMappingURL=namespace.js.map