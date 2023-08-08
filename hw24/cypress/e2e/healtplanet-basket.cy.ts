import { PageFactory } from "../support/pages/pageFactory";
import { PAGES } from "../support/types/types";
import { BasketPage, basketPage } from "../support/pages/basket_page";
import { HomePage } from "../support/pages/home_page";

describe ('HealthPlanet Site Tests - BasketPage',() => {
    it(`Should check the empty basket`, () => {
        const basketPage = PageFactory.getPage(PAGES.BASKET) as BasketPage
        const homePage = PageFactory.getPage(PAGES.HOME) as HomePage
        cy.viewport(1280, 720)
        homePage.visitPage();
        homePage.navigationBar.clickOnBasket();
        basketPage.getTitleOfEmptyBasket().should('have.text', " В корзине\n нет товаров\n ")
     });

     
})