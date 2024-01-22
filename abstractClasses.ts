abstract class CreditBase {
    constructor(something: string) {
        
    }

    save(): void{
        console.log("It has been saved.");
    }

    abstract calculate(): void;
}

class ConsumerCredit extends CreditBase{
    constructor(){
        super("Something has been sent according to the Consumer Credit");
    }
    calculate(): void {
        console.log("It has been calculated according to the Consumer Credit");
    }
}

class MortgageCredit extends CreditBase{
    constructor(){
        super("Something has been sent according to the Mortgage Credit");
    }
    calculate(): void {
        console.log("It has been calculated according to the Mortgage Credit");
    }

    anotherOperation(): void{
        console.log("Another Operation has been done");
    }
}

let consumerCredit = new ConsumerCredit();
consumerCredit.save();
consumerCredit.calculate();

let mortgageCredit = new MortgageCredit();
mortgageCredit.save();
mortgageCredit.calculate();
mortgageCredit.anotherOperation();

let credit: CreditBase;
credit = new ConsumerCredit();
credit = new MortgageCredit();
