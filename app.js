/* let message: string = "Hello, World!";
console.log(message); */
/* const h1 = document.createElement('h1');
h1.textContent = message;
document.body.appendChild(h1);
 */
/* let box;
console.log(typeof box);

box = 'kutu';
console.log(typeof box);

box = 50;
console.log(typeof box); */
/* const reversedText = (text: string) => {
    if(typeof text !== 'string'){
        throw new Error("That's a incorrect using.");
    }
    return text.split('').reverse().join('');
}

try{
    console.log(
        reversedText("Oğuzcan")
        // reversedText(14) It cannot be like this because split-reverse-join functions used in string values
    );
}

catch(e){
    console.log(e.message);
} */
/* interface Product{
    id: number,
    name: string,
    price: number,
    test: boolean
}

function getProduct(id: number): Product{
    return{
        id,
        name: 'Product #' + id,
        price: 55,
        test: true
    }
}

function showProductInfo(name: string, price: number){
    return `product = ${name} price = ${price}`
}

const product = getProduct(1);
console.log(
    showProductInfo(product.name, product.price)
);
 */
var fullName = 'Oğuzcan Ayan';
console.log(fullName);
var ACTIVE = true;
var names = ['ahmet', 'mehmet', 'ayşe', 'fatma'];
var user;
user = {
    name: 'Oğuzcan',
    surname: 'Ayan',
    age: 30
};
var multiply;
multiply = function (x, y) { return x * y; };
console.log(multiply(10, 5));
var number = 5;
/* number = 'Oğuzcan'; Typescript will automatically assume type of the value*/
function setCounter(max) {
    if (max === void 0) { max = 100; }
    return max * 2;
}
/* setCounter('Oğuzcan'); It's again cannot be like this*/
var items = [1, 2, 3, null, 'Mehmet'];
items.push('Oğuzcan');
/* items.push(undefined); */
console.log(items);
/* document.addEventListener('click', function(event){
    console.log(event.button);
}); */
/* document.addEventListener('scroll', function(event){
    console.log(event.button);
}) */
var number1 = [1, 2, 3];
var number2 = [1, 2, 3]; /* Other using of let number1: number[] = [1, 2, 3]; */
var array = [1, 'Istanbul']; /* tuple */
array[0];
array[1];
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["black"] = 2] = "black";
    Color[Color["white"] = 3] = "white";
})(Color || (Color = {}));
var color = Color.black;
console.log(color);
var number3 = 5;
number3 = 3;
number3 = 7.4;
var value = 'Ankara'; /* any */
value = 2;
value = {};
var value2 = undefined; /* void */
console.log(value2);
function greeter() {
    console.log("Hello");
}
greeter();
/* undefined vs null */
// undefined
var age1; /* undefined */
/* age1 = 10; */
// null
var Client = /** @class */ (function () {
    function Client() {
    }
    return Client;
}());
console.log(Client);
