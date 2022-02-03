require('dotenv').config()
const { config } = require('./wdio.shared.conf');

    //
    // ====================
    // Browserstack credentials
    // ====================
    //

config.user = process.env.BROWSERSTAK_USERNAME;
config.key = process.env.BORWSERSTACK_KEY;

    //
    // ====================
    // Specs
    // ====================
    //

config.specs = [
    './test/specs/android/changeTheme-colorNote-screen*.js'
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
        "appium:deviceName": "Samsung Galaxy S21 Plus",
        "appium:app": "bs://fe6389fa0de9cbeccaa77c0291376ee61ae4fbb9",
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
    config.services = ['browserstack'];

exports.config = config; 
