/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    // Retrieve device information provided by cordova-plugin-device
    var details = [
        'Model: ' + device.model,
        'Platform: ' + device.platform,
        'Version: ' + device.version,
        'Cordova: ' + device.cordova,
        'Manufacturer: ' + (device.manufacturer || 'n/a'),
        'Is Virtual: ' + (typeof device.isVirtual === 'boolean' ? device.isVirtual : 'n/a'),
        'Serial: ' + (device.serial || 'n/a')
    ].join('\n');

    // Insert the information into the DOM
    var infoElement = document.getElementById('device-info');
    if (infoElement) {
        infoElement.textContent = details;
    }
}

document.getElementById('start-snake').addEventListener('click', function () {
    if (window.startSnakeGame) {
        startSnakeGame();
    } else {
        alert('Snake game not available1.');

        if (typeof startSnakeGame === 'function') {
            startSnakeGame();
        } else {
            alert('Snake game not available2');
        }
    }

});