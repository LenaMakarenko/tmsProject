import { Given } from "@cucumber/cucumber";
import { PageFactory } from "../pages/page_factory";
import { PAGES } from "../support/types";

Given(/^The user opens "(.+)" page via link $/, async (pageName: PAGES) => {
    await PageFactory.getPage(pageName).visit();
})