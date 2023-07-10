import { baseUrl } from "../support/constants";
import { BasePage } from "./base_page";


export class BasketPage extends BasePage {
    constructor() {
      super()  

      this.url = `${baseUrl}order/`;
      this.pageIdentifier = this.pageTitle

      get 
    }
}