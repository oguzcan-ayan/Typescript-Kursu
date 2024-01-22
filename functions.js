function sum(x, y) {
    return x + y;
}
function sum2(x, y) {
    return x + y;
}
var sum3 = function (x, y) {
    return x + y;
};
console.log(sum(2, 3));
console.log(sum(3, 'Istanbul'));
console.log(sum2(2, 4));
console.log(sum3(5, 7));
function sum4(x, y) {
    if (y === void 0) { y = 4; }
    return x + y;
}
console.log(sum4(9));
function sum5(x, y) {
    if (y === void 0) { y = 4; }
    return x + y;
}
console.log(sum4(9, 7));
/* function sum6(x: number, y?: number): number{
     return x + y;
                                                // It's directly gave the error
}
console.log(sum6(3)); */
function sum6(x, y) {
    if (y) {
        return x + y;
    }
    return x;
}
console.log(sum6(3));
function sum7(x, y) {
    if (y) {
        return x + y;
    }
    return x;
}
console.log(sum6(3, 40));
function invite(firstInvited) {
    var others = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        others[_i - 1] = arguments[_i];
    }
    return firstInvited + " " + others.join(" ");
}
console.log(invite("Oğuzcan", "Ahmet", "Mehmet", "Ayşe"));
