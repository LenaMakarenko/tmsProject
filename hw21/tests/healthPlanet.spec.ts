import { homePage } from "../pageObjects/homePage"


describe("HealthPlanet Site Tests", () => {
    it("1 Should go to 'oplata i dostavka' section in the navigation menu", async () => {
await homePage.visitPage();
await homePage.maximizeWindow();
    })
})