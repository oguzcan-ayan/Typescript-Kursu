console.log("Hello, browser");

function Return<T>(param: T): T{
  return param;
}
function Returner<T extends string | boolean | symbol>(param2: T, param3: T): T{
  return param2;
  return param3;
}

const a = Return("Hi" as string);
const b = Return("Hi" as const);
const c = Return(5);


const d = Returner("Hello", "Hi");
const e = Returner(true, false);
// const f = Returner(Symbol(), Symbol());

console.log(a);
console.log(b);
console.log(c);

console.log(d);
console.log(e);
// console.log(f);

function createHeader<T extends object | (string | any)[]>(param4: T){

  const headers = new Headers();

  if(Array.isArray(param4)){
    headers.set(param4[0], param4[1]);
  }
}

/* createHeader([
  ["Content-type", 'application/json']
])
 */

createHeader<{ 'Content-type': string }>({
  'Content-type': 'application/json'
})

/* interface Todo{
  userId: number,
  id: number,
  title: string,
  completed: boolean
} */

/* const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const json = await response.json() as Todo;
console.log(json);

export{}; */

/* const response = await makeFetch<Todo>("https://jsonplaceholder.typicode.com/todos/1");
const timestamped = useTimeStamp(response);

console.log({ timestamped });

console.log({ todo: await response });

async function makeFetch<T extends object | []>(input: RequestInfo, init?: RequestInit) {
    const response = await fetch(input, init);
    return (await response.json()) as T; 

}

function useTimeStamp<T extends object>(obj: T){
  return{
    ...obj,
    createdAt: Date.now()
  }
} */

/* function logger<T = any>(...params: T[]){
  console.log(...params);
}
logger("Hi");
                                                  // These two usage are the same
console.log(); */

// export{};

/* interface Student{
  name: string,
  class: number
}

const myStudent = <Student>{
}
 */

const myArray: [number, string] = [25, 'Oğuzcan'];

const myObject: {
  name: string,
  age: number,

} = {
  name: 'Ahmet',
  age: 25 
}

const myObject2: {
  name: 'Ahmet',
  age: 25,
  information: {
    email: 'something@gmail.com'
  }

} = {
  name: 'Ahmet',
  age: 25,
  information: {
    email: 'something@gmail.com'
  }
}

myObject2.age = 25;

/* const myArray2 = Object.freeze([25, 'Oğuzcan']);

myArray2[0].

const myArray3 = ([25, 'Oğuzcan']) as const;

myArray3[0]. */

// const myArray4 = <const>[25, 'Oğuzcan'];

/* function isExisting<T extends any[] | readonly any[]>(array: T, child: any): [boolean, number]{
  const index = array.findIndex((value) => value === child);

  if(index >= 0){
    return [true, index]
  }
  else{
    return [false, index]
  }
}

const [existing, index] = isExisting(myArray, 25);

console.log([existing, index]); */


/* 
function main(arg: any){
  if(typeof arg === 'object'){

  }
} */

class Person{
  private id: string
 /*  public name: string
  public surname: string */

/*   constructor(id: string, name: string, surname: string){
    this.id = Math.random().toString(),
    this.name = name,
    this.surname = surname
  } */

  constructor(public name: string, public surname: string){
    this.id = Math.random().toString()
  }
    
}

function main(arg: any){
  if(Array.isArray(arg)){
    
  }
  if(isArray(arg)){
    
  }
  if(isArray2(arg)){
    
  }
  if(isArray3(arg)){
    
  }
  if(isArray4(arg)){
    
  }
  if(isArray5(arg)){
    
  }
}

function main2(arg: any){
  if(isPerson(arg)){
    
  }
  if(isPerson2(arg)){
    
  }

}

function isArray(arg: unknown){
  if(arg instanceof Array){
    return true;
  } 

    return false;
}
function isArray2(arg: unknown): boolean{
  if(arg instanceof Array){
    return true;
  } 

    return false;
}
function isArray3(arg: unknown): arg is unknown[]{
  if(arg instanceof Array){
    return true;
  } 

    return false;
}
function isArray4(arg: unknown): arg is any[]{
  if(arg instanceof Array){
    return true;
  } 

    return false;
}

function isArray5(arg: unknown): arg is Person{
  if(arg instanceof Person){
    return true;
  } 

    return false;
}

function isPerson(arg: unknown): arg is any{
  if(arg instanceof Person){
    return true;
  } 

    return false;
}
function isPerson2<T extends () => any>(arg: any): arg is T{
  if(isPerson2(arg)){
    return false
  } 

    return false;
}


/* type c = typeof Person;
type a = c['']; */


const makeObject: {
  name: string,
  channel: string,
  age: number
} = {
  name: 'Oğuzcan',
  channel: 'ayanoguzcan',
  age: 23
};

/* function Functinify<T extends { [key: string]: any }>(obj: T){

  type FunctionObject = {
    // [Key in keyof T]: T[Key]; 
    [Key in keyof T]: ()=> T[Key];
  }
  return obj as FunctionObject;

}

Functinify(makeObject)['age'];

Functinify(makeObject).age();
Functinify(makeObject).channel();
Functinify(makeObject).name(); */

enum Enum{
  Error,
  Success,
  Warning,
  Information
}

console.log(Enum.Success);

if(Enum.Success){
  console.log("It has been done successfully");
}

/* const errors = function makeEnum(
  'Syntax Error',
  'Speech Error', 
  'Runtime Error' 
){

} */

function makeEnum<T extends string>(...keys: T[]){
  type CustomEnum = {
    [Key in T]: number

  };
 
  /*
  return abc as CustomEnum; */

  const obj = Object.keys(keys).reduce((accumulator, currentNumber) => {
    return{
      ...accumulator,
      [keys[Number(currentNumber)]]: currentNumber
    }

  }, {} as CustomEnum);

  return Object.freeze(obj);

};

/* makeEnum(
  'Syntax Error',
  'Speech Error',
  'Runtime Error'
) */

const Errors = makeEnum(
  'Syntax Error',
  'Speech Error',
  'Runtime Error'
)

/* Errors["Runtime Error"];
Errors["Speech Error"];
Errors["Syntax Error"]; */

console.log(Errors);



