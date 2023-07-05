import { until, WebDriver, Builder, Capabilities} from "selenium-webdriver";
//import { catalogPage } from "../pageObjects/catalogPage";
import { expect } from "chai";
//import { navigationBar } from "../pageObjects/sections/navigationBar";
//import { catalogPageBorbaSVrednymi } from "../pageObjects/catalogPage2";
import { BasePage } from "../pageObjects/basePage";
import { BASE_URL } from "../utils/constants";
import { PageFactory } from "../pageObjects/pageFactory";
import { PAGES } from "../utils/types";
import { BasketPage } from "../pageObjects/basketPage";
import { SearchingResultPage } from "../pageObjects/searchingResultPage";

const homePage = PageFactory.getPage(PAGES.HOME);
const basketPage = PageFactory.getPage(PAGES.BASKET) as BasketPage;
const searchingResultPage = PageFactory.getPage(PAGES.SEARCHING_RESULT) as SearchingResultPage;
const numberOfItemsInBasket = 1;
const textToInput = "нимесил";
const headerText = `Результаты по запросу «${textToInput}»`;
const urlItemToAddToCart = BASE_URL + "/p/bad-swiss-energy-neyrofors-forte-kapsuly-30/";

describe("HealthPlanet Site Tests", () => {

afterEach(async () => {
await homePage.closeWindow();
   const driver: WebDriver = new Builder()
 .withCapabilities(Capabilities.chrome())
 .build();

 await homePage.resetDriver(driver);
 await basketPage.resetDriver(driver);
 await searchingResultPage.resetDriver(driver);
 await homePage.navigationBar.resetDriver(driver);
});

after(async () => {
   await homePage.closeWindow();
})

    it("1 Should go to 'оплата и доставка' section in the navigation menu", async () => {
    await homePage.visitPage();
    await homePage.maximizeWindow();
    await (await homePage.navigationBar.getPaymentAndDeliveryButton()).click();
    await homePage.waitUntilUrlContains('/oplata-i-dostavka/');
    })

   it("2 Should check that the catalog button opens correctly", async () => {
    await homePage.visitPage();
    await homePage.maximizeWindow();
    await (await homePage.navigationBar.getTheCatalogButton()).click();
    const pressedCatalogButton = await homePage.navigationBar.getTheCatalogButton();
    expect (await pressedCatalogButton.getAttribute('class')).to.include('open-catalog');
   });

   it("3 Should check search input field", async () => {
    await homePage.visitPage();
    await homePage.maximizeWindow();
    await (await homePage.navigationBar.getSearchField()).sendKeys(textToInput);
    await (await homePage.navigationBar.getFindButton()).click();
    const text = await (await searchingResultPage.getHeader()).getText();
    expect(text).to.equal(headerText);
});
    
   it(`4 Should check the icon change 0 to ${numberOfItemsInBasket} when adding product to empty basket`, async () => {
    await homePage.visitPage();
    await homePage.maximizeWindow();
    await (await homePage.navigationBar.getBasketButton()).click();
    const emptyBasket = await (await basketPage.getTitleOfEmtyBasket()).getText();
    expect(emptyBasket).to.contain('нет товаров');


   });

   // it("5 Should check that the button 'в корзину' changes color when was clicked", async () => {
        
  //  })
})