describe('Flujo de compra en Demoblaze', () => {
  it('Agregar 2 productos, ver carrito y completar compra', () => {
    cy.visit('/');

    // Agregar Samsung galaxy s6
    cy.contains('Samsung galaxy s6').click();
    cy.contains('Add to cart').click();

    cy.on('window:alert', (txt) => {
      expect(txt).to.contain('Product added');
    });

    // volver al home
    cy.get('.navbar-brand').click();

    // Agregar Nokia lumia 1520
    cy.contains('Nokia lumia 1520').click();
    cy.contains('Add to cart').click();

    cy.on('window:alert', (txt) => {
      expect(txt).to.contain('Product added');
    });

    // volver al home
    cy.get('.navbar-brand').click();

    // Ir al carrito
    cy.contains('Cart').click();

    // Validar que hay al menos 2 filas de productos
    cy.get('#tbodyid tr').should('have.length.at.least', 2);

    // Place order -> completar formulario
    cy.contains('Place Order').click();

    cy.get('#name').type('David Basantes');
    cy.get('#country').type('Ecuador');
    cy.get('#city').type('Ambato');
    cy.get('#card').type('1234567890123456');
    cy.get('#month').type('12');
    cy.get('#year').type('2025');

    cy.contains('Purchase').click();

    // Validar modal de confirmación (sweet alert)
    cy.get('.sweet-alert').should('be.visible').within(() => {
      cy.contains('OK').should('exist');
    });

    // Cerrar modal
    cy.contains('OK').click();
  });
});
