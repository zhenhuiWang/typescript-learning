var isDone = false;
var decimal = 6;
var color = 'blue';
var fullName = "Bob Bobbington";
var list = [1, 2, 3];
var list2 = [1, false, 'a'];
var x;
x = ['hello', 10];
console.log(x[0].substr(1));
x[2] = 'world';
console.log(x);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[1];
console.log(c, colorName);
var notSure = 4;
notSure = 'maybe a string';
var unusable = undefined;
function infiniteLoop() {
    while (true) {
    }
}
var someValue = 'this is a string';
var strLength = someValue.length;
console.log(strLength);
