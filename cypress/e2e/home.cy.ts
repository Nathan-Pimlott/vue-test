import { headerSelectors, calculatorSelectors } from '../store/selectors'

describe('Home', () => {
  it('Should render the home page', () => {
    cy.visit('/')
    cy.get(headerSelectors.headerTitle).should('be.visible')
    cy.get(calculatorSelectors.number1).should('be.visible')
    cy.get(calculatorSelectors.number2).should('be.visible')
  })
  it('Should navigate to different pages', () => {
    cy.visit('/')
    cy.get(headerSelectors.subtractLink).click()
    cy.get(headerSelectors.subtractTitle).should('be.visible')
    cy.get(headerSelectors.multiplyLink).click()
    cy.get(headerSelectors.multiplyTitle).should('be.visible')
    cy.get(headerSelectors.divideLink).click()
    cy.get(headerSelectors.divideTitle).should('be.visible')
    cy.get(headerSelectors.addLink).click()
    cy.get(headerSelectors.addTitle).should('be.visible')
  })
  it('Should be able to increase and decrease number 1', () => {
    cy.visit('/')
    cy.get(calculatorSelectors.decreaseNumber1Button).click()
    cy.get(calculatorSelectors.increaseNumber1Button).click()
    cy.get(calculatorSelectors.increaseNumber1Button).click()
    cy.get(calculatorSelectors.number1).should('contain.text', '1')
  })
  it('Should be able to increase and decrease number 2', () => {
    cy.visit('/')
    cy.get(calculatorSelectors.decreaseNumber2Button).click()
    cy.get(calculatorSelectors.increaseNumber2Button).click()
    cy.get(calculatorSelectors.increaseNumber2Button).click()
    cy.get(calculatorSelectors.number2).should('contain.text', '1')
  })
  it('Should correctly calculate the value', () => {
    cy.visit('/')
    cy.get(calculatorSelectors.increaseNumber1Button).click()
    cy.get(calculatorSelectors.increaseNumber2Button).click()
    cy.get(calculatorSelectors.increaseNumber2Button).click()
    cy.get(calculatorSelectors.calculateButton).click()
    cy.get(calculatorSelectors.calculatedValue).should('contain.text', '3')
  })
})
