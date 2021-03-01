describe('Login',()=>{
  it('should check validation on login page', ()=>{
    cy.visit('auth/login');
    const validateLogin = ['email','password']
    validateLogin.forEach(key=>{
      cy.datacy(key).find('input').focus().blur();
      cy.datacy(key).should('have.class','mat-form-field-invalid');
    })
    cy.login('newUser','sp.sp@com','asap123');
    cy.contains('Sorry :( Credentials Dont Match!');
  })
  it('should login using admin credential',()=>{
    cy.login('admin');
  })
})
