import { By, until, Builder, Capabilities } from "selenium-webdriver";
import assert from "assert";
import expect from "chai";


const THIS_BASE_URL = "https://healthplanet.by";
const driver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

describe('UI tests on selenium for healthplanet', async () => {
    before (async() => {
await driver.manage().window().maximize();
});
it("Should go to 'the payment and shipping' section in the navigation menu", async () => {
await driver.get(THIS_BASE_URL);
await driver.findElement(By.css("a.main-nav__link[href='/oplata-i-dostavka/']")).click();
await driver.wait(until.urlContains('/oplata-i-dostavka/'), 20000);
await driver.quit();
})
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