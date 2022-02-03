class changeTheme
{
    get clickMoreIcon()
    {
        return $("~More");
    }

    get clickThemeTitle()
    {
       return $('//*[@text="Theme"]');
    }

    get getThemeTitle()
    {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/alertTitle"]');
    }

    get clickOnDarkTheme()
    {
        return $('//*[@index="2"]');
    }

    get confirmHomePageText()
    {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/empty_text"]');
    }

}

module.exports = new changeTheme();