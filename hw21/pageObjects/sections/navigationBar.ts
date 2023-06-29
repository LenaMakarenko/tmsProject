import { By, Key, ThenableWebDriver, WebDriver, WebElement } from "selenium-webdriver";
import { driver } from "../../config/driver";

export class NavigationBar {
    constructor(private driver: WebDriver) {}

  public async getPaymentAndDeliveryButton(): Promise <WebElement> {
    return this.driver.findElement(By.css("a.main-nav__link[href='/oplata-i-dostavka/']"));
  }

  public async getTheCatalogButton(): Promise <WebElement> {
    return this.driver.findElement(By.css("div.catalog-menu__toggler span"));
}

  public async getSectionInCatalogByInnerText(sometext: string): Promise <WebElement> {
    return this.driver.findElement(By.xpath(`//a[@class='hover-menu__link'][text()='${sometext}']`))
}

public async getNavigationButtonByInnerText(text:string): Promise<WebElement> {
   return await this.driver.findElement(By.xpath(`//a[@class='main-nav__link '][@title="${text}"]`))
  }

public async getNavigationButtonOfCatalogByInnerText(text:string): Promise<WebElement> {
    return await this.driver.findElement(By.xpath(`//a[@class='main-nav__link '][@title="${text}"]`))

  //public async searchFor(text:string): Promise<void> {
   // await this.driver.actions()
//(By.xpath(`//div/a[@class='hover-menu__link'][(text()=${sometext})]`));
 // }
  }
}
export const navigationBar = new NavigationBar(driver);