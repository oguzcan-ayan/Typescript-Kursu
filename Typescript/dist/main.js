// import Personal, {Student} from './personal';
import { Personal } from './all';
/* import type {Student} from './personal'; */
console.log(Personal.fullName);
const a = {
    name: 'Oğuzcan',
    surname: 'Ayan',
    class: 12
};
console.log(a);
console.log({
    name: 'Mehmet',
    surname: 'Can',
    class: 10
});
const myObject = {
    name: 'Oğuzcan',
    age: 23,
    city: 'Istanbul'
};
console.log(myObject);
const myObject2 = {
    isOpen: true
};
console.log(myObject2);
const myObject3 = {
    oguzcan: {
        age: 23
    },
    ahmet: {
        age: 30
    },
    mehmet: {
        age: 40
    }
};
console.log(myObject3);
const myObject4 = {
    [Symbol()]: {
        age: 23
    },
    [Symbol()]: {
        age: 30
    }
};
console.log(myObject4);
const myObject5 = {
    5: {
        age: 23
    },
    10: {
        age: 30
    },
};
console.log(myObject5);
