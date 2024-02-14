class LoginLocators{

    //Test Case - 1
    phone = "(//input[@id='phoneNumber'])[1]"
    password = "(//*[@name='password'])[1]"
    loginButton = "(//div[@class='mantine-1wpc1xj mantine-Button-inner'])[1]"
    dashboard = "(//div[@class='mantine-Container-root css-1pgkeur mantine-d9zk78'])[1]"

    //Test Case - 2
    clientOption = "(//span[normalize-space()='Clients'])[1]"
    firstRow = "(//a[@class = 'mz_list_fist_sticky_column false'])[2]"
    // firstRow = "//tbody/tr[1]/td[2]"
    visibleID = "//div[@class = 'mz_page_title css-1gh4ih8']"
    addFlagButton = "(//button[@class='css-lct6r6'])[1]"
    visibleModal = "(//h3[normalize-space()='Create new flag'])[1]"
    flagTitle = "//input[@placeholder='Write a short title for this flag']"
    flagDescription = "//textarea[@placeholder='Write details of the flag']"

    categorySelect = '(//input[@aria-autocomplete="list"])[2]'
    categoryOption = "(//*[normalize-space()='Technical'])[1]"

    evidenceDrop = '(//input[@aria-autocomplete="list"])[3]'
    evidenceOption = "(//*[normalize-space()='Customer discussion'])[1]"

    assignDrop = '(//input[@aria-autocomplete="list"])[4]'
    assignOption = "(//*[normalize-space()='BildNow user'])[1]"

    createFlag = "//button[contains(text(), 'Create Flag')]"
    requiredFlagText = "//span[contains(text(), 'Flag type is required')]"

}
module.exports  = new LoginLocators()