"use strict";
// import fs from 'fs';
// import * as fs from 'fs';
let a = 5;
console.log({ a });
console.log("Hello");
let myName;
/* function change(){
    myName = "cde";
    myName = 50;
} */
function check() {
    if (typeof myName === 'string') {
    }
    if (typeof myName === 'number') {
    }
}
/* let b = true;
b = !!myName;

console.log(b); */
let c = Symbol("Hello World");
let d;
let x = "Hi";
let y = 12;
let z = true;
let w = undefined;
let q = null;
let g = Symbol();
const Person = {
    name: "Oğuzcan",
    channel: "oguzcanayan",
    info: "not known"
};
Person.info = "info";
let k = "Oğuzcan";
let number = 5;
// const input = document.querySelector('#data') as HTMLInputElement;
let number2 = 10;
let number3 = number2;
const array = ["Istanbul", "Ankara"];
const array2 = [];
const array3 = ["Izmir", 10, true, false];
const array4 = [];
array4.push("Oğuzcan");
console.log(array4);
const array5 = [];
array5.push(56);
console.log(array5);
const array6 = [];
array6.push("Ahmet");
array6.push(15);
console.log(array6);
const ab = undefined;
console.log(typeof ab);
console.log(ab);
const myArray = ["Oğuzcan", "Ayan", 23]; /* Tuple */
const [fullName, surname, age] = myArray;
function func() {
    return 24;
}
console.log(func());
function func2() {
    return [24, "Oğuzcan"];
}
const qwe = func2();
console.log(qwe);
function func3() {
}
const abc = func3();
/* abc. */ /* This is a void variable */
function LogPerson(name, surname, age) {
    console.log({ name, surname, age });
}
LogPerson("Oğuzcan", "Ayan", 20);
/* async function LogPerson2(name: string, surname: string, age: number){
    return 5;
}

LogPerson2().then(v => {

}); */
/* async function LogPerson3(name: string, surname: string, age: number): Promise<number>{
    return new Promise((resolve, reject) => {
        resolve(25);
    });
}
LogPerson3("Oğuzcan", "Ayan", 20); */
/*
async function LogPerson4(parameters: {
    name: string,
    surname: string,
    age: number
}): Promise<number | string>{
    return new Promise((resolve, reject) => {
        resolve(25);
        resolve("Yusuf");
    });
}

LogPerson4({
    name: 'Oğuzcan',
    surname: 'Ayan',
    age: 23
});
 */
function counterName(name, counter) {
    for (let count = 0; count < counter; count++) {
        console.log(name);
    }
}
counterName("Oğuzcan", 5);
/* const obj: {
    name: string,
    surname: string,
    age: number,
    status: string
} = {
    name: "Oğuzcan",
    surname: "Ayan",
    age: 23,
    status: "Hello"
} */
/* type Person = {
    name?: string,
    surname?: string,
    age: number,
    status: string
} */
const obj2 = {
    age: 23,
    status: "Hello World"
};
const obj3 = [
    {
        age: 30,
        status: "Hello World"
    },
    {
        name: "Oğuzcan",
        surname: "Ayan",
        age: 23,
        status: "Hello to everyone"
    }
];
const numberArray = [1, 2, 3];
const myColor = "blue";
const colorArray = ['red', 'green', 'blue', 'cyan', 'magenta'];
const colorArray2 = ['red', 'green', 'blue', 'cyan', 'magenta'];
const colorArray3 = ['red'];
/* type DogPerson = Person & Dog;

const personDog: DogPerson = {
    
}
 */
const myMap = new Map();
myMap.set(25, true);
const myMap2 = new Map();
myMap2.set("Oğuzcan", "asdjhhgfssfgfsg");
const myMap3 = new Map();
myMap3.set("Ayan", {
    age: 25,
    status: "ewfdshrethhrt",
});
const myMap4 = new Map();
myMap4.set("abc", {
    age: 80,
    status: "dfsnkjlsfkgf"
});
console.log(myMap4);
