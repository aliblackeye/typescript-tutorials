var a = 5;
var b = "Ali";
var c = true;
var d;
var f = [];
var e;
var g = [1, "Ali", true];
var h = [1, 2, 3];
var i = ["Ali", 5, false];
// ! TYPE ASSERTIONS
var message;
message = "Hello World";
var count = message.length;
var length = message.length;
// ? FUNCTIONS
function getAverage(a, b, c) {
    var total = a + b;
    var count = 2;
    if (typeof c !== "undefined") {
        total += c;
        count++;
    }
    var average = total / count;
    return "The average is " + average;
}
var getAverage2 = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var total = 0;
    var count = 0;
    for (var i_1 = 0; i_1 < a.length; i_1++) {
        total += a[i_1];
        count++;
    }
    var average = total / count;
    return "The average is " + average;
};
var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X: ".concat(point.x, " Y: S").concat(point.y, " konumuna gidiyor."));
    };
    return Taxi;
}());
