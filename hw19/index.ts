import { By, until, Builder, Capabilities } from "selenium-webdriver";

const THIS_BASE_URL = "https://tabletka.by/";
const driver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

(async function testTabletkaBy() {
    try {
        await driver.manage().window().maximize;
        await driver.get(THIS_BASE_URL);
        await driver.findElement(By.css("div[class='bttn bottom-notice-bttn allow-btn']")).click();
        await driver.findElement(By.css("nav a[href='/bikes/']")).click();
        await driver.wait(until.titleContains(" "), 2000)
       
    } catch (err: any) { console.log(err.message) }
    finally { await driver.quit();}
})();