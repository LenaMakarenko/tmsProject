import { BasePage } from "./base_page";

export class HomePage extends BasePage {
    
    constructor() {
        super();
        this.url = "/";
    }
}

export const homePage = new HomePage();