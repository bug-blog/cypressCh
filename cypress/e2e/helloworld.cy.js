describe('Hello World Suite', () => {
    it('Hello World Test Case 1', () => {
        cy.visit('https://www.google.com');
        cy.get('input[name="q"]')
            .type('Hello World{enter}');
        //cy.get('.CqAVzb > center > .gNO89b').click();
        cy.contains('Hello World').should('be.visible');
    })
})