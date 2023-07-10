
export class BasePage {
    protected url!: string;
    protected pageIdentifier!: Promise <WebdriverIO.Element>;

    get pageTitle() {
        return browser.getTitle();
    }

    get pageCurrentUrl() {
        return browser.getUrl();
    }

    public async visit() {
        await browser.url(this.url);
    }

    public async waitForPage() {
        await this.pageIdentifier.waitForDisplayed();
    }
} 