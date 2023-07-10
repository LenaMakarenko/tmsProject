export class NavigationBar {
   
    protected pageIdentifier!: Promise <WebdriverIO.Element>;

    get paymentAndDeliveryButton() {
        return $("a.main-nav__link[href='/oplata-i-dostavka/']");
    }

    get theCatalogButton() {
        return $("div.catalog-menu.js-class");
    }

    get theCatalogButton() {
        return $("div.catalog-menu.js-class");
    }


 }