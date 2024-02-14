const locator = require("../pages/locators/locator")
class Login{

    //Test Case - 1
    setUserName(phone){
        cy.xpath(locator.phone).type(phone);
    }

    setPassword(password){
        cy.wait(2000)
        cy.xpath(locator.password).type(password);
    }

    clickOnLoginButton(){
        cy.xpath(locator.loginButton).click(); 
    }

    verifyHomePage(){
        cy.xpath(locator.dashboard).should("be.visible"); 
    }

    //Test Case - 2
    clickClientOption(){
        cy.xpath(locator.clientOption).click();
    }
    
    // getActualText(){
    //     cy.xpath(locator.firstRow).invoke("text").then((text) =>{
    //         a1 = text
    //         this.text1 = text
    //         cy.wrap(text).as('myVariable');
    //         // cy.wrap({ name: text })
            
    //     })
    // }

    QuatationVaule(){
        cy.xpath(locator.firstRow).should('have.text', 'Postman Murphy - Farrell');
        cy.xpath(locator.firstRow).click();
        cy.xpath(locator.visibleID).should('have.text', 'Postman Murphy - Farrell');
    }
        
        // getExpectedText(){
        //     let expectedText;
    
        //     cy.xpath(locator.visibleID).invoke("text").then((text)=>{
        //         cy.wait(2000)
        //         expectedText = text;
        //     })
        //     return expectedText
        // }

        compareTwoString(){
            let text1 = this.getActualText()
            cy.log(text1)
            this.clickFirstRow()
        }
        

    clickAddFlagButton(){
        cy.xpath(locator.addFlagButton).click();
        cy.xpath(locator.visibleModal).should("be.visible");
    }

    fillAllModalFields(modalValues){
        cy.xpath(locator.flagTitle).type(modalValues.flagTitle);
        cy.xpath(locator.flagDescription).type(modalValues.description);
    }
    
    selectCategory(){
        cy.xpath(locator.categorySelect).click()
        cy.xpath(locator.categoryOption).click()
    }
    
    selectEvidence(){
        cy.xpath(locator.evidenceDrop).click()
        cy.xpath(locator.evidenceOption).click()
    }
    
    selectAssign(){
        cy.xpath(locator.assignDrop).click()
        cy.xpath(locator.assignOption).click()
    }
    
    clickCreateFlag(){
        cy.xpath(locator.createFlag).click()  
    }
    
    requiredFlagTitle(){
        cy.xpath(locator.requiredFlagText).click()  
    }
}

module.exports = new Login()