
import { MAIN_CATALOG_NAVIGATION_ITEM, NAVIGATION_BUTTON_NAME } from "../../types/types";

export class NavigationBar {
    constructor() { }

    public getMainNavigationButtonByInnerText(innerText: NAVIGATION_BUTTON_NAME) {
        return cy.get("a.main-nav__link").contains(innerText);
    }

    public getAllSectionsOfMainNavigationBar() {
        return cy.get("a.main-nav__link");
    }

    public clickOnMainNavigationButtonByInnerText(innerText: NAVIGATION_BUTTON_NAME) {
         this.getMainNavigationButtonByInnerText(innerText).click();
    }

    public getCatalogButton() {
        return cy.get("div.catalog-menu.js-class");
    }

    public clickOnCatalogButton() {
         this.getCatalogButton().click();
    }

    public writeItemInSearchField(text: string) {
        cy.get(".search__row  .search__input").type(text);
    }

    public getFindButton() {
        return cy.get("a.search__btn span.hidden-xs");
    }

    public clickOnBasket() {
         cy.get("svg.symbol.symbol-tool-basket").click();
    }

    public getNavigationBarItemOfCatalogByInnerText(catalogText:MAIN_CATALOG_NAVIGATION_ITEM) {
        return cy.getElementByTitleItem('div', MAIN_CATALOG_NAVIGATION_ITEM.MEDICINES)
    }

}