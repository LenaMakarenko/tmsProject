import { homePage } from "../pageObjects/homePage";
import { catalogPage } from "../pageObjects/catalogPage";
import { navigationBar } from "../pageObjects/sections/navigationBar";
import { catalogPageBorbaSVrednymi } from "../pageObjects/catalogPage2";
import { HomePage } from "../pageObjects/searchingResultsPage";

describe("HealthPlanet Site Tests", () => {

after(async () => {
   await homePage.closeWindow();
})

    it("1 Should go to 'oplata i dostavka' section in the navigation menu", async () => {
await homePage.visitPage();
await homePage.maximizeWindow();
await (await homePage.navigationBar.getPaymentAndDeliveryButton()).click();
await homePage.waitUntilUrlContains('/oplata-i-dostavka/');
    })

    it("2 Should go to the item 'tabeks' from the catalog", async () => {
await homePage.visitPage();
await homePage.maximizeWindow();
await (await homePage.navigationBar.getTheCatalogButton()).click();
await (await homePage.navigationBar.getSectionInCatalogByInnerText('Лекарственные и профилактические средства')).click();
await (await catalogPage.getSectionWithinByInnerText('Борьба c вредными привычками')).click();
await (await catalogPageBorbaSVrednymi.getItemTabeks()).click();
await homePage.waitUntilTitleContains("Табекс таблетки");     
})
})