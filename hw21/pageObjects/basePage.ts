import { WebDriver, until } from "selenium-webdriver";
import { NavigationBar, navigationBar } from "./sections/navigationBar";

export class BasePage {
    protected url!:string;

    public navigationBar: NavigationBar = navigationBar;

    constructor (protected driver: WebDriver) {}

    public async visitPage () {
        await this.driver.get(this.url);
    }

    public async closeWindow() {
        return await this.driver.quit();
    }

    public async getPageTitle() {
        return await this.driver.getTitle();
    }

    public async maximizeWindow() {
     await this.driver.manage().window().maximize();
    }

    public async waitUntilUrlContains(urlText:string) {
        return await this.driver.wait(until.urlContains(urlText))
    }

    public async waitUntilTitleContains(titleText:string) {
        return await this.driver.wait(until.urlContains(titleText))
    }
}