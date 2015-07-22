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
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        window.plugin.backgroundMode.enable();
        window.plugin.backgroundMode.onactivate = function ()
        {
			setTimeout(function ()
			{
				window.plugin.notification.local.add({
													id:         'not_5',  // A unique id of the notifiction
													message:    'Iz Backgrounda !!!',  // The message that is displayed
													title:      'BACKGROUND',  // The title of the message
													repeat:     'minutely',  // Either 'secondly', 'minutely', 'hourly', 'daily', 'weekly', 'monthly' or 'yearly'
													//sound: 		"file://mnt/sdcard/Zagrli.mp3",
													badge:      12  // Displays number badge to notification
												});
			}, 4000);
		}
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        setTimeout(function()
        {
			window.plugin.notification.local.add({
												id:         'not_4',  // A unique id of the notifiction
												message:    'Evo Notifikacije !!!',  // The message that is displayed
												title:      'Naslov',  // The title of the message
												repeat:     'minutely',  // Either 'secondly', 'minutely', 'hourly', 'daily', 'weekly', 'monthly' or 'yearly'
												//sound: 		"file://mnt/sdcard/Zagrli.mp3",
												badge:      12  // Displays number badge to notification
											});
		}, 7000);

        console.log('Received Event: ' + id);
    }
};
