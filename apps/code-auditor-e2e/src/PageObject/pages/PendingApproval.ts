export class PendingApproval {
  static adminApproval(userName:string){
    cy.get('a').contains('Pending Approval').click();
    cy.datacy(userName).find('button').contains('Approve').click();
    cy.contains('Approved Successfully');
  }

}
