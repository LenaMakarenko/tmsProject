import { textToSearch } from "../../constants";
import { NAVIGATION_BUTTON_NAME } from "../../types/types";

export class NavigationBar {
    constructor () {}

    public getMainNavigationButtonByInnerText(innerText: NAVIGATION_BUTTON_NAME) {
        return cy.get("a.main-nav__link").contains(innerText);
      }

    public clickOnMainNavigationButtonByInnerText(innerText: NAVIGATION_BUTTON_NAME) {
        return this.getMainNavigationButtonByInnerText(innerText).click();
    }

    public getCatalogButton() {
        return cy.get("div.catalog-menu.js-class");
    }

    public clickOnCatalogButton() {
        return this.getCatalogButton().click();
    }

    public writeItemInSearchField(text:string) {
        cy.get(".search__row  .search__input").type(text)
    }

    public getFindButton() {
        return cy.get("a.search__btn span.hidden-xs")
    }
}