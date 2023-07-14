Feature: Main navigation bar

    Scenario: Should go to 'оплата и доставка' section in the main navigation bar
         Given The user opens "Home" page via link
         Given click 'оплата и доставка' button in the navigation bar
         Then The user sees that the url has changed and contains "/oplata-i-dostavka/"
