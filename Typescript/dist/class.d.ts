export declare class Students {
    #private;
    constructor();
}
export declare class Students2 {
    #private;
    private _name;
    static _surname: string;
    private static _age;
    _info: string;
    constructor(name: string, surname: string, age: number, info: string, gender: string, region: string);
    writeName(): void;
}
export declare class Students3 {
    name: string;
    surname: string;
    private age;
    constructor(name: string, surname: string, age: number);
    writeName(): void;
}
