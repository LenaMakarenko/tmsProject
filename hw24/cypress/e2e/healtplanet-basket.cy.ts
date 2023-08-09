import { PageFactory } from "../support/pages/pageFactory";
import { PAGES } from "../support/types/types";
import { basketPage, BasketPage} from "../support/pages/basket_page";
import { HomePage } from "../support/pages/home_page";

describe('HealthPlanet Site Tests - BasketPage', () => {
   before(() => {
     cy.intercept("POST", "https://healthplanet.by/bitrix/tools/conversion/ajax_counter.php").as("tracker")
    })
    
    it(`Should check the empty basket`, () => {
        const basketPage = PageFactory.getPage(PAGES.BASKET) as BasketPage
        const homePage = PageFactory.getPage(PAGES.HOME) as HomePage
        cy.viewport(1280, 720)
        homePage.visitPage();
        homePage.navigationBar.clickOnBasket();
        cy.wait('@tracker').then(data => {
        expect(data.response?.statusCode).to.equal(200);
        expect(data.response?.body.length).to.equal(2);
        
        basketPage.getTitleOfEmptyBasket().should('have.text', " В корзине\n нет товаров\n ")
    })
})
})