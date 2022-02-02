


describe('Android native feature test', () => {

    it('Access an activity directly', async () => {

        //access activity
        await driver.startActivity("io.appium.android.apis",".app.AlertDialogSamples");
        
        //pause

        await driver.pause(3000);

        //assertion
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });

    it('Working with dialog boxes', async () => {
        
        //click on the first dialog box.

        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

        //get alertText
        
        console.log('ALERT TEXT-->', await driver.getAlertText());

        //accept the alert

        //await driver.acceptAlert();

        //Dismiss alert

        //Note: we can use function click() calling the resource id directly too.
        await driver.dismissAlert();

        //assertion - accept box is no longer available

        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();

    });

    it('Vertical scrolling', async () => {

        await $('~App').click();
        await $('~Activity').click();

        //scroll to the end

        //It's not stable if the element gets moved.
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

        //Scroll text into view - more stable way 

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

       // await $('~Secure Surfaces').click();

        //assertion

        await expect ($('~Secure Dialog')).toExist();
        
    });

    it('Horizontal scrolling', async () => {
       
        //Access to the activity

        await driver.startActivity("io.appium.android.apis",".view.Gallery1")

        //Horizontal scrolling

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');

        await driver.pause('3000');
    });

    it('Date update with a datepicker', async () => {

        //access to the view
        await driver.startActivity("io.appium.android.apis",".view.DateWidgets1");

        //get the current date
       const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');

       const currentDate = await date.getText();

        //click on the change the date button
        await $('~change the date').click();

        //scroll right to the next month
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        
        //select the 10th date
        //await $('//android.view.View[@content-desc="10 February 2022"]').click();
        await $('//*[@text="10"]').click();

        //click on Ok button

        await $('//*[@resource-id="android:id/button1"]').click();
        //verify the updated date
        
        await expect(await date.getText()).not.toEqual(currentDate);
    });
});