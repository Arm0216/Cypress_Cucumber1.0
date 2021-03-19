import {Given, And, When, Then} from "cypress-cucumber-preprocessor/steps";
import PCRPage from "../../../pages/cloudPCR_page";
import {openedCloudPCRPage, navMenu} from "../../../pages/cloudPCR_result_page";

const email_field = '[name="usernameOrEmailAddress"]'
const password_field = '[name="password"]'
const login_button = '[id="kt_login_signin_submit"]'

Given(/^I am in CloudPCR login page$/, () => {
    PCRPage.visitLoginPage()
    PCRPage.serverLinks()
});

And(/^I fill in login field$/, function () {
    PCRPage.fillInField(email_field, 'nfirs01@cloudpcr.acc')
});

And(/^I fill in password field$/, function () {
    PCRPage.fillInField(password_field, 'ilovecloudpcr!')
});

And(/^I click on Login button$/, function () {
    PCRPage.clickOnButton(login_button)
});

And(/^Assert that CloudPCR page is opened$/, function () {
    openedCloudPCRPage.expect().toShowOpenedPage()
    // PCRPage.waitForMyPcrsPage()
});


Given(/^I login and check load time$/, function () {
    let startTime = new Date();
    PCRPage.visitLoginPage()
    PCRPage.serverLinks()
    PCRPage.fillInField(email_field, 'nfirs01@cloudpcr.acc')
    PCRPage.fillInField(password_field, 'ilovecloudpcr!')
    PCRPage.clickOnButton(login_button)
    cy.wait('@appURL').then(() => {
        let endTime = new Date();
        let dif = startTime.getTime() - endTime.getTime();
        let timeDelta = dif / 1000;
        let Seconds_Between_Dates = Math.abs(timeDelta);
        if (Math.round(Seconds_Between_Dates) > 10) {
            PCRPage.sendLoadTimeMail().then((r) => {
                cy.log(r)
            })
        }
    })

});
