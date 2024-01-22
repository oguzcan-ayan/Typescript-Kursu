function value(x) {
    return x;
}
var number = value(5);
console.log(number);
function value2(x) {
    return x;
}
var number2 = value2("Istanbul");
console.log(number2);
function value3(x) {
    return x;
}
var number3 = value3(15);
var city3 = value3("Ankara");
console.log(number3);
console.log(city3);
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    GenericClass.prototype.generic = function (g) {
        return g;
    };
    return GenericClass;
}());
var classes = new GenericClass();
classes.variable = 80;
var generic = classes.generic(10);
console.log(classes.variable);
console.log(generic);
var classes2 = new GenericClass();
classes2.variable = "Samsun";
var generic2 = classes2.generic("Izmir");
console.log(classes2.variable);
console.log(generic2);
