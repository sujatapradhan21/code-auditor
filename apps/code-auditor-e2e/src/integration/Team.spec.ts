import {TeamPage } from '../PageObject/pages/Team';

describe('Admin Add Team', ()=>{
  beforeEach(()=>{
    cy.login('admin');
  })
  it('should validate Team Add',()=>{
    cy.get('a').contains('Add Team').click();
    const teamDetails = ['teamName','dateEstd']
    teamDetails.forEach(key=>{
      cy.datacy(key).find('input').focus().blur();
      cy.datacy(key).should('have.class','mat-form-field-invalid');
    })
    cy.datacy('teamLead').find('mat-select').focus().blur();
    cy.datacy('teamLead').should('have.class','mat-form-field-invalid');
    cy.get('button').contains('Add Team').click();
    cy.contains('There has to be atleast one team member');
  })
  it('Admin should add a Team', ()=>{
    TeamPage.addTeam('Test admin',27,'Tshering','Pem Som');
  })

  it('Admin should Edit Teams', ()=>{
    TeamPage.editTeam('Test admin',28,'Tshering','Tester5 Test1');
    })
})
