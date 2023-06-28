import { ThenableWebDriver, WebElement } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { BASE_URL } from "../utils/constants";
import { By, until, Builder, Capabilities } from "selenium-webdriver";

export class HomePage extends BasePage {
    constructor (driver: ThenableWebDriver) {
super (driver);

this.url = BASE_URL + '/catalog/' + "searchtext/";
    }

public async (): Promise <string> {
        return await (await this.driver.findElement (By.xpath())).getText();
    }
}
