export class Audit {
  static auditAdd(teamName:string, teamOption:string, date:number){
    cy.server();
    cy.route('POST','/audits').as('auditCreate');
    cy.get('a').contains('Add Audit').click();
    cy.datacy('audit').click();
    cy.datacy(teamName).click();
    cy.datacy('auditor').click();
    cy.get('mat-option').contains(teamOption).click();
    cy.get('button').contains('Add Auditor').click();
    cy.get('mat-card').contains(teamOption);
    cy.get('mat-datepicker-toggle').find('button').click();
    cy.get('td').contains(date).click();
    cy.get('button').contains('Create Audit').click().wait('@auditCreate');
  }
}
