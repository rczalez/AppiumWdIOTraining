//const AddNoteScreen = require("../../screenObjects/android/add-note.screen");
import { AddNoteScreen } from "../../screenObjects/android/add-note.screen";



describe('Colornote tests', () => {
    it('Skip the tutorial', async () => {
       
        await AddNoteScreen.skipBtn.click();

        //assertion
        await expect(AddNoteScreen.addNote).toBeDisplayed();
    });

    it('Add note, save changes and verify note', async () => {

        //click on add note

        await AddNoteScreen.addNote.click();

        //select option text

        await AddNoteScreen.selectOptText.click();
        
        //expect 'Editing' text is displayed

        await expect(AddNoteScreen.expectedText).toBeDisplayed();

        //add note title

        await AddNoteScreen.addNoteTitle.addValue("Fav artists");

        //add note body

        await AddNoteScreen.addNoteBody.addValue("Sia\nYuridia\nKaty Perry");

        //save the note pressing back button twice.

        await AddNoteScreen.saveNote();

        //assertion

       await driver.pause('5000');
        await expect(AddNoteScreen.expectedEditBtn).toBeDisplayed();
        await expect(AddNoteScreen.expectedSavedNote).toHaveText("Sia\nYuridia\nKaty Perry");
    });

});