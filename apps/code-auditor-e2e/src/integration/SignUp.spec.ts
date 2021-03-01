import {SignUp} from '../PageObject/pages/SignUp';
import {PendingApproval} from '../PageObject/pages/PendingApproval';

describe('SignUp', ()=>{

  it('Register new user by filling all the forms and login', ()=> {
    cy.visit('/auth/login');
    SignUp.signUp('Tester6', 'Test2','tester6.test@com','123abc', '123abc','UI');

    cy.login('newUser','tester6.test@com','123abc');
    cy.get('button').contains('Login').click();
    cy.get('selise-start-unapproved-user').should('contain','ADMIN has not Approved of you yet');
  })

  it.skip('Get Admin approval and Login', () => {
    cy.login('admin')
    PendingApproval.adminApproval('Tester6 Test2');
    cy.get('button').contains('Logout').click();
    cy.login('newUser','tester6.test@com','123abc')
  })
})
