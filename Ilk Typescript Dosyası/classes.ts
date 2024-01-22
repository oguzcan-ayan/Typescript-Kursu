class Home{
    _roomNumber: number;
    _windowNumber: number;
    _floor: number;

    constructor(roomNumber: number, windowNumber: number, floor: number){
        this._roomNumber = roomNumber;
        this._windowNumber = windowNumber;                                     /* Classes */
        this._floor = floor
    }

    eat(){
        console.log("The meal was eaten in the " + this._floor + ".floor");
    }
}

let home = new Home(2, 3, 4);
home.eat();
console.log(home._floor);
console.log(home._roomNumber);
console.log(home._windowNumber);

class Person{
    /* private name: string; */
    private _name: string;
    protected surname: string;
    public fullName: string;

    get name():string{
        return "Hello, Mr." + this._name;
    }

    set name(fullName: string){
        this._name = fullName;
    }

    save(){
        console.log("Person has been saved.");
    }
}

class Client extends Person{
    makeSale(){
        console.log("Sale has been made.");
    }
}

class Personal extends Person{
    paySalary(){
        this.surname;
        console.log("Salary has been paid.");
    }
}

let client = new Client();
client.save();
client.makeSale();
client.name = "Oğuzcan";
console.log(client.name);

let personal = new Personal();
personal.save();
personal.paySalary();
personal.fullName;
