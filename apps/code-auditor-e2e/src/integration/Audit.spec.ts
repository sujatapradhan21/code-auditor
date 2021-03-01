import {Audit} from '../PageObject/pages/Audit';

describe('Create an Audit', ()=>{
  beforeEach(()=>{
    cy.login('admin');
  })
  it('validate Add audit page',()=>{
    cy.get('a').contains('Add Audit').click();
    cy.datacy('audit').find('mat-select').focus().blur();
    cy.get('span').contains('Auditee Required!');
    cy.datacy('date').find('input').focus().blur();
    cy.get('span').contains('Audit Start Date Required!');

    cy.datacy('audit').click();
    cy.get('mat-option').contains('hope').click();
    cy.datacy('auditor').click();
    cy.get('mat-option').contains('hope').click();
    cy.get('mat-datepicker-toggle').find('button').click();
    cy.get('td').contains('25').click();
    cy.get('button').contains('Create Audit').click();
    cy.contains('At least One Auditor Required');

    cy.get('button').contains('Add Auditor').click();
    cy.get('button').contains('Create Audit').click();
    cy.contains('Auditee cannot be an Auditor!');
  })

  it('Admin adds an Audit', ()=>{
    Audit.auditAdd('hope','xodus',25);
  })


})
