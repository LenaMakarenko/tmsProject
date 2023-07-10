import { baseUrl, textToInput } from "../support/constants";
import { BasePage } from "./base_page";


export class SearchingResultPage extends BasePage {
    constructor() {
      super()  

      this.url = `${baseUrl}search/?q=${textToInput}`;

      get header() {
        return $("//h1[@class='page-title h2']") 
      }
    }
}