

import { ItemPage } from "../support/pages/item_page";
import { PageFactory } from "../support/pages/pageFactory";
import { PAGES } from "../support/types/types";

const numberOfItemsInBasket = 1;

describe ('HealthPlanet Site Tests - ItemPage',() => {
    it(`Should check the icon change 0 to ${numberOfItemsInBasket} when adding product to basket`, () => {
        const itemPage = PageFactory.getPage(PAGES.ITEM) as ItemPage
        cy.viewport(1280, 720)
        itemPage.visitPage();
        itemPage.navigationBar.getNumberOfItemsInBusketLabel().should('have.value', 0)
        itemPage.clickAddInBasketButton;
        itemPage.navigationBar.getNumberOfItemsInBusketLabel().should('equal', `${numberOfItemsInBasket}`)
        
     });

     
})