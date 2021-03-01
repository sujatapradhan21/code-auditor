///<reference path="./../support/index.d.ts"/>

import {UserPage} from '../PageObject/pages/User';

describe('Admin Add user', ()=>{
  beforeEach(()=>{
    cy.login('admin');
  })
  it('Checking validation on add user', () => {
    const details =['firstName','lastName','email','password','confirmPassword'];
    cy.get('a').contains('Add User').click();
    details.forEach(key=>{
      cy.datacy(key).find('input').focus().blur();
      cy.datacy(key).should('have.class', 'mat-form-field-invalid');
    })
    cy.datacy('role').find('mat-select').focus().blur();
    cy.datacy('role').should('have.class','mat-form-field-invalid');
  })

  it('Add user by Admin', ()=>{
    UserPage.addUser('Pelden','Om','pel@pel.com','1234as','1234as','UI');
  })
  it('should Edit User details', () =>{
    UserPage.editUser('Pelden Om','Pelden','Wangchuk','Pelden','pem@thi.com','UI');
  })
})
