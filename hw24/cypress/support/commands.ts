/// <reference types="cypress" />
    Cypress.Commands.add("getElementByTitleAttribute", (cssSelector:string, titleText: string) => {
        return cy.get(`${cssSelector}[title='${titleText}']`)
    })