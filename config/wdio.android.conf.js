
const path = require('path');
const { config } = require('./wdio.shared.conf');


    //
    // ====================
    // Runner Configuration
    // ====================
    //
    config.port = 4723;
    //

    //
    // ====================
    // Specs
    // ====================
    //

config.specs = [
    './test/specs/android/add-android-colorNote-screen*.js'
];

    //
    // ====================
    // Capabilities
    // ====================
    //
config.capabilities = [

    {
        platformName: "Android",
        "appium:platformVersion": "11.0",
        "appium:deviceName": "Pixel 5 API 30 WdIO",
        "appium:app": path.join(process.cwd(), "app/android/colornote-notepad.apk"),
        "appium:automationName": "UiAutomator2",
        //autogrant app permissions
        "appium:autoGrantPermissions": true
        }
]

    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.

config.services= ['appium'];

exports.config = config; 
