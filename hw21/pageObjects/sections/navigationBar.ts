import { By, WebDriver, WebElement, until } from "selenium-webdriver";
import { driver } from "../../config/driver";

export class NavigationBar {
  constructor(private driver: WebDriver) { }

  public async getPaymentAndDeliveryButton(): Promise<WebElement> {
    return this.driver.findElement(By.css("a.main-nav__link[href='/oplata-i-dostavka/']"));
  }

  public async getTheCatalogButton(): Promise<WebElement> {
    return this.driver.findElement(By.css("div.catalog-menu.js-class"));
  }

  public async getNavigationButtonOfCatalogByInnerText(text: string): Promise<WebElement> {
    return await this.driver.findElement(By.xpath(`//a[@class='main-nav__link '][@title="${text}"]`))
  }

  public async getSearchField(): Promise<WebElement> {
    return this.driver.findElement(By.css(".search__row  .search__input"));
  }

  public async getFindButton(): Promise<WebElement> {
    return this.driver.findElement(By.css("a.search__btn span.hidden-xs"));
  }

  public async getBasketButton(): Promise<WebElement> {
    return this.driver.findElement(By.css("svg.symbol.symbol-tool-basket"));
  }

  public async getNumberOfItemsInBusketLabel(): Promise<WebElement> {
    return this.driver.findElement(By.xpath("//span[@class='header-tool__count js-basket-count']"));
  }

  public async waitForNumberOfItemsInBusketToBe(numberOfItems: string): Promise<WebElement> {
    return await this.driver.wait(until.elementTextContains(await this.getNumberOfItemsInBusketLabel(), numberOfItems));
  }
}

export const navigationBar = new NavigationBar(driver);