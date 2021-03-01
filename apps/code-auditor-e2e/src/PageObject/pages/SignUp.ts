export class SignUp{
  static signUp(FName:string, LName:string, email:string, password:string, CPassword:string, option:string){
    cy.datacy('signup').click();
    cy.datacy('firstName').type(FName);
    cy.datacy('lastName').type(LName);
    cy.datacy('email').type(email);
    cy.datacy('password').type(password);
    cy.datacy('confirmPassword').type(CPassword);
    cy.datacy('role').click();
    cy.datacy('option').contains(option).click();
    cy.get('button').contains('Register').click();
    cy.contains('registered successfully');
    cy.url().should('include','auth/login');
  }

}
