import { WebDriver, WebElement } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { BASE_URL } from "../utils/constants";
import { By, until } from "selenium-webdriver";
import { driver } from "../config/driver";

export class BasketPage extends BasePage {
    constructor (driver: WebDriver) {
super (driver);
this.url = BASE_URL +"order/";
    }

public async getTitleOfEmtyBasket(): Promise <WebElement> {
    return this.driver.findElement(By.css('h1.basket-page__title'));
}
}

export const basketPage = new BasketPage(driver);