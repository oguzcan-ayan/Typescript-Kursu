var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("Hello, browser");
function Return(param) {
    return param;
}
function Returner(param2, param3) {
    return param2;
    return param3;
}
var a = Return("Hi");
var b = Return("Hi");
var c = Return(5);
var d = Returner("Hello", "Hi");
var e = Returner(true, false);
// const f = Returner(Symbol(), Symbol());
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
// console.log(f);
function createHeader(param4) {
    var headers = new Headers();
    if (Array.isArray(param4)) {
        headers.set(param4[0], param4[1]);
    }
}
/* createHeader([
  ["Content-type", 'application/json']
])
 */
createHeader({
    'Content-type': 'application/json'
});
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
var myArray = [25, 'Oğuzcan'];
var myObject = {
    name: 'Ahmet',
    age: 25
};
var myObject2 = {
    name: 'Ahmet',
    age: 25,
    information: {
        email: 'something@gmail.com'
    }
};
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
var Person = /** @class */ (function () {
    /*  public name: string
     public surname: string */
    /*   constructor(id: string, name: string, surname: string){
        this.id = Math.random().toString(),
        this.name = name,
        this.surname = surname
      } */
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.id = Math.random().toString();
    }
    return Person;
}());
function main(arg) {
    if (Array.isArray(arg)) {
    }
    if (isArray(arg)) {
    }
    if (isArray2(arg)) {
    }
    if (isArray3(arg)) {
    }
    if (isArray4(arg)) {
    }
    if (isArray5(arg)) {
    }
}
function main2(arg) {
    if (isPerson(arg)) {
    }
    if (isPerson2(arg)) {
    }
}
function isArray(arg) {
    if (arg instanceof Array) {
        return true;
    }
    return false;
}
function isArray2(arg) {
    if (arg instanceof Array) {
        return true;
    }
    return false;
}
function isArray3(arg) {
    if (arg instanceof Array) {
        return true;
    }
    return false;
}
function isArray4(arg) {
    if (arg instanceof Array) {
        return true;
    }
    return false;
}
function isArray5(arg) {
    if (arg instanceof Person) {
        return true;
    }
    return false;
}
function isPerson(arg) {
    if (arg instanceof Person) {
        return true;
    }
    return false;
}
function isPerson2(arg) {
    if (isPerson2(arg)) {
        return false;
    }
    return false;
}
/* type c = typeof Person;
type a = c['']; */
var makeObject = {
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
var Enum;
(function (Enum) {
    Enum[Enum["Error"] = 0] = "Error";
    Enum[Enum["Success"] = 1] = "Success";
    Enum[Enum["Warning"] = 2] = "Warning";
    Enum[Enum["Information"] = 3] = "Information";
})(Enum || (Enum = {}));
console.log(Enum.Success);
if (Enum.Success) {
    console.log("It has been done successfully");
}
/* const errors = function makeEnum(
  'Syntax Error',
  'Speech Error',
  'Runtime Error'
){

} */
function makeEnum() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    /*
    return abc as CustomEnum; */
    var obj = Object.keys(keys).reduce(function (accumulator, currentNumber) {
        var _a;
        return __assign(__assign({}, accumulator), (_a = {}, _a[keys[Number(currentNumber)]] = currentNumber, _a));
    }, {});
    return Object.freeze(obj);
}
;
/* makeEnum(
  'Syntax Error',
  'Speech Error',
  'Runtime Error'
) */
var Errors = makeEnum('Syntax Error', 'Speech Error', 'Runtime Error');
/* Errors["Runtime Error"];
Errors["Speech Error"];
Errors["Syntax Error"]; */
console.log(Errors);
