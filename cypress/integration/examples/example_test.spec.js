///<reference types="Cypress"/>

describe('Home page tests', function (){
    this.beforeEach(function(){
        cy.visit("index.html")
    })
    it('tests user events on home page', function (){
        cy.get('.logo-heading').contains("Fun B");
        cy.get('[href="#home"]').trigger('mouseover').should(($el) => {
            expect($el).to.have.css('color', 'rgb(255, 0, 0)')
           
        });
        cy.get('[href="#home"]').trigger('mouseleave').should(($el) => {
            expect($el).to.have.css('color', 'rgb(0, 0, 0)')
        });


    })
})