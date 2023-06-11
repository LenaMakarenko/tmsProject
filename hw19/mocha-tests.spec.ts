import { By, until, Builder, Capabilities } from "selenium-webdriver";
import assert from "assert";
import expect from "chai";
const THIS_BASE_URL = "https://healthplanet.by";
const driver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

describe("UI tests on selenium for healthplanet.by", () => {
it("should add item to the cart and then delete", () => {

    })
})






(async function testQuokkajsSite() {
    try {
        await driver.manage().window().maximize;
        await driver.get(THIS_BASE_URL);
        await driver.findElement(By.css("nav a[href='/docs/#getting-started']")).click();
        await driver.wait(until.titleContains("Quokka.js: Introduction"), 2000)
       
    } catch (err: any) { console.log(err.message) }
    finally { await driver.quit();}
})();