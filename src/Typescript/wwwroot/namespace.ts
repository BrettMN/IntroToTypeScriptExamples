namespace Colors {
    export namespace Warm {
        export class Red { }
        export class Yellow { }
    }
    export namespace Cold {
        export class Blue { }
    }
}

import colors = Colors;
var red0 = new colors.Warm.Red();

import warmColors = Colors.Warm;
var red1 = new warmColors.Red(); // Just like calling 'new Colors.Warm.Red()'