interface Product{
    id: number;
    name: string;
    unitPrice: number;
}

class Product2{
    id: number;
    name: string;
    unitPrice: number;
}

function save(product: Product){
    console.log(product.name + " has been saved.");
}

function save2(product2: Product2){
    console.log(product2.name + " has been saved.");
}

save({id: 1, name: "Laptop", unitPrice: 5000});

let product2 = new Product2();
product2.name = "Notebook";

save2(product2);

interface PersonService{
    save();
}

class CustomerService implements PersonService{
    save() {
   
    }
}

