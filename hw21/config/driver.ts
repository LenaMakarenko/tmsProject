import {Builder, Capabilities, WebDriver } from "selenium-webdriver";

export const driver: WebDriver = new Builder()
 .withCapabilities(Capabilities.chrome())
 .build();