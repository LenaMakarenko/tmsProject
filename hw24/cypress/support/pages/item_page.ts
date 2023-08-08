import { BasePage } from "./base_page";

export class ItemPage extends BasePage {
    
    constructor() {
        super();
        this.url = "/p/bad-swiss-energy-neyrofors-forte-kapsuly-30/";
    }

    public visitPage() {
        cy.visit(this.url);
    }
    
    public getAddInBasketButton () {
        return cy.get("a.buy-panel__buy.product-item__buy")
    }

    public clickAddInBasketButton () {
        return this.getAddInBasketButton().click()
    }

}

export const itemPage = new ItemPage();