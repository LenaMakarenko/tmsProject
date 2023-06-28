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

public async selectProductsInCatalogByInnerText(sometext: string): Promise <void> {
    await (await this.driver.findElement(By.xpath(`//div/a[@class='hover-menu__link'][(text()=${sometext})]`))).click();
}

public async writesTextInTheCatalogInputField(textToFind: string): Promise <void> {
    await (await this.driver.findElement(By.css(".search__row  .search__input"))).sendKeys(textToFind);
}

public async clickToTheSearchButton(): Promise <void> {
    await (await this.driver.findElement(By.css("a.search__btn span.hidden-xs"))).click();
}
}