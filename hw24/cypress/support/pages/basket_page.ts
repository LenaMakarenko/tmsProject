import { BasePage } from "./base_page";


export class BasketPage extends BasePage {

    constructor() {
        super();
        this.url = "/order/";
    }

    public getTitleOfEmptyBasketElement() {
        return cy.get('h1.basket-page__title')
    }
}

export const basketPage = new BasketPage();


