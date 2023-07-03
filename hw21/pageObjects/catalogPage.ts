import { WebDriver, WebElement } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { BASE_URL } from "../utils/constants";
import { By, until, Builder, Capabilities } from "selenium-webdriver";
import { driver } from "../config/driver";

export class CatalogPage extends BasePage {
    constructor (driver: WebDriver) {
super (driver);

this.url = `${BASE_URL}catalog/lekarstvennye-i-profilakticheskie-sredstva/`;
    }

public async getSectionWithinByInnerText(sectionText:string): Promise <WebElement> {
    return this.driver.findElement (By.xpath(`//a[@class='filter__categories-link '][text()="${sectionText}"]`));
   }
}

export const catalogPage = new CatalogPage(driver);