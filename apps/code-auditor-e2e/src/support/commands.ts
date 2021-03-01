// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// declare namespace Cypress {
//   interface Chainable<Subject> {
//     login(email: string, password: string): void;
//   }
// }
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => {
//   console.log('Custom command example: Login', email, password);
// });


Cypress.Commands.add('datacy', (value) => {
  cy.get(`[data-cy= "${value}"]`);
})
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

Cypress.Commands.add('login',(userType,email?:string, password?:string) => {
  cy.visit('/auth/login');
  const types ={
    admin: {
      email: "admin@admin.com",
      password: "admin123" ,
    },

    user: {
      email: "",
      password: ""
    },

    newUser: {
      email: email,
      password: password
    }
  };
  const user = types[userType];
  cy.datacy('email').type(user.email);
  cy.datacy('password').type(user.password);
  cy.get('button').contains('Login').click();
})



