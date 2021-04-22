// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// cy.request({
//     method: 'POST',
//     url: 'https://restful-booker.herokuapp.com/auth',
//     body: {
//         'username' : 'admin',
//         'password' : 'password123'
//     },
//     headers:{
//         'Content-Type' : 'application/json' 
//     }

// }).then((response)=>{
//     expect(response.body).have.property('token')
//     expect(response).to.have.property('status', 200)
//     expect(response).to.not.be.null
//     //const token = cy.get(response.body).value('token')
    
// })

// Cypress.Commands.add('postToken', () => {
//     cy.request({
//       method: 'POST',
//      // url: Cypress.env('api_identity_url'), //get from cypress.env.json
//      url: 'https://restful-booker.herokuapp.com/auth',
//       form: true, //sets to application/x-www-form-urlencoded
//       body: {
//         'username' : 'admin',
//         'password' : 'password123'
//       },
//     //   auth: {
//     //     username: Cypress.env('api_identity_username'),
//     //     password: Cypress.env('api_identity_password')
//     //   }
//     headers:{
//         'Content-Type' : 'application/json' 
//     }

//     })
//     .its('body')
//     .then(identity => {
//       cy.setLocalStorage("identity_token", identity.token);
//     });
//   });