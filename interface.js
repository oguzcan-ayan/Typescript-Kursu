var Product2 = /** @class */ (function () {
    function Product2() {
    }
    return Product2;
}());
function save(product) {
    console.log(product.name + " has been saved.");
}
function save2(product2) {
    console.log(product2.name + " has been saved.");
}
save({ id: 1, name: "Laptop", unitPrice: 5000 });
var product2 = new Product2();
product2.name = "Notebook";
save2(product2);
var CustomerService = /** @class */ (function () {
    function CustomerService() {
    }
    CustomerService.prototype.save = function () {
    };
    return CustomerService;
}());
