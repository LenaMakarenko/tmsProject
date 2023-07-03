import { WebDriver, WebElement } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { BASE_URL } from "../utils/constants";
import { By, until, Builder, Capabilities } from "selenium-webdriver";
import { driver } from "../config/driver";

export class CatalogPageBorbaSVrednymi extends BasePage {
    constructor (driver: WebDriver) {
super (driver);

this.url = `${BASE_URL}catalog/borba-s-vrednymi-privychkami/`;
    }

public async getItemTabeks(): Promise <WebElement> {
    return this.driver.findElement(By.css("a.product-item__link[href^='/p/tabeks']"));
   }
}

export const catalogPageBorbaSVrednymi = new CatalogPageBorbaSVrednymi(driver);