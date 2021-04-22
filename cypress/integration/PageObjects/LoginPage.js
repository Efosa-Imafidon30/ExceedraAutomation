/// <reference types = "cypress" />

class LoginPage {

    EnterUsername(value){
        const field = cy.get("input[id='email']")
        field.should('be.visible').should('be.empty')
        field.clear()
        field.type(value)
        return this
    }

    EnterPassword(value){
        const field = cy.get("input[id='password']")
        field.should('be.visible').should('be.empty')
        field.clear()
        field.type(value)
        return this
    }

    ClickToSignIn(){
        const button = cy.get("button[id='loginSubmit']")
        button.should('be.visible')
        button.click()
    }
}
export default LoginPage