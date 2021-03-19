class HomePage{
    static clickOnUserName(){
        cy.get('div[class="profile-rail-card__actor-link t-16 t-black t-bold"]').click()
    }
    static navigateToProfilePage(){
        cy.get('li span[class="artdeco-button__text"]').contains('Add profile section').should("be.visible").then((elem =>{
            expect(elem).to.be.ok
        }))
    }
}
export default HomePage