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

}