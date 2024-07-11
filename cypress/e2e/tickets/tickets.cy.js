it('Tickets', () => {
  cy.visit('https://www.rzd.ru/')

  cy.get('#direction-from').type('Москва')

  cy.get('.rzd-suggestion-block > :nth-child(2)').click()

  cy.get('#direction-to').type('Новороссийск')

  cy.get('.rzd-suggestion-block > :nth-child(2)').click()

  cy.get('#datepicker-from').type('27.07.2024')

  cy.get('.rzd-button').click()
})

