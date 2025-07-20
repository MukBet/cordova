# MyCordovaApp

This repository contains a sample [Apache Cordova](https://cordova.apache.org/) application. The app responds to the `deviceready` event and demonstrates how to access device information using `cordova-plugin-device`.

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Add platforms**
   ```bash
   cordova platform add android ios browser
   ```

3. **Run the app**
   Choose a platform to run the project. For example, to run in the browser:
   ```bash
   cordova run browser
   ```

## Using `cordova-plugin-device`

The project includes the [`cordova-plugin-device`](https://github.com/apache/cordova-plugin-device) plugin by default. After the `deviceready` event fires you can access device information:

```javascript
// www/js/index.js

document.addEventListener('deviceready', function () {
    console.log('Model: ' + device.model);
    console.log('Platform: ' + device.platform);
    console.log('Cordova version: ' + device.cordova);
});
```

This code logs basic device details, allowing you to verify that the plugin is working correctly.

# Used plugins
related to app plugin see in https://github.com/MukBet/cordova_plugin_game_snake