export class Students{
    /* static */ #name = "Ali";
    constructor(){
        /* console.log("This class has been created.");
        this.#name; */
    }
        #writeName() : void{
            /* Students.#name; */
            console.log(this.#name);
        }
}

export class Students2{
    private _name : string;
    static _surname : string;
    private static _age : number;
    _info : string;
    static #_gender : string;
    #_region : string;
    constructor(name : string, surname : string, age : number, info : string, gender : string, region : string){
        this._name = name;
        Students2._surname = surname;
        Students2._age = age;
        this._info = info;
        Students2.#_gender = gender;
        this.#_region = region;
    }
    writeName(){
       console.log({
        name : this._name,
        surname : Students2._surname,
        age : Students2._age,
        info : this._info,
        gender : Students2.#_gender,
        region : this.#_region
       })
    }

}

export class Students3{
    constructor(public name : string, public surname : string, private age : number){
                
    }
    writeName(){
        console.log(this);
    }
    
}

/* export interface StudentInfo{
    name : string,
    surname : string,
    class : number,


   

    getStudentInformation() : {
        name : StudentInfo['name'];
        surname : StudentInfo['surname'];
        class : StudentInfo['class'];
    }
}

export class StudentClass implements StudentInfo{

    constructor(public name : string, ){}
    getStudentInformation() {
        return this;
    }
} */
