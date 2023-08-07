import { BasePage } from "./base_page";
import { NavigationBar } from "./elements/navigation_bar";

export class HomePage extends BasePage {
    
    constructor() {
        super();
        this.url = "/";
    }

    public visitPage() {
        cy.visit(this.url);
    }

    public getPageTitle () {
        return cy.title();
    }
    public waitForTitleToInclude (title:string) {
        this.getPageTitle().should("include", title);
    }

}

export const homePage = new HomePage();