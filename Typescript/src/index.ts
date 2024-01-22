// import fs from 'fs';
// import * as fs from 'fs';

let a = 5;

console.log({a});
console.log("Hello");

let myName: string | number;

/* function change(){
    myName = "cde";
    myName = 50;
} */

function check(){
    if(typeof myName === 'string'){
        
    }

    if(typeof myName === 'number'){
    
    }
}

/* let b = true;
b = !!myName;

console.log(b); */

let c: symbol = Symbol("Hello World");

let d: undefined;

let x: string = "Hi";
let y: number = 12;
let z: boolean = true;
let w: undefined = undefined;
let q: null = null;
let g: symbol = Symbol();

const Person: {
    name: string,
    channel: string,
    info: "info" | "no info" | "not known"
} = {
    name: "Oğuzcan",
    channel: "oguzcanayan",
    info: "not known"
}

Person.info = "info";

let k: "Oğuzcan" | "Ahmet" | "Mehmet" | "Hasan" = "Oğuzcan";

let number: 1 | 2 | 3 | 4 | 5 = 5;

// const input = document.querySelector('#data') as HTMLInputElement;

let number2: any = 10;

let number3 = number2 as number;

const array: string[] = ["Istanbul", "Ankara"];

const array2 = [] as string[];

const array3: (number | string | boolean)[] = ["Izmir", 10, true, false];

const array4: Array<string> = [];

array4.push("Oğuzcan");

console.log(array4);

const array5 = [] as Array<number>;
array5.push(56);

console.log(array5);

const array6: (string | number)[] = [];
array6.push("Ahmet");
array6.push(15);

console.log(array6);

const ab: number | undefined = undefined;
console.log(typeof ab);
console.log(ab);

const myArray: [string, string, number]= ["Oğuzcan", "Ayan", 23];   /* Tuple */

const [fullName, surname, age] = myArray;

function func(): number{    
    return 24;
}

console.log(func());

function func2(): [number, string]{     /* Tuple */
    return [24, "Oğuzcan"] as const;
}

const qwe = func2();

console.log(qwe);

function func3(){

}

const abc = func3();
/* abc. */      /* This is a void variable */

function LogPerson(name: string, surname: string, age: number){

    console.log({name, surname, age});
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

function counterName(name: string, counter: number): void{
    for(let count = 0; count < counter; count++){
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

const obj2: Person = {
    age: 23,
    status: "Hello World"
}

const obj3: Person[] = [
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
]


type Colors = 'red' | 'green' | 'blue';
type CustomColors = 'cyan' | 'magenta';

type number1 = 1 | 2 | 3;
type number2 = 4 | 5 | 6;

type allNumbers = number1 | number2;

const numberArray: allNumbers[] = [1, 2, 3];

type AllColors = Colors | CustomColors;

const myColor: Colors = "blue";

const colorArray: (Colors | CustomColors)[] = ['red', 'green', 'blue', 'cyan', 'magenta']; 

const colorArray2: AllColors[] = ['red', 'green', 'blue', 'cyan', 'magenta']; 

const colorArray3: AllColors[] = ['red']; 

type Person = {
    name?: string, 
    surname?: string,
    age: number,
    status: string
}

type Dog = {
    name: string,
    age: number,
    genius: string
}


/* type DogPerson = Person & Dog;

const personDog: DogPerson = {
    
}
 */


const myMap = new Map();
myMap.set(25, true);

const myMap2 = new Map<string, string>();
myMap2.set("Oğuzcan", "asdjhhgfssfgfsg");

const myMap3 = new Map<string, Person>();
myMap3.set("Ayan", {
    age: 25,
    status: "ewfdshrethhrt",
});

type PersonMap = Map<string, Person>

const myMap4: PersonMap = new Map();

myMap4.set("abc", {
    age: 80,
    status: "dfsnkjlsfkgf"
});

console.log(myMap4);
