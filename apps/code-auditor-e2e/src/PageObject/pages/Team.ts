export class TeamPage {
  static addTeam(teamName:string, date:number, teamOption:string, memberOption:string){
    cy.get('a').contains('Add Team').click();
    team(teamName,date,teamOption,memberOption);
    cy.get('button').contains('Add Team').click();
  }
  static editTeam(teamName:string, date: number, teamOption:string,memberOption:string){
    cy.server();
    cy.route('PATCH','/teams/**').as('teamUpdate');
    cy.get('a').contains('Teams').click();
    cy.get('a').contains(teamName).click();
    cy.get('button').contains('Edit').click();
    team(teamName, date, teamOption,memberOption)
    cy.get('mat-card').contains(memberOption);
    cy.get('button').contains('Update Team').click().wait('@teamUpdate');
    cy.contains('Updated Team');
  }
}
function team(teamName:string, date:number, teamOption:string, memberOption?:string){
  cy.datacy('teamName').find('input').clear().type(teamName);
  cy.datacy('dateEstd').find('input').clear();
  cy.datacy('dateEstd').find('button').click();
  cy.get('mat-calendar').contains(date).click();
  cy.datacy('teamLead').click();
  cy.get('mat-option').contains(teamOption).click()
  cy.datacy('teamMember').click();
  if(memberOption){cy.get('mat-option').contains(memberOption).click()}
  cy.get('button').contains('Add Member').click();
}
