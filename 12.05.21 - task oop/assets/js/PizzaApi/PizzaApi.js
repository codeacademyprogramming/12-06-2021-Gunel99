import {HttpClient} from '../HttpClient/HttpClient.js';

class PizzaApi extends HttpClient {
    constructor() {
        super('https://isko88.github.io/apipizza.json');
    }

    getPizzaInfo() {
        return this.get('menu?category=Pizza&orderBy=rank');
    }
}

export const pizzaApi = new PizzaApi();