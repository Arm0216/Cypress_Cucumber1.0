class ProfilePage{
    static clickBackgroundButton(){
        cy.get('section[class="profile-topcard-background-image-edit__icon"] span').should("be.visible").click()
    }

    static uploadImage(){
        const filepath = 'images/6M513.png'
        cy.upload(filepath)
    }

    static clickApplyButton(){
        cy.get('button[data-control-name="profile_photo_crop_save"]').should('be.visible').click()
    }

    static changeZoomRang(){
        cy.get('#zoom input[type=range]')
            .invoke('val', 2)
            .trigger('change')
    }

    static changeStraightenRang(){
        cy.get('#straighten input[type=range]')
            .invoke('val', 2)
            .trigger('change')
    }
}
export default ProfilePage