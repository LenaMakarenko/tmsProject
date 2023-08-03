export class NavigationBar {
   
    protected pageIdentifier!: Promise <WebdriverIO.Element>;

    get paymentAndDeliveryButton() {
        return $("a.main-nav__link[href='/oplata-i-dostavka/']");
    }

    get catalogButton() {
        return $("div.catalog-menu.js-class");
    }

    get theCatalogButto() {
        return $("div.catalog-menu.js-class");
    }
 }

 export const navigationBar = new NavigationBar();