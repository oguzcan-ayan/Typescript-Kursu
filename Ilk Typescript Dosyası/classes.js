var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Home = /** @class */ (function () {
    function Home(roomNumber, windowNumber, floor) {
        this._roomNumber = roomNumber;
        this._windowNumber = windowNumber; /* Classes */
        this._floor = floor;
    }
    Home.prototype.eat = function () {
        console.log("The meal was eaten in the " + this._floor + ".floor");
    };
    return Home;
}());
var home = new Home(2, 3, 4);
home.eat();
console.log(home._floor);
console.log(home._roomNumber);
console.log(home._windowNumber);
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return "Hello, Mr." + this._name;
        },
        set: function (fullName) {
            this._name = fullName;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.save = function () {
        console.log("Person has been saved.");
    };
    return Person;
}());
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Client.prototype.makeSale = function () {
        console.log("Sale has been made.");
    };
    return Client;
}(Person));
var Personal = /** @class */ (function (_super) {
    __extends(Personal, _super);
    function Personal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personal.prototype.paySalary = function () {
        this.surname;
        console.log("Salary has been paid.");
    };
    return Personal;
}(Person));
var client = new Client();
client.save();
client.makeSale();
client.name = "Oğuzcan";
console.log(client.name);
var personal = new Personal();
personal.save();
personal.paySalary();
personal.fullName;
