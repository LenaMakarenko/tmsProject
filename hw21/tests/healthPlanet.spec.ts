import { homePage } from "../pageObjects/homePage";
//import { catalogPage } from "../pageObjects/catalogPage";
import { expect } from "chai";
//import { navigationBar } from "../pageObjects/sections/navigationBar";
//import { catalogPageBorbaSVrednymi } from "../pageObjects/catalogPage2";
import { searchingResultPage } from "../pageObjects/searchingResultsPage";

const numberOfItemsInBasket = 1;
const textToInput = "Ибандронат";
const headerText = `Результаты по запросу «${textToInput}»`;

describe("HealthPlanet Site Tests", () => {

after(async () => {
   await homePage.closeWindow();
})

    it("1 Should go to 'оплата и доставка' section in the navigation menu", async () => {
await homePage.visitPage();
await homePage.maximizeWindow();
await (await homePage.navigationBar.getPaymentAndDeliveryButton()).click();
await homePage.waitUntilUrlContains('/oplata-i-dostavka/');
    })

    //it("2 Should go to the item 'табекс' from the catalog", async () => {
//await homePage.visitPage();
//await homePage.maximizeWindow();
//await (await homePage.navigationBar.getTheCatalogButton()).click();
//await (await homePage.navigationBar.getSectionInCatalogByInnerText('Лекарственные и профилактические средства')).click();
//await (await catalogPage.getSectionWithinByInnerText('Борьба c вредными привычками')).click();
//await (await catalogPageBorbaSVrednymi.getItemTabeks()).click();
//await homePage.waitUntilTitleContains("Табекс таблетки");     
//})

   it("2 Should check that the catalog button opens correctly", async () => {
    await homePage.visitPage();
    await (await homePage.navigationBar.getTheCatalogButton()).click();
    const pressedCatalogButton = await homePage.navigationBar.getTheCatalogButton();
    expect (await pressedCatalogButton.getAttribute('class')).to.include('open-catalog');
   });

   it("3 Should check search input field", async () => {
    await homePage.visitPage();
    await (await homePage.navigationBar.getSearchField()).sendKeys(textToInput);
    await (await homePage.navigationBar.getFindButton()).click();
    const text = await (await searchingResultPage.getHeader()).getText();
    expect(text).to.equal(headerText);
});
    
   it(`3 Should check the icon change 0 to ${numberOfItemsInBasket} when adding product to empty basket`, async () => {
    
   });

   // it("5 Should check that the button 'в корзину' changes color when was clicked", async () => {
        
  //  })
})