/// <reference types="cypress" />
    Cypress.Commands.add("getElementByTitleItem", (cssSelector:string, titleText: string) => {
        return cy.get(`${cssSelector}[title='${titleText}']`)
    })