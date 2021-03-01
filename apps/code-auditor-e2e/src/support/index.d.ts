declare namespace Cypress{
  interface Chainable {
    datacy(selector:string): Chainable<Element>
  }

  interface Chainable {
    login(user:string,email?:string,password?:string): Chainable<Element>
  }
}
