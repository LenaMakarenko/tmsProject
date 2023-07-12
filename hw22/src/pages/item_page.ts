import { baseUrl } from "../support/constants";
import { BasePage } from "./base_page";


export class ItemPage extends BasePage {
    constructor() {
      super()  

      this.url = `${baseUrl}/p/bad-swiss-energy-neyrofors-forte-kapsuly-30/`;
      this.pageIdentifier = this.pageTitle

      get 
    }
}

export const itemPage = new ItemPage();