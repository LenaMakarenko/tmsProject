import { WebDriver, WebElement } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { BASE_URL } from "../utils/constants";
import { By, until, Builder, Capabilities } from "selenium-webdriver";
import { driver } from "../config/driver";

export class ItemPage extends BasePage {
    constructor(driver: WebDriver) {
        super(driver);
        this.url = `${BASE_URL}/p/bad-swiss-energy-neyrofors-forte-kapsuly-30/`;
    }

    public async getAddInBasketButton(): Promise<WebElement> {
        return this.driver.findElement(By.css("a.buy-panel__buy.product-item__buy"));
    }
}

export const itemPage = new ItemPage(driver);