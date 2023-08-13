
import './commands' 
declare global {
    namespace Cypress {
        interface Chainable{
            getElementByTitleItem(
                cssSelector:string,
                 titleText: string
            ): Cypress.Chainable<JQuery<HTMLElement>>
        }
    }
}