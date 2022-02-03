import EditNoteScreen from "../../screenObjects/android/edit-note.screen"
import ChangeTheme from "../../screenObjects/android/changeTheme-.screen"

describe('Change theme', () => {
    it('Change to dark theme', async () => {

    
        await EditNoteScreen.skipTutorial();

        //Click on More icon
        await ChangeTheme.clickMoreIcon.click();

        //Click on Theme title
        await ChangeTheme.clickThemeTitle.click();

        //Get text of the element 
        const alertTitle = await ChangeTheme.getThemeTitle;

        //Assertion(Validate text title)
        await expect(alertTitle).toHaveText("Theme");

        //Click on Dark theme
        await ChangeTheme.clickOnDarkTheme.click();

    });

    it('Confirm we back to the homepage', async () => {
        
        const getTitle = await ChangeTheme.confirmHomePageText;
        
        await expect(getTitle).toHaveText("Add note");
    });

});