function value(x: number): number{
    return x;
}

let number = value(5);
console.log(number);

function value2(x: string): string{
    return x;
}

let number2 = value2("Istanbul");
console.log(number2);

function value3<T>(x: T): T{
    return x;
}

let number3 = value3<number>(15);
let city3 = value3<string>("Ankara");

console.log(number3);
console.log(city3);

class GenericClass<T>{
    variable: T;
    generic(g: T): T{
        return g;
    }
}

let classes = new GenericClass<number>();
classes.variable = 80;
let generic = classes.generic(10);

console.log(classes.variable);
console.log(generic);

let classes2 = new GenericClass<string>();
classes2.variable = "Samsun";
let generic2 = classes2.generic("Izmir");

console.log(classes2.variable);
console.log(generic2);
