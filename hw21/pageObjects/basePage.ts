import { ThenableWebDriver } from "selenium-webdriver";

export class BasePage {
    protected url!:string;

    constructor (private driver: ThenableWebDriver) {}

    public async visitPage () {
        await this.driver.get(this.url);
    }

    public async getPageTitle() {
        return await this.driver.getTitle();
    }
}