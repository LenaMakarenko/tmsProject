import { baseUrl } from "../support/constants";
import { BasePage } from "./base_page";


export class HomePage extends BasePage {
    constructor(){
      super()  

      this.url = baseUrl;
    }
}