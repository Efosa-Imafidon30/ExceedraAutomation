/// <reference types = "Cypress"/>

import LoginPage from '../PageObjects/LoginPage'

describe('User login scenarios', () => {
    const login = new LoginPage()

        before(() => {
          cy.log('****** user login test scenarios is beginning ******')
        })
      
        beforeEach(() => {
          cy.visit('https://waitrose.com')
          cy.get("button[data-webviewid='accept-cookies']").should('be.visible').click()
          cy.get("div[data-test='header-account']>a:first-of-type>i").should('be.visible').click()

        })
      
        after(() => {
          cy.log('****** user login test scenarios has been executed ******')
        })
 
    it('Login with valid username and valid password', () => {
        login.EnterUsername('validemail@example.com')
        login.EnterPassword('tester123')
        login.ClickToSignIn()
        cy.title().should('be.equal', 'page_title_login')

    })

    it('Login with invalid username and valid password', () => {
        login.EnterUsername('invalidemail@example.com')
        login.EnterPassword('tester123')
        login.ClickToSignIn()

    })

    it('Login with valid username and invalid password', () => {
        login.EnterUsername('validemail@example.com')
        login.EnterPassword('123')
        login.ClickToSignIn()

    })

    it('Login with all uppercase username and password', () => {
        login.EnterUsername('VALIDEMAIL2EXAMPLE.COM')
        login.EnterPassword('tester123')
        login.ClickToSignIn()

    })

    it('Login with username and all uppercase password', () => {
        login.EnterUsername('validemail@example.com')
        login.EnterPassword('TESTER123')
        login.ClickToSignIn()

    })


})