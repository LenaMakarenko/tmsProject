import { PAGES } from "../support/types";
import { basketPage } from "./basket_page";
import { homePage } from "./home_page";
import { itemPage } from "./item_page";
import { searchingResultPage } from "./searching_result_page";

export class PageFactory {
    constructor() {
    }
    static getPage(pageName: PAGES) {
        switch (pageName) {
            case PAGES.HOME:
                return homePage;
            case PAGES.BASKET:
                return basketPage;
            case PAGES.SEARCHING_RESULT:
                return searchingResultPage;
            case PAGES.ITEM:
                return itemPage;
            default:
                throw new Error('Incorrect page name is provided!');
        }

    }
}