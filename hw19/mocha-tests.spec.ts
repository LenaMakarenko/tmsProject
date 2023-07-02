import { By, until, Builder, Capabilities } from "selenium-webdriver";
import { expect } from "chai";
import { rmSync, mkdirSync, writeFileSync } from 'fs'
import { rgbaToHex } from "./helpers";

const THIS_BASE_URL = "https://healthplanet.by";
const URL_FOR_FIRST_TEST = '/oplata-i-dostavka/';
const textToInput = "Ибандронат";
const headerText = `Результаты по запросу «${textToInput}»`;
const screenshotsDir = 'hw19/screenshots/';
const nameToAddToCart = "Нимесил";
const backgroundColor = '#33c562';
const basketLokatorOnMainPage: string = 'svg.symbol.symbol-tool-basket';
const urlItemToAddToCart = `${THIS_BASE_URL}/p/bad-swiss-energy-neyrofors-forte-kapsuly-30/`;

const driver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

describe('UI tests on selenium for healthplanet', async () => {

    before(async () => {
        rmSync(screenshotsDir, { recursive: true, force: true });
        mkdirSync(screenshotsDir, { recursive: true });
        await driver.manage().setTimeouts({ implicit: 500000, pageLoad: 300000, script: 1000000 })
        await driver.manage().window().maximize();
    });

    beforeEach(async () => {
        await driver.get(THIS_BASE_URL);
    })

    afterEach(async () => {
        const date = new Date();
        const screen = await driver.takeScreenshot();
        writeFileSync(
            screenshotsDir + `screenshot_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}.png`,
            screen,
            'base64'
        );
    })

    after(async () => {
        await driver.quit()
    });

    it("1 Should go to 'оплата и доставка' section in the navigation menu", async () => {
        await driver.findElement(By.css("a.main-nav__link[href='/oplata-i-dostavka/']")).click();
        await driver.wait(until.urlContains(URL_FOR_FIRST_TEST));
    });

    it("2 Should go to the item 'табекс' from the catalog", async () => {
        await driver.findElement(By.css("div.catalog-menu__toggler span")).click();
        await driver.findElement(By.css("a.hover-menu__link[href^='/catalog/lekarstvennye-i-']")).click();
        await driver.findElement(By.css("a.filter__categories-link[href^='/catalog/borba-s-vrednymi']")).click();
        await driver.findElement(By.css("a.product-item__link[href^='/p/tabeks']")).click();
        await driver.wait(until.titleContains("Табекс таблетки"), 8000);
    })

    it("3 Should check search input field", async () => {
        await driver.findElement(By.css(".search__row  .search__input")).sendKeys(textToInput);
        await driver.findElement(By.css("a.search__btn span.hidden-xs")).click();
        const text = await driver.findElement(By.xpath("//h1[@class='page-title h2']")).getText();
        expect(text).to.equal(headerText);
    });

    it("4 Should check the icon change 0 to 1 when adding product to empty basket", async () => {
        await driver.findElement(By.css(basketLokatorOnMainPage)).click();
        const emptyCart = await driver.findElement(By.css('h1.basket-page__title')).getText();
        expect(emptyCart).to.contain('нет товаров');
        await driver.navigate().back();
        await driver.navigate().to(urlItemToAddToCart);
        await driver.findElement(By.css("a.buy-panel__buy.product-item__buy")).click();
        await driver.wait(until.elementTextContains(driver.findElement(By.xpath('//span[@class="header-tool__count js-basket-count"]')), '1'));
        await driver.findElement(By.css(basketLokatorOnMainPage)).click();
        const cartContain = await driver.findElement(By.css("div.basket-page__header")).getText();
        expect(cartContain).to.contain("В корзине 1 товар");
    });

    it("5 Should check that the button 'в корзину' changes color when was clicked", async () => {
        await driver
            .findElement(By.className('search__input input js-search__input'))
            .sendKeys(nameToAddToCart)
        await driver.findElement(By.css('a.search__btn span.hidden-xs')).click()
        await driver
            .findElement(
                By.css("div.product-item a[href^='/p/nimesil-gran-d-']")
            )
            .click()
        await driver.findElement(By.css('a.buy-panel__buy')).click()

        await driver.wait(async () => {
            const cssValue = await driver
                .findElement(By.css('a.buy-panel__buy.btn--success'))
                .getCssValue('background-color')

            const regExp = /\(([^)]+)\)/
            const rgbaValues = (regExp.exec(cssValue) as RegExpExecArray)[1]
                .split(', ')
                .map(Number)

            const hexValue = rgbaToHex(
                ...(rgbaValues as [number, number, number, number])
            )

            return hexValue === backgroundColor
        }, 10000)
    })
})