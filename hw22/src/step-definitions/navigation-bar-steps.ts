import { Then, When, Given } from "@cucumber/cucumber";
import { homePage } from "../pages/home_page";
import { navigationBar } from "../pages/sections/navigation_bar";
import { PageFactory } from "../pages/page_factory";
import { PAGES } from "../support/types";

Given (/^And click 'оплата и доставка' button in the navigation bar$/, async () => {
    await (await navigationBar.paymentAndDeliveryButton).click()
})

Then (/^The user sees that the url has changed and contains "/oplata-i-dostavka/"$/, async () => {
    
})
