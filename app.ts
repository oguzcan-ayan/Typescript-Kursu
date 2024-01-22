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

let fullName: string = 'Oğuzcan Ayan';
console.log(fullName);

const ACTIVE: boolean = true;

const names: string[] = ['ahmet', 'mehmet', 'ayşe', 'fatma'];

let user: {
    name: string,
    surname: string,
    age: number
}

user = {
    name: 'Oğuzcan',
    surname: 'Ayan',
    age: 30
}

let multiply: (x: number, y: number) => number; 

multiply = (x, y) => x * y;

console.log(multiply(10, 5));

let number = 5;

/* number = 'Oğuzcan'; Typescript will automatically assume type of the value*/

function setCounter(max = 100){
    return max * 2;
}
/* setCounter('Oğuzcan'); It's again cannot be like this*/

let items = [1, 2, 3, null, 'Mehmet'];

items.push('Oğuzcan');
/* items.push(undefined); */

console.log(items);

/* document.addEventListener('click', function(event){
    console.log(event.button);
}); */

/* document.addEventListener('scroll', function(event){
    console.log(event.button);
}) */

let number1: number[] = [1, 2, 3];
let number2: Array<number> = [1, 2, 3];     /* Other using of let number1: number[] = [1, 2, 3]; */

let array: [number, string] = [1, 'Istanbul'];       /* tuple */
array[0];
array[1];

enum Color{
    red = 1,
    black,          /* enum */
    white
}

let color: Color = Color.black; 
console.log(color);

let number3: number = 5;
number3 = 3;
number3 = 7.4;

let value: any = 'Ankara';      /* any */
value = 2;
value = {};

let value2: void = undefined;   /* void */
console.log(value2);

function greeter(): void{
    console.log("Hello");
}
greeter();

/* undefined vs null */

// undefined
let age1: number; /* undefined */
/* age1 = 10; */

// null
class Client{
    
}
console.log(Client);
