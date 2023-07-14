import { navigationBar, NavigationBar } from "./sections/navigation_bar";

export class BasePage {
    protected url!: string;
    protected pageIdentifier!: Promise <WebdriverIO.Element>;

    public readonly navigationBar: NavigationBar = navigationBar;

    get pageTitle() {
        return browser.getTitle();
    }

    get pageCurrentUrl() {
        return browser.getUrl();
    }

    public async visit() {
        return browser.getUrl();
    }

    public async waitUntilUrlContain() {
        
    }

    public async waitForPage(reverse = false) {
        await (await this.pageIdentifier).waitForDisplayed({reverse});
    }
} 