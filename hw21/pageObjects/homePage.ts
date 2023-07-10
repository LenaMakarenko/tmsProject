import { WebDriver } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { BASE_URL } from "../utils/constants";
import { By, until, Builder, Capabilities } from "selenium-webdriver";
import { driver } from "../config/driver";

export class HomePage extends BasePage {
    constructor(driver: WebDriver) {
        super(driver);
        this.url = BASE_URL;
    }

    public async writeTextInTheCatalogInputField(textToFind: string): Promise<void> {
        await (await this.driver.findElement(By.css(".search__row  .search__input"))).sendKeys(textToFind);
    }

    public async clickOnTheSearchButton(): Promise<void> {
        await (await this.driver.findElement(By.css("a.search__btn span.hidden-xs"))).click();
    }
}

export const homePage = new HomePage(driver);