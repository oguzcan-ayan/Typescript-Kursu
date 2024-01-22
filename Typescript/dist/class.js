var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Students_instances, _Students_name, _Students_writeName, _a, _Students2__gender, _Students2__region;
export class Students {
    constructor() {
        _Students_instances.add(this);
        /* static */ _Students_name.set(this, "Ali");
        /* console.log("This class has been created.");
        this.#name; */
    }
}
_Students_name = new WeakMap(), _Students_instances = new WeakSet(), _Students_writeName = function _Students_writeName() {
    /* Students.#name; */
    console.log(__classPrivateFieldGet(this, _Students_name, "f"));
};
export class Students2 {
    constructor(name, surname, age, info, gender, region) {
        _Students2__region.set(this, void 0);
        this._name = name;
        _a._surname = surname;
        _a._age = age;
        this._info = info;
        __classPrivateFieldSet(_a, _a, gender, "f", _Students2__gender);
        __classPrivateFieldSet(this, _Students2__region, region, "f");
    }
    writeName() {
        console.log({
            name: this._name,
            surname: _a._surname,
            age: _a._age,
            info: this._info,
            gender: __classPrivateFieldGet(_a, _a, "f", _Students2__gender),
            region: __classPrivateFieldGet(this, _Students2__region, "f")
        });
    }
}
_a = Students2, _Students2__region = new WeakMap();
_Students2__gender = { value: void 0 };
export class Students3 {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    writeName() {
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
}
 */ 
