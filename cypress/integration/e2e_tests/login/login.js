import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import Login from "../../../Page/Login"
Given("I open home page", () =>{
    Login.visitToLoginPage()
})
When(/I enter username "([^"]*)"$/, function (key){
    Login.typeUsername(key)
})
When(/I enter password "([^"]*)"$/, function (pass){
    Login.typePassword(pass)
})
Then(/I click "Log in" button$/, function (){
    Login.clickOnLoginButton()
})
Then(/I see my profile Name "Arman Poghosyan"$/, function (){
    Login.checkLogin()
})


