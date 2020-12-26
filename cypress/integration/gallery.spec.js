context('Photos', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('.modal-bg')
      .should('have.css', 'visibility', 'hidden')
      .and('have.css', 'opacity', '0')
  })

  it('Display author on hovering his photo', () => {
    cy.wait(1000)
    cy.get('.gallery .photo-0')
      .trigger('mouseenter')
    cy.wait(1000)
    cy.get('.gallery .photo-0 img')
      .should('have.css', 'opacity', '0.7')
    cy.wait(1000)
    cy.get('.photo-0 .author-container')
      .should('have.css', 'opacity', '1')
    cy.wait(3000)

  });

  it('Click and display an modal with real size photo', () => {
    cy.wait(1000)
    cy.get('.gallery .photo-0')
      .click()
    cy.wait(1000)
    cy.get('.modal-bg')
      .should('have.class', 'modal-active')
    cy.wait(3000)
  });

  it('Close the modal', () => {
    cy.wait(1000)
    cy.get('.gallery .photo-0')
      .click()
    cy.wait(1000)
    cy.get('.modal-bg')
      .should('have.class', 'modal-active')
    cy.wait(1000)
    cy.get('.close-modal')
      .click()
    cy.wait(1000)
    cy.get('.modal-bg')
      .should('not.have.class', ' modal-active')
    cy.wait(1000)
  });
})