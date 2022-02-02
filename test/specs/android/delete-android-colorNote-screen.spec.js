const EditNoteScreen = require("../screenObjects/android/edit-note.screen");
//import  EditNoteScreen  from "../../screenObjects/android/edit-note.screen";

describe('Delete note and check note in the trash can', () => {

    before(async () => {
        await EditNoteScreen.skipTutorial();
        await EditNoteScreen.addAndSaveNote("TV Shows","Snowpiercer\nStranger Things\nDeamon Slayer");
        await driver.back();
    });

   

    it('Delete note', async () => {

        const note = await EditNoteScreen.firstNote.getText();

        //click on the note

        await EditNoteScreen.firstNote.click();

        //click on more icon

        await EditNoteScreen.moreIcon.click();

        //click on delete item

        await EditNoteScreen.deleteIcon.click();

        //accept alert

        await driver.acceptAlert();

        //click on nav icon

        await EditNoteScreen.clickNavIcon.click();

        //click on trash can item

        await EditNoteScreen.clickTrasCanItem.click();

        //assertions

        const trashCanItem = await EditNoteScreen.firstNote.getText();

        await expect(trashCanItem).toEqual(note);

    });
});