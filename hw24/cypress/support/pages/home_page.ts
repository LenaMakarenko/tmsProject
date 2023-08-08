import { BasePage } from "./base_page";

export class HomePage extends BasePage {
    
    constructor() {
        super();
        this.url = "/";
    }

    public visitPage() {
        cy.visit(this.url);
    }
}

export const homePage = new HomePage();