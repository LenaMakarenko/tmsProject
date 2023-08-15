
import './commands' 
declare global {
    namespace Cypress {
        interface Chainable{
            getElementByTitleAttribute(
                cssSelector:string,
                 titleText: string
            ): Cypress.Chainable<JQuery<HTMLElement>>
        }
    }
}