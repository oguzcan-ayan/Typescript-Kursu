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
var CreditBase = /** @class */ (function () {
    function CreditBase(something) {
    }
    CreditBase.prototype.save = function () {
        console.log("It has been saved.");
    };
    return CreditBase;
}());
var ConsumerCredit = /** @class */ (function (_super) {
    __extends(ConsumerCredit, _super);
    function ConsumerCredit() {
        return _super.call(this, "Something has been sent according to the Consumer Credit") || this;
    }
    ConsumerCredit.prototype.calculate = function () {
        console.log("It has been calculated according to the Consumer Credit");
    };
    return ConsumerCredit;
}(CreditBase));
var MortgageCredit = /** @class */ (function (_super) {
    __extends(MortgageCredit, _super);
    function MortgageCredit() {
        return _super.call(this, "Something has been sent according to the Mortgage Credit") || this;
    }
    MortgageCredit.prototype.calculate = function () {
        console.log("It has been calculated according to the Mortgage Credit");
    };
    MortgageCredit.prototype.anotherOperation = function () {
        console.log("Another Operation has been done");
    };
    return MortgageCredit;
}(CreditBase));
var consumerCredit = new ConsumerCredit();
consumerCredit.save();
consumerCredit.calculate();
var mortgageCredit = new MortgageCredit();
mortgageCredit.save();
mortgageCredit.calculate();
mortgageCredit.anotherOperation();
var credit;
credit = new ConsumerCredit();
credit = new MortgageCredit();
