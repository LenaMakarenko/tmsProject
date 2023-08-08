import { BasePage } from "./base_page";


export class BasketPage extends BasePage {

    constructor() {
        super();
        this.url = "/order/";
    }

    public visitPage() {
        cy.visit(this.url);
    }

    public getTitleOfEmptyBasket() {
        return cy.get('h1.basket-page__title')
    }
}

export const basketPage = new BasketPage();


