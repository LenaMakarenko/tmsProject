import { ThenableWebDriver, WebElement } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { BASE_URL } from "../utils/constants";
import { By, until, Builder, Capabilities } from "selenium-webdriver";

export class HomePage extends BasePage {
    constructor (driver: ThenableWebDriver) {
super (driver);

this.url = BASE_URL + 'oplata-i-dostavka/';
    }

public async getPaymentAndDeliverySection(): Promise <WebElement> {
    return await this.driver.findElement(By.css("a.main-nav__link[href='/oplata-i-dostavka/']"))
}
}