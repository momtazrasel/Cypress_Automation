const login = require("../pages/loginPage")
const data = require("../data/data")
const locator = require("../pages/locators/locator")


describe('Test Suite', () => {

  function reusableLogin(){
      login.setUserName(data.userData.phone)
      login.setPassword(data.userData.password)
      login.clickOnLoginButton()
      login.verifyHomePage()
  }

    it('Verify the system successfully logged In', () => {
      cy.visit("/")
      reusableLogin()
      
    })

    it("Verify Nagetive testing for Add Flag", ()=>{
      cy.visit("/")
      let a1
      reusableLogin()
      login.clickClientOption()
      login.QuatationVaule()
      login.clickAddFlagButton()
      login.fillAllModalFields(data.modalData)
      login.selectCategory()
      login.selectEvidence()
      login.selectAssign()
      login.clickCreateFlag()
      login.requiredFlagTitle()
    })
    
  })
