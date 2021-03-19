import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import Login from "../../../Page/Login";
import HomePage from "../../../Page/HomePgae";

Given(/I login with correct username "([^"]*)" & password "([^"]*)"$/, function (username,password){
    Login.visitToLoginPage()
    Login.typeUsername(username)
    Login.typePassword(password)
    Login.clickOnLoginButton()
    Login.checkLogin()
})
Given("I click profile username", function (){
    HomePage.clickOnUserName()
})
Then("I check profile page", function (){
    HomePage.navigateToProfilePage()
})
