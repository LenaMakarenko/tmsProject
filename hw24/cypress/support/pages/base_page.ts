import { NavigationBar } from "./elements/navigation_bar";

export class BasePage {
    protected url!: string;
    
    constructor() {
        this.navigationBar = new NavigationBar();
    }

    public navigationBar: NavigationBar;

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