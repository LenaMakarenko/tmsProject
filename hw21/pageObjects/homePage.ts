import { ThenableWebDriver, WebElement } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { BASE_URL } from "../utils/constants";
import { By, until, Builder, Capabilities } from "selenium-webdriver";

export class HomePage extends BasePage {
    constructor (driver: ThenableWebDriver) {
super (driver);

this.url = BASE_URL;
    }

public async goToPaymentAndDeliverySection(): Promise <void> {
    await (await this.driver.findElement(By.css("a.main-nav__link[href='/oplata-i-dostavka/']"))).click();
}

public async clickToTheCatalogButton(): Promise <void> {
    await (await this.driver.findElement(By.css("div.catalog-menu__toggler span"))).click();
}

public async selectMedicinalAndProphylacticProductsInCatalog(): Promise <void> {
    await (await this.driver.findElement(By.css("a.hover-menu__link[href^='/catalog/lekarstvennye-i-']"))).click();
}


}