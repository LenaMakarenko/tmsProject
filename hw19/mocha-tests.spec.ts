import { By, until, Builder, Capabilities } from "selenium-webdriver";
import {expect} from "chai";

const THIS_BASE_URL = "https://healthplanet.by";
const URL_FOR_FIRST_TEST = '/oplata-i-dostavka/';
const driver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

describe('UI tests on selenium for healthplanet', async () => {
    before (async() => {
await driver.manage().setTimeouts({implicit: 500000, pageLoad: 300000, script: 1000000})
await driver.manage().window().maximize();
});
    after (async() => {
await driver.quit()
    });

it("1 Should go to 'oplata i dostavka' section in the navigation menu", async () => {
await driver.get(THIS_BASE_URL);
await driver.findElement(By.css("a.main-nav__link[href='/oplata-i-dostavka/']")).click();
await driver.wait(until.urlContains(URL_FOR_FIRST_TEST));
}).timeout(100000);

it("2 Should go to the product cart 'tabeks' from the catalog", async () => {
await driver.get(THIS_BASE_URL);
await driver.findElement(By.css("div.catalog-menu__toggler span")).click();
await driver.findElement(By.css("a.hover-menu__link[href^='/catalog/lekarstvennye-i-']")).click();
await driver.findElement(By.css("a.filter__categories-link[href^='/catalog/borba-s-vrednymi']")).click(); 
await driver.findElement(By.css("a.product-item__link[href^='/p/tabeks']")).click();
await driver.wait(until.titleContains("Табекс таблетки"), 8000);
}).timeout(30000)

it("3 Should check search input field", async () => {
    await driver.get(THIS_BASE_URL);
    await driver.findElement(By.css(".search__row  .search__input")).sendKeys("Ибандронат");
    await driver.findElement(By.css("a.search__btn span.hidden-xs")).click();
    const text = await driver.findElement(By.xpath("//h1[@class='page-title h2']")).getText();
    expect(text).to.equal('Результаты по запросу «Ибандронат»');
    }).timeout(50000);

it("4 Should check 'nashi apteki' button", async () => {
    await driver.get(THIS_BASE_URL);
    await driver.findElement(By.css("a.main-nav__link[href='/map/']")).click();
    const title = await driver.getTitle();
    expect(title).to.equal('География сети аптек "Планета Здоровья"')
}).timeout(100000);

it("5 Should check if the 'voyti'button is active", async () => {
    await driver.get(THIS_BASE_URL);
    const checker = await driver.findElement(By.css("svg.symbol.symbol-tool-user")).isEnabled();
    expect(checker).to.equal(true)
            }).timeout(100000);
})