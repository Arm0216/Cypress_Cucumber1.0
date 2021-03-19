import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../Page/HomePgae";
import Login from "../../../Page/Login";
import ProfilePage from "../../../Page/ProfilePage";

Given(/I login with correct username "([^"]*)" & password "([^"]*)"$/, function (username,password){
    Login.visitToLoginPage()
    Login.typeUsername(username)
    Login.typePassword(password)
    Login.clickOnLoginButton()
    Login.checkLogin()
})
When("I navigate to profile page", () =>{
    HomePage.clickOnUserName()
    HomePage.navigateToProfilePage()
})

Given(/I click "upload image" button from background picture$/, function (){
    ProfilePage.clickBackgroundButton()
})

When(/I upload picture$/, function (){
    ProfilePage.uploadImage()
})

Then(/I click "Apply" button from background photo window$/, function (){
    ProfilePage.clickApplyButton()
})

When(/I change "zoom" range$/, function (){
    ProfilePage.changeZoomRang()
})

When(/I change "straighten" rang$/, function (){
    ProfilePage.changeStraightenRang()
})