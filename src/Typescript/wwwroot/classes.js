var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// A Simple Class
var Simple = (function () {
    // constructor
    function Simple(startNumber) {
        this.myNumber = startNumber;
    }
    // method
    Simple.prototype.getMyNumber = function () {
        return this.myNumber;
    };
    return Simple;
})();
// New up Simple Class
var simple = new Simple(7);
// A Simple Class with private members
var SimplePrivate = (function () {
    // constructor
    function SimplePrivate(startNumber) {
        this.myNumber = startNumber;
    }
    // method
    SimplePrivate.prototype.getMyNumber = function () {
        return this.myNumber;
    };
    return SimplePrivate;
})();
// A Simple Class with a Static Property
var SimpleStatic = (function () {
    // constructor
    function SimpleStatic(startNumber) {
        this.myNumber = startNumber;
    }
    // method
    SimpleStatic.prototype.multiplyMyNumberByTen = function () {
        return this.myNumber * SimpleStatic.multiplier;
    };
    // static property
    SimpleStatic.multiplier = 10;
    return SimpleStatic;
})();
// A Base Class
var Parent = (function () {
    function Parent(id) {
        this.id = id;
    }
    Parent.prototype.getId = function () {
        return this.id;
    };
    return Parent;
})();
// Child Class with added function
var Child = (function (_super) {
    __extends(Child, _super);
    function Child(id) {
        _super.call(this, id);
    }
    Child.prototype.setId = function (id) {
        this.id = id;
    };
    return Child;
})(Parent);
// Child Class that overrides a Parent class function
var Grandchild = (function (_super) {
    __extends(Grandchild, _super);
    function Grandchild(id) {
        this.idChanged = false;
        _super.call(this, id);
    }
    // Sets the id but requires a user confirm it first
    Grandchild.prototype.setId = function (id) {
        if (confirm('Are you sure you want to change this Id?')) {
            this.idChanged = true;
            _super.prototype.setId.call(this, id);
        }
    };
    return Grandchild;
})(Child);
// No Accessors
var NoAccessor = (function () {
    function NoAccessor() {
    }
    return NoAccessor;
})();
// With Accessors get only
var WithAccessorsGetOnly = (function () {
    function WithAccessorsGetOnly(id) {
        this._id = id;
    }
    Object.defineProperty(WithAccessorsGetOnly.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    return WithAccessorsGetOnly;
})();
// With Accessors get and set
var WithAccessorsGetAndSet = (function () {
    function WithAccessorsGetAndSet() {
    }
    Object.defineProperty(WithAccessorsGetAndSet.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            if (confirm('Are you sure you want to change this Id?')) {
                this._id = id;
            }
        },
        enumerable: true,
        configurable: true
    });
    return WithAccessorsGetAndSet;
})();
