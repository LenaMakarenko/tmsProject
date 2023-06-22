import { ThenableWebDriver } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { BASE_URL } from "../utils/constants";

export class HomePage extends BasePage {
    constructor (driver: ThenableWebDriver) {
super (driver);

this.url = BASE_URL;
    }
}