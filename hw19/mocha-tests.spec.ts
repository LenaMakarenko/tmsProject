import { By, until, Builder, Capabilities } from "selenium-webdriver";
import assert from "assert";
import expect from "chai";

const THIS_BASE_URL = "https://healthplanet.by";
const driver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

describe('UI tests on selenium for healthplanet', async () => {
    before (async() => {
await driver.manage().setTimeouts({implicit: 500000, pageLoad: 300000, script: 1000000
})
await driver.manage().window().maximize();
await driver.manage().deleteAllCookies();
});
it("Should go to 'oplata i dostavka' section in the navigation menu", async () => {
await driver.get(THIS_BASE_URL);
await driver.findElement(By.css("a.main-nav__link[href='/oplata-i-dostavka/']")).click();
await driver.wait(until.urlContains('/oplata-i-dostavka/'));
}).timeout(100000);
it("Should go to the product cart 'tabeks' from the catalog", async () => {
await driver.get(THIS_BASE_URL);
await driver.findElement(By.css(".catalog-menu__toggler > span")).click();
await driver.findElement(By.xpath("/html/body/header/div[4]/div/div/div[2]/a")).click();
await driver.findElement(By.css("a.filter__categories-link:nth-child(3)")).click(); 
await driver.findElement(By.css("div.catalog__cell:nth-child(1) > div:nth-child(1) > a:nth-child(1)")).click();
await driver.wait(until.titleContains("Табекс таблетки"), 3000);
}).timeout(100000)
it("Should check search button ", async () => {
    await driver.get(THIS_BASE_URL);
    await driver.findElement(By.css(".search__row  .search__input")).sendKeys("Ибандронат");
    await driver.findElement(By.css("a.search__btn span.hidden-xs")).click();
    await driver.wait(until.urlContains('/search/?q=ибандронат'));
    await driver.quit()
    }).timeout(1000000);

})






//(async function testQuokkajsSite() {
 //   try {
      //  await driver.manage().window().maximize;
     //   await driver.get(THIS_BASE_URL);
     //   await driver.findElement(By.css("nav a[href='/docs/#getting-started']")).click();
     //   await driver.wait(until.titleContains("Quokka.js: Introduction"), 2000)
       
  //  } catch (err: any) { console.log(err.message) }
 //   finally { await driver.quit();}
//})();