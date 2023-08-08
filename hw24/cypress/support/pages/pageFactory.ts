import { PAGES } from "../types/types";
import { basketPage } from "./basket_page";
import { homePage } from "./home_page";
import { itemPage } from "./item_page";

export class PageFactory {
    constructor () {}
    static getPage(pageName: PAGES) {
        switch (pageName) {
            case PAGES.HOME:
                return homePage;
            case PAGES.BASKET:
                return basketPage;
            case PAGES.ITEM:
                return itemPage;
            default: 
                return 'Not found'
        }
    }
}