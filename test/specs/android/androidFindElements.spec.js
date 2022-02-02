describe('Android element test', () => {
    it('Find element by accessibility ID', async () => {
       
        //Find element by accessibility id
       const appOption = await $('~App');

        //click on element
        await appOption.click();

        //assertion

        const actionBar = await $('~Action Bar');

        await expect(actionBar).toBeExisting();
    });

    it('Find element by class name', async () => {
        
        //find element by class name

        const className= await $('android.widget.TextView');

        //console.log(await className.getText());

        //Assertion 
        await expect(className).toHaveText('API Demos');
    });

    //xit  para salar un test en particular
    it('Find elements by Xpath', async () => {
        
        //xPath - (//tagname[@attribute=value])

        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

        //find by resource ID

        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        //Find elememt  by text 

        await $('//android.widget.TextView[@text="Command two"]').click();

        //find by class-assertion
        
        const textAssertion = await $('android.widget.TextView');

        await expect(textAssertion).toHaveText("You selected: 1 , Command two");

    });

    //Finds elements by UIAutomator
    
    it('Finds elements by UIAutomator', async () => {
        
        await $('android= new UiSelector().textContains("Alert Nose")').click();
    });

    it('Find multiple elements', async () => {

        //List that we expect to be the same on the app

        const expectedList = [
            "API Demos", "Access'ibility",
            "Accessibility", "Animation",
            "App", "Content", "Graphics",
            "Media", "NFC", "OS",
            "Preference", "Text", "Views"
        ]

       //Empty list
        const actualList = []
        //find multiple elements
        const textList = await $$('android.widget.TextView');

        //once we got all the element, loop through them to fill the actuaList array.

        for(const element of textList)
        {
            actualList.push(await element.getText());
        }
        //assert the list. Compare arrays if they are equal
        await expect(actualList).toEqual(expectedList);

        
    });

    it('Access text field screen, enter a country and validate it.', async () => {
        
        // Start: Access to the auto complete screen view
        const viewsID = await $('~Views');

        await viewsID.click();

        const autoCompleteID = await $('~Auto Complete');

        await autoCompleteID.click();

        const screenTop = await $('~1. Screen Top');

        await screenTop.click();

       // End: Access to the auto complete screen view

       //Enter the coutry name
        //const setText = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/edit"]');
        //Another alternative to get access to an element is use * after //, so we don't need to write the class name
        const setText = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');

        await setText.addValue('Canada');

        //verify the country name

      await expect(setText).toHaveText('Canada');

    });
});