import { WebDriver, WebElement } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { BASE_URL } from "../utils/constants";
import { By } from "selenium-webdriver";
import { driver } from "../config/driver";

export class SearchingResultPage extends BasePage {
    constructor(driver: WebDriver) {
        super(driver);
        this.url = `${BASE_URL}search/?q=нимесил`;
    }

    public async getHeader(): Promise<WebElement> {
        return await this.driver.findElement(By.xpath("//h1[@class='page-title h2']"))
    }
}

export const searchingResultPage = new SearchingResultPage(driver);