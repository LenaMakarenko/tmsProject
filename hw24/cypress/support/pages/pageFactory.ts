import { PAGES } from "../types/types";
import { HomePage, homePage } from "./home_page";

export class PageFactory {
    constructor () {}
    static getPage(pageName: PAGES) {
        switch (pageName) {
            case PAGES.HOME:
                return homePage;
            default: 
                return homePage
        }
    }
}