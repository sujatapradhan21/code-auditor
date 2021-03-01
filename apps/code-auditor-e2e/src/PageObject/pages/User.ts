export class UserPage {
  static addUser( FName: string, LName:string, email:string, password:string, ConfirmPassword:string, option:string){
    cy.get('a').contains('Add User').click().wait(1000);
    contact(FName,LName,email,option);
    cy.datacy('password').type(password);
    cy.datacy('confirmPassword').type(ConfirmPassword);
    cy.get('button').contains('Add User').click();
    cy.contains('Successfully added user!');
  }

  static editUser(userToBeEdit,FName:string,LName:string, PName:string, email:string, option:string){
    cy.server();
    cy.route('PATCH','/users/**').as('patchUpdate');
    cy.contains(userToBeEdit).click();
    cy.get('button').contains('Edit User').click();
    contact(FName,LName,email,option,PName);
    cy.get('button').contains('Update').click().wait('@patchUpdate');
    cy.contains('User Updated');
  }
}
function contact(FName:string,LName:string, email:string, option:string,PName?:string) {
  cy.datacy('firstName').find('input').clear().type(FName);
  cy.datacy('lastName').find('input').clear().type(LName);
  if(PName){cy.datacy('profileName').find('input').clear().type(PName)}
  cy.datacy('email').find('input').clear().type(email);
  cy.datacy('role').click();
  cy.get('mat-option').contains(option).click();
}


