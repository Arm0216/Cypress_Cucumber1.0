import {And, Given} from "cypress-cucumber-preprocessor/steps";
import PCRPage from "../../../pages/cloudPCR_page";
import {
    navMenu,
    openedCloudPCRPage,
} from "../../../pages/cloudPCR_result_page";

const email_field = '[name="usernameOrEmailAddress"]'
const password_field = '[name="password"]'
const login_button = '[id="kt_login_signin_submit"]'
const qa_tabs = ["ePCR QA/QI", "NFIRs QA/QI", "ePCR Reporting", "Vehicle Management"]
const admin_tabs = ["User management", "ePCR Form Config", "NFIRs Form Config"]


Given(/^I am logged in CloudPCR page$/, function () {
    PCRPage.visitLoginPage()
    PCRPage.serverLinks()
    PCRPage.fillInField(email_field, 'nfirs01@cloudpcr.acc')
    PCRPage.fillInField(password_field, 'ilovecloudpcr!')
    PCRPage.clickOnButton(login_button)
});

And(/^CloudPCR page is opened$/, function () {
    openedCloudPCRPage.expect().toShowOpenedPage()
});

And(/^Assert that "([^"]*)" and "([^"]*)" submenus are shown$/, function (arg1, arg2) {
    let args = [...arguments]
    args.pop()
    for (let arg of args) {
        navMenu.expect().toShowMenuItem(arg)
    }
});

And(/^I click on "([^"]*)" menu item$/, function (arg) {
    PCRPage.clickOnSubmenu(arg)
});

And(/^Assert that all the tabs of "([^"]*)" submenu are shown$/, function (submenu) {
    let tabs
    if (submenu === "QA") {
        tabs = qa_tabs
    } else {
        tabs = admin_tabs
    }
    navMenu.expect().toShowSubmenuItems(tabs, submenu)
});
