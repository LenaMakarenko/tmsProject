
import { PageFactory } from "../support/pages/pageFactory";
import { PAGES, NAVIGATION_BUTTON_NAME } from "../support/types/types";

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

     
})