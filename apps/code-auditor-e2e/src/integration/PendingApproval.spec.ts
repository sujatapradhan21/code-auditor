describe('Admin approves user', ()=>{

 function approveUser(numberOfUser: number) {
   for (let x = 0; x < numberOfUser; x++) {
     cy.get('button').contains(' Approve ').eq(0).click();
     cy.contains('Approved Successfully');
     cy.wait(500)
   }
 }
  it('should approve pending user', ()=>{
    cy.visit('/auth/login');
    cy.login('admin');
    cy.get('a').contains('Pending Approval').click();
    approveUser(3 )

    // cy.get('button').eq(1).click();
    // cy.contains('Approved Successfully');
    // cy.get('button').last().click();
  })
})
