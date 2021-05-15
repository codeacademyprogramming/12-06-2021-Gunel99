export class Pizza {
    id;
    name;
    price;
    topping;

    constructor(id, name, price, topping) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.topping = topping;
    }
}