import { ThenableWebDriver, WebElement } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { BASE_URL } from "../utils/constants";
import { By, until, Builder, Capabilities } from "selenium-webdriver";

export class HomePage extends BasePage {
    constructor (driver: ThenableWebDriver) {
super (driver);
this.url = BASE_URL + 'search/?q=' + "searchtext";
    }

public async getPaymentAndDeliverySection(): Promise <string> {
    return await (await this.driver.findElement (By.xpath("//h1[@class='page-title h2']"))).getText();
}
}