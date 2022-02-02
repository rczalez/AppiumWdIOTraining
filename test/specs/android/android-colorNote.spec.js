


describe('Colornote tests', () => {
    it('Skip the tutorial', async () => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();

        //assertion
        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    });

    it('Add note, save changes and verify note', async () => {

        //click on add note

        await $('//*[@text="Add note"]').click();

        //select option text

        await $('//*[@text="Text"]').click();
        
        //expect 'Editing' text is displayed

        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        //add note title

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue("Fav artists");

        //add note body

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue("Sia\nYuridia\nKaty Perry");

        //save the note pressing back button twice.

        await driver.back();
        await driver.back();

        //assertion

       await driver.pause('5000');
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Sia\nYuridia\nKaty Perry");
    });

    it('Delete note and check note in the trash can', async () => {

        await driver.back();

        const note = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();

        //click on the note

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').click();

        //click on more icon

        await $('~More').click();

        //click on delete item

        await $('//*[@text="Delete"]').click();

        //accept alert

        await driver.acceptAlert();

        //click on nav icon

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/page_more"]').click();

        //click on trash can item

        await $('//*[@text="Trash Can"]').click();

        //assertions

        const trashCanItem = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();

        await expect(trashCanItem).toEqual(note);


    });
});