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
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
        console.log('HELLLLLLLLOOOOOOO WOOORLLDDDDD');

    },
    test: function() {
        console.log("THIS IS A TEST I AM TESTING");
    }
};

var fp;
var testingDownload = {
  test: function() {
    document.addEventListener('deviceready', function() {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, fileSystemSuccess, fileSystemFail);
        function fileSystemSuccess(fileSystem) {
            var download_link = "http://techslides.com/demos/sample-videos/small.mp4";
            ext = download_link.substr(download_link.lastIndexOf('.') + 1);

            var rootdir = fileSystem.root.toURL(); // root path of phone
            // var fp = rootdir.fullPath; 

            fp = rootdir + "downloaded_file" + "." + ext; // file path and name
            // call download
            filetransfer(download_link, fp);
        }
        function fileSystemFail(evt) {
            //Unable to access file system
            alert(evt.target.error.code);
        }
    });
  }  
}

function filetransfer(download_link,fp) {
    var fileTransfer = new FileTransfer();
    fileTransfer.download(
        download_link,
        fp,
        function(entry) {
            console.log("download complete: " + entry.fullPath);
        },
        function(error) {
            console.log("download error source " + error.source);
            // console.log("download error target " + error.target);
            // console.log("upload error code" + error.code);
        }
    );
}

function playVideo() {
    // console.log(fp);
    // cordova.plugins.videoPlayer.play(fp);
    var video = document.getElementById("video");
    var source = document.createElement("source");

    source.setAttribute('src',fp);
    video.appendChild(source);
    video.play();
};

