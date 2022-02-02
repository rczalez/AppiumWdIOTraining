describe('Log Text Messages', () => {
    it('Validate Log text message', async () => {

        await $("~Text").click();
        await expect($('//*[@text="LogTextBox"]')).toBeDisplayed();
    });

});