import { PAGES } from "../utils/types";
import { basketPage } from "./basketPage";
import { homePage } from "./homePage";
import { itemPage } from "./itemPage";
import { searchingResultPage } from "./searchingResultPage";

export class PageFactory {
    constructor() {
    }
    static getPage(pageName: PAGES) {
        switch (pageName) {
            case PAGES.HOME:
                return homePage
            case PAGES.BASKET:
                return basketPage
            case PAGES.SEARCHING_RESULT:
                return searchingResultPage;
            case PAGES.ITEM:
                return itemPage;
            default:
                return homePage

        }

    }
}