//const AddNoteScreen = require("./add-note.screen");
import AddNoteScreen from "./add-note.screen";

class EditNoteScreen {

    async skipTutorial(){
        await AddNoteScreen.skipBtn.click();

        //assertion
        await expect(AddNoteScreen.addNote).toBeDisplayed();
    }

    async addAndSaveNote(addNoteTitle, addNoteBody){

          //click on add note

          await AddNoteScreen.addNote.click();

          //select option text
  
          await AddNoteScreen.selectOptText.click();
          
          //expect 'Editing' text is displayed
  
          await expect(AddNoteScreen.expectedText).toBeDisplayed();
  
          //add note title
  
          await AddNoteScreen.addNoteTitle.addValue(addNoteTitle);
  
          //add note body
  
          await AddNoteScreen.addNoteBody.addValue(addNoteBody);
  
          //save the note pressing back button twice.
  
          await AddNoteScreen.saveNote();
  
          //assertion
  
          await driver.pause('5000');
          await expect(AddNoteScreen.expectedEditBtn).toBeDisplayed();
          await expect(AddNoteScreen.expectedSavedNote).toHaveText(addNoteBody);
    }

    get firstNote()
    {
        return  $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    get moreIcon()
    {
        return $('~More');
    }

    get deleteIcon()
    {
        return $('//*[@text="Delete"]');
    }

    get clickNavIcon()
    {
        return  $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/page_more"]');
    }

    get clickTrasCanItem()
    {
        return $('//*[@text="Trash Can"]');
    }
        

}

module.exports= new EditNoteScreen();