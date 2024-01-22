// import Personal, {Student} from './personal';
import { Personal, Student, job } from './all';
/* import type {Student} from './personal'; */

console.log(Personal.fullName);

const a: Student = {

    name: 'Oğuzcan',
    surname: 'Ayan',
    class: 12
};

console.log(a);

console.log({
    name: 'Mehmet',
    surname: 'Can',
    class: 10
} as Student);


/* type MyObject = Partial<{
    name: string,
    age: number
};

const myObject : MyObject = {

}; */

/* ({
    ['name'] : 'Oğuzcan';
}) */

type MyObject = {
    name: string,
    age: number,
    // [key : string] : number | boolean | string
    [key : string] : any
};

const myObject : MyObject = {
    name: 'Oğuzcan',
    age: 23,
    city : 'Istanbul'
};

console.log(myObject);

const myObject2 : Record<string, number | boolean> = {
    isOpen : true
}

console.log(myObject2);

const myObject3 : Record<string, {age: number}> = {
    
    oguzcan : {
        age : 23
    },
    ahmet : {
        age : 30
    },
    mehmet : {
        age : 40
    }
}

console.log(myObject3);

const myObject4 : Record<symbol, {age: number}> = {
    [Symbol()] : {
        age : 23
    },
    [Symbol()] : {
        age : 30
    }
}

console.log(myObject4);

const myObject5 : Record<number, {age: number}> = {
    5 : {
        age : 23
    },
    10 : {
        age : 30
    },
}

console.log(myObject5);

