class addNoteScreen{

get skipBtn()
    {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
    }

get addNote()
    {
        return $('//*[@text="Add note"]');
    }

get addNoteClick()
    {
       return $('//*[@text="Add note"]');
    }

get selectOptText()
    {
        return $('//*[@text="Text"]');
    }

get expectedText()
    {
        return $('//*[@text="Editing"]');
    }

get addNoteTitle()
    {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }

get addNoteBody()
    {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }

get expectedEditBtn()
    {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }

    get expectedSavedNote()
    {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }

    //Because this is not a getter function we use async instead of get
async saveNote()
    {
        await driver.back();
        await driver.back();
    }
}

module.exports = new addNoteScreen();
//export default  new addNoteScreen();