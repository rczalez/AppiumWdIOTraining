const path = require('path');
import config from "./wdio.shared.conf";

    //
    // ====================
    // Runner Configuration
    // ====================
    //
    config.port = 4723,
    //

    //
    // ====================
    // Specs
    // ====================
    //

config.specs = [
    './test/specs/**/delete-android-colorNote-screen*.js'
];

    //
    // ====================
    // Capabilities
    // ====================
    //
config.capabilities = [

    {
        platformName: "ios",
        "appium:platformVersion": "14.5",
        "appium:deviceName": "Pixel 5 API 30 WdIO",
        "appium:app": path.join(process.cwd(), "./app/android/colornote-notepad.apk"),
        "appium:automationName": "XCUITest",
        //autogrant app permissions
        "appium:autoGrantPermissions": true
        }
]

exports.config = config;
