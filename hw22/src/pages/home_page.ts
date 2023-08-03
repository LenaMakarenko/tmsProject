import { baseUrl } from "../support/constants";
import { BasePage } from "./base_page";


export class HomePage extends BasePage {
    constructor() {
      super()  

      this.url = baseUrl; 
      this.pageIdentifier = this.searchButton;
    }

    get searchButton () {
        return $("a.search__btn span.hidden-xs");
    }

    }

export const homePage = new HomePage();