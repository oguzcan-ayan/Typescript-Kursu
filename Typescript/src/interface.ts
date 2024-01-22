import { Request, Response, Handler } from "express"
import { IncomingMessage } from "node:http";

/* const req : Request = {
    
} */

/* const res : Response = {

} */

/* const handler : Handler = (req, res, next) => {

}
 */
/* type FunctionThatReturnsBoolean = (id : string, password : number) => boolean;

const myFunction : FunctionThatReturnsBoolean = (id, password) => {
    return true;
} */

interface Persons {
    name : string,
    age : number,
    [key : string] : any
}

const abcd : Persons = {
    name : 'Ahmet',
    age : 40,
    qwerty : "djsfkhfjshf"
}


const name : Persons['name'] = 'Ahmet';

interface MyArray{
    [index : number] : string | number;
}

const array : MyArray = {
    0 : "Hello",
    1 : "jhdgsfhs",
    2 : 5
}

const array2 : MyArray = ['Ahmet', 50, "Mehmet"]
/* 
type c = (id : string, myName : boolean) => string;

function MyFunction() : c {
    return function(id, myName){
        return 'Emre';
    }
}

MyFunction()("", true); */

interface IFunction{
    (name : string, counter : number) : void,
    (name : number, counter : boolean) : boolean,
    // (name : boolean, counter : string) : number
}

/* const myFunc : IFunction = (name, counter) => {
    return true;
}

myFunc(); */

/* const myOtherFunction : IFunction = (name, counter) => {
    return true;
}

myOtherFunction(); */


/* const myFunc : IFunction = (name, counter) => {
    
    if(typeof counter === 'number'){

    }
}

myFunc() */

interface IAnotherFunction extends IFunction{
    (age : number, counter : string) : number
}

/* const anotherFunction : IAnotherFunction = () => {

}

anotherFunction(); */


interface MongoResponse{
    _id : string,
    _createdAt : string,
    _updatedAt : string
}

interface BooksResponse extends MongoResponse{
    name : string,
    date : Date
}

/* function getBooks() : BooksResponse{
    
    return {
        _id : '13732754726',
        _createdAt : 'sdjfgdshgfd',
        _updatedAt : 'dshfgdsgfh',
        name : 'Hasan',
        date : new Date()
    }
}

getBooks(); */

export interface IStudent{
    name : string,
    surname : string,
    class : number,

    getStudentInformation() : {
        name : IStudent['name'];
        surname : IStudent['surname'];
        class : IStudent['class'];
    }
}

/* const obj = {
    getStudents() : string {
        return '';
    }
} 
obj.getStudents(); */


/* const obj: IStudent = {
    name : 'Oğuzcan',
    surname : 'Ayan',
    class : 12,
    getStudentInformation() {
        return{
            name : this.name,
            surname : this.surname,
            class : this.class
            }
        }
} 

console.log(obj); */

import { Students, Students2, Students3/* , StudentClass */} from "./class";

const students = new Students();

const students2 = new Students2("Oğuzcan", "Ayan", 23, "Hello, Programming", "Male", "Istanbul");

students2.writeName();

/* console.log(students.name); */

const students3 = new Students3("Ahmet", "Yazici", 40);

students3.writeName();

// const students4 = new StudentClass("Mehmet", "Tarakci", 60, 12);

