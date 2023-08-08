import { PAGES } from "../types/types";
import { HomePage, homePage } from "./home_page";
import { searchingResultPage } from "./searching_result_page";

export class PageFactory {
    constructor () {}
    static getPage(pageName: PAGES) {
        switch (pageName) {
            case PAGES.HOME:
                return homePage;
            case PAGES.SEARCHING_RESULT:
                return searchingResultPage;
            default: 
                return homePage
        }
    }
}