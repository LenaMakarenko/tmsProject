
import { textToSearch } from "../support/constants";
import { PageFactory } from "../support/pages/pageFactory";
import { PAGES, NAVIGATION_BUTTON_NAME } from "../support/types/types";
const headerLocator = 'h1.page-title'

describe ('HealthPlanet Site Tests - HomePage',() => {
    it('Should go to payment and delivery section in the navigation menu', () => {
        const homePage = PageFactory.getPage(PAGES.HOME)
        cy.viewport(1280, 720)
        homePage.visitPage();
        homePage.navigationBar.clickOnMainNavigationButtonByInnerText(NAVIGATION_BUTTON_NAME.PAYMENT_AND_DELIVERY);
        cy.url().should('include', '/oplata-i-dostavka/')
    })

    it("Should check that the catalog button opens correctly", () => {
        const homePage = PageFactory.getPage(PAGES.HOME)
        cy.viewport(1280, 720)
        homePage.visitPage()
        homePage.navigationBar.clickOnCatalogButton();
        homePage.navigationBar.getCatalogButton().should('have.class', 'open-catalog')
     });

     it("Should check search input field with non-existent value", async () => {
        const homePage = PageFactory.getPage(PAGES.HOME)
        cy.viewport(1280, 720)
        homePage.visitPage()
        homePage.navigationBar.writeItemInSearchField(textToSearch);
        homePage.navigationBar.getFindButton().click();
        cy.get(headerLocator).should('have.text', `Ничего не найдено по запросу «${textToSearch}»`)
     });
})