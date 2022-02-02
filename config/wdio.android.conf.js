
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
    './test/specs/android/add-logText*.js'
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
        "appium:app": path.join(process.cwd(), "app/android/ApiDemos-debug.apk"),
        "appium:automationName": "UiAutomator2",
        //autogrant app permissions
        "appium:autoGrantPermissions": true
        }
]

exports.config = config; 
