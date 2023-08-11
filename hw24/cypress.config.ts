import { defineConfig } from "cypress";
import { assetsFolder, baseUrl, defaultTimeout } from "./cypress/support/constants";

export default defineConfig({
  e2e: {
    supportFile: "hw24/cypress/support/index.ts",
    specPattern:"hw24/cypress/e2e/**/*.cy.ts",
    defaultCommandTimeout: defaultTimeout * 2,
    baseUrl,
    video:true,
    downloadsFolder:`${assetsFolder}/downloads`,
    screenshotsFolder: `${assetsFolder}/screenshots`,
    fixturesFolder: "hw24/cypress/fixtures",
    reporter: "spec",
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
