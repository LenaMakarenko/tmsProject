import { By, Key, ThenableWebDriver, WebDriver, WebElement } from "selenium-webdriver";

export class NavigationBar {
    constructor(private driver: WebDriver) {}

  public async getNavigationButtonByInnerText(text:string): Promise<WebElement> {
   return await this.driver.findElement(By.xpath(`//a[@class='main-nav__link '][@title="${text}"]`))
  }

  public async getNavigationButtonOfCatalogByInnerText(text:string): Promise<WebElement> {
    return await this.driver.findElement(By.xpath(`//a[@class='main-nav__link '][@title="${text}"]`))

  public async searchFor(text:string): Promise<void> {
    await this.driver.actions()

  }
   }
}
export const navigationBar = new NavigationBar(driver);