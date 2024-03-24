describe('betting system', () => {

    beforeEach(() => {
        cy.visit('')
    });

    it('exemplary bet', () => {
        cy.getId('kurs1.1').click()
        cy.getId('kurs1.1').should('have.css', 'background-color', 'rgb(40, 94, 42)')
        cy.getId('kurs1.1').invoke('val').then(value => {
            cy.getId('kurs').should('have.text', value)
        })

        cy.getId('kurs2.1').click()
        cy.getId('kurs2.1').invoke('val').then(valueBet2 => {
            cy.getId('kurs1.1').invoke('val').then(valueBet1 => {
                const expectedValue = (valueBet1*valueBet2).toFixed(2)
                cy.getId('kurs').should('have.text', expectedValue)
            })
        })

        cy.getId('pieniadze').type('5')
        cy.getId('pieniadze').invoke('val').then(stawka => {
            cy.getId('kurs').invoke('text').then(kurs => {
                const expectedWinnings = (stawka * kurs).toFixed(2)
                cy.getId('wygrana').should('have.text', expectedWinnings + " zł")
            })
        })

        cy.getId('obstaw').click()
        cy.getId('pieniadze').invoke('val').then(stawka => {
            cy.getId('kurs').invoke('text').then(kurs => {
                cy.getId('wygrana').invoke('text').then(wygrana => {
                    const expectedWinnings = (stawka * kurs).toFixed(2)
                    cy.getId('podsumowanie').should('have.text', `Obstawiono ${stawka}zł z kursem ${kurs}. Możliwa wygrana: ${wygrana}.`)
                })
            })
        })
    });
});