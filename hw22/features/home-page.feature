Feature: Navigation bar

    Scenario: Should go to 'оплата и доставка' section in the navigation bar
         Given The user opens "Home" page via link
         When The user clicks "payment and delivery" button in the navigation bar
         Then The user sees that the url has changed and contains "/oplata-i-dostavka/"
