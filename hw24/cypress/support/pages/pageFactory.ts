import { PAGES } from "../types/types";
import { basketPage } from "./basket_page";
import { homePage } from "./home_page";

export class PageFactory {
    constructor () {}
    static getPage(pageName: PAGES) {
        switch (pageName) {
            case PAGES.HOME:
                return homePage;
            case PAGES.BASKET:
                return basketPage;
            default: 
                return 'Not found'
        }
    }
}