import { textToSearch } from "../support/constants";
import { HomePage, homePage } from "../support/pages/home_page";
import { PageFactory } from "../support/pages/pageFactory";
import { PAGES, NAVIGATION_BUTTON_NAME, MAIN_CATALOG_NAVIGATION_ITEM, HOVER_ITEMS_OF_MEDICINES } from "../support/types/types";
const headerLocator = 'h1.page-title'

describe('HealthPlanet Site Tests - HomePage', () => {
    beforeEach(() => {
        const homePage = PageFactory.getPage(PAGES.HOME) as HomePage
        homePage.visitPage();
    })
    
    it('Should go to payment and delivery section in the navigation menu', () => {
        homePage.navigationBar.clickOnMainNavigationButtonByInnerText(NAVIGATION_BUTTON_NAME.PAYMENT_AND_DELIVERY);
        cy.url().should('include', '/oplata-i-dostavka/')
        homePage.navigationBar.getAllSectionsOfMainNavigationBar().should('have.length', 7)
    })

    it('Should check hover menu of catalog navigation bar items', () => {
        homePage.navigationBar.getNavigationBarItemOfCatalogByTitleText(MAIN_CATALOG_NAVIGATION_ITEM.MEDICINES)
        .parent('li')
        .should("have.attr", "data-class", 'main-menu-hover')
        cy.contains(HOVER_ITEMS_OF_MEDICINES.ANTIBIOTIC).click({force:true})
    })

    it("Should check that the catalog button opens correctly", () => {
        homePage.navigationBar.clickOnCatalogButton();
        homePage.navigationBar.getCatalogButton().should('have.class', 'open-catalog')
    });

    it("Should check search input field with non-existent value", async () => {
        homePage.navigationBar.writeItemInSearchField(textToSearch);
        homePage.navigationBar.getFindButton().click();
        cy.get(headerLocator).should('have.text', `Ничего не найдено по запросу «${textToSearch}»`)
    });
})
