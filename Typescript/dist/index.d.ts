declare let a: number;
declare let myName: string | number;
declare function check(): void;
declare let c: symbol;
declare let d: undefined;
declare let x: string;
declare let y: number;
declare let z: boolean;
declare let w: undefined;
declare let q: null;
declare let g: symbol;
declare const Person: {
    name: string;
    channel: string;
    info: "info" | "no info" | "not known";
};
declare let k: "Oğuzcan" | "Ahmet" | "Mehmet" | "Hasan";
declare let number: 1 | 2 | 3 | 4 | 5;
declare let number2: any;
declare let number3: number;
declare const array: string[];
declare const array2: string[];
declare const array3: (number | string | boolean)[];
declare const array4: Array<string>;
declare const array5: number[];
declare const array6: (string | number)[];
declare const ab: number | undefined;
declare const myArray: [string, string, number];
declare const fullName: string, surname: string, age: number;
declare function func(): number;
declare function func2(): [number, string];
declare const qwe: [number, string];
declare function func3(): void;
declare const abc: void;
declare function LogPerson(name: string, surname: string, age: number): void;
declare function counterName(name: string, counter: number): void;
declare const obj2: Person;
declare const obj3: Person[];
type Colors = 'red' | 'green' | 'blue';
type CustomColors = 'cyan' | 'magenta';
type number1 = 1 | 2 | 3;
type number2 = 4 | 5 | 6;
type allNumbers = number1 | number2;
declare const numberArray: allNumbers[];
type AllColors = Colors | CustomColors;
declare const myColor: Colors;
declare const colorArray: (Colors | CustomColors)[];
declare const colorArray2: AllColors[];
declare const colorArray3: AllColors[];
type Person = {
    name?: string;
    surname?: string;
    age: number;
    status: string;
};
type Dog = {
    name: string;
    age: number;
    genius: string;
};
declare const myMap: Map<any, any>;
declare const myMap2: Map<string, string>;
declare const myMap3: Map<string, Person>;
type PersonMap = Map<string, Person>;
declare const myMap4: PersonMap;
