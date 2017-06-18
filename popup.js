// Copyright 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var port = null;

var getKeys = function(obj){
   var keys = [];
   for(var key in obj){
      keys.push(key);
   }
   return keys;
}

var status = null;

function updateUiState() {
  // state: login logged registration reg-success reg-failed login-failed search monitor specified-search-success list-search-success search-failed connect
  if (port) {
    if(status == 'login'){
      document.getElementById('connect-div').style.display = 'none';
      document.getElementById('login-div').style.display = 'block';
      document.getElementById('reg-div').style.display = 'none';
      document.getElementById('logged-div').style.display = 'none';
      document.getElementById('search-div').style.display = 'none';
      document.getElementById('result-div').style.display = 'none';
      document.getElementById('monitor-div').style.display = 'none';
      document.getElementById('reason-div').style.display = 'none';
      document.getElementById('back-div').style.display = 'none';
    }
    else if (status == 'logged'){
      document.getElementById('connect-div').style.display = 'none';
      document.getElementById('login-div').style.display = 'none';
      document.getElementById('reg-div').style.display = 'none';
      document.getElementById('logged-div').style.display = 'block';
      document.getElementById('search-div').style.display = 'none';
      document.getElementById('result-div').style.display = 'none';
      document.getElementById('monitor-div').style.display = 'none';
      document.getElementById('reason-div').style.display = 'none';
      document.getElementById('back-div').style.display = 'none';
    }
    else if (status == 'login-failed'){
      document.getElementById('connect-div').style.display = 'none';
      document.getElementById('login-div').style.display = 'block';
      document.getElementById('reg-div').style.display = 'none';
      document.getElementById('logged-div').style.display = 'none';
      document.getElementById('search-div').style.display = 'none';
      document.getElementById('result-div').style.display = 'none';
      document.getElementById('monitor-div').style.display = 'none';
      document.getElementById('reason-div').style.display = 'block';
      document.getElementById('back-div').style.display = 'none';
    }
    else if (status == 'registration'){
      document.getElementById('connect-div').style.display = 'none';
      document.getElementById('login-div').style.display = 'none';
      document.getElementById('reg-div').style.display = 'block';
      document.getElementById('logged-div').style.display = 'none';
      document.getElementById('search-div').style.display = 'none';
      document.getElementById('result-div').style.display = 'none';
      document.getElementById('monitor-div').style.display = 'none';
      document.getElementById('reason-div').style.display = 'none';
      document.getElementById('back-div').style.display = 'none';
    }
    else if (status == 'reg-success'){
      document.getElementById('connect-div').style.display = 'none';
      document.getElementById('login-div').style.display = 'none';
      document.getElementById('reg-div').style.display = 'none';
      document.getElementById('logged-div').style.display = 'none';
      document.getElementById('search-div').style.display = 'none';
      document.getElementById('result-div').style.display = 'none';
      document.getElementById('monitor-div').style.display = 'none';
      document.getElementById('reason-div').style.display = 'block';
      document.getElementById('back-div').style.display = 'block';
    }
    else if (status == 'reg-failed'){
      document.getElementById('connect-div').style.display = 'none';
      document.getElementById('login-div').style.display = 'none';
      document.getElementById('reg-div').style.display = 'block';
      document.getElementById('logged-div').style.display = 'none';
      document.getElementById('search-div').style.display = 'none';
      document.getElementById('result-div').style.display = 'none';
      document.getElementById('monitor-div').style.display = 'none';
      document.getElementById('reason-div').style.display = 'block';
      document.getElementById('back-div').style.display = 'block';
    }
    else if (status == 'search'){
      document.getElementById('connect-div').style.display = 'none';
      document.getElementById('login-div').style.display = 'none';
      document.getElementById('reg-div').style.display = 'none';
      document.getElementById('logged-div').style.display = 'none';
      document.getElementById('search-div').style.display = 'block';
      document.getElementById('result-div').style.display = 'none';
      document.getElementById('monitor-div').style.display = 'none';
      document.getElementById('reason-div').style.display = 'none';
      document.getElementById('back-div').style.display = 'block';
    }
    else if (status == 'specified-search-success'){
      document.getElementById('connect-div').style.display = 'none';
      document.getElementById('login-div').style.display = 'none';
      document.getElementById('reg-div').style.display = 'none';
      document.getElementById('logged-div').style.display = 'none';
      document.getElementById('search-div').style.display = 'none';
      document.getElementById('result-div').style.display = 'block';
      document.getElementById('monitor-div').style.display = 'none';
      document.getElementById('reason-div').style.display = 'none';
      document.getElementById('back-div').style.display = 'none';
    }
    else if (status == 'list-search-success'){
      document.getElementById('connect-div').style.display = 'none';
      document.getElementById('login-div').style.display = 'none';
      document.getElementById('reg-div').style.display = 'none';
      document.getElementById('logged-div').style.display = 'none';
      document.getElementById('search-div').style.display = 'none';
      document.getElementById('result-div').style.display = 'block';
      document.getElementById('monitor-div').style.display = '';
      document.getElementById('reason-div').style.display = 'none';
      document.getElementById('back-div').style.display = 'none';
    }
    else if (status == 'search-failed'){
      document.getElementById('connect-div').style.display = 'none';
      document.getElementById('login-div').style.display = 'none';
      document.getElementById('reg-div').style.display = 'none';
      document.getElementById('logged-div').style.display = 'none';
      document.getElementById('search-div').style.display = 'none';
      document.getElementById('result-div').style.display = 'none';
      document.getElementById('monitor-div').style.display = 'none';
      document.getElementById('reason-div').style.display = 'block';
      document.getElementById('back-div').style.display = 'block';
    }
    else if (status == 'monitor'){
      document.getElementById('connect-div').style.display = 'none';
      document.getElementById('login-div').style.display = 'none';
      document.getElementById('reg-div').style.display = 'none';
      document.getElementById('logged-div').style.display = 'none';
      document.getElementById('search-div').style.display = 'none';
      document.getElementById('result-div').style.display = 'none';
      document.getElementById('monitor-div').style.display = 'block';
      document.getElementById('reason-div').style.display = 'none';
      document.getElementById('back-div').style.display = 'block';
    }
    else {
      // wrong
    }
  }
  else {
    console.log('not port');
    document.getElementById('connect-div').style.display = 'block';
    document.getElementById('login-div').style.display = 'none';
    document.getElementById('reg-div').style.display = 'none';
    document.getElementById('logged-div').style.display = 'none';
    document.getElementById('search-div').style.display = 'none';
    document.getElementById('result-div').style.display = 'none';
    document.getElementById('monitor-div').style.display = 'none';
    document.getElementById('reason-div').style.display = 'block';
    document.getElementById('back-div').style.display = 'none';
    // do something
  }
}

// button function

function connect() {
  var hostName = "com.blaketairan.mypasswd.host";
  appendMessage("Connecting to native messaging host <b>" + hostName + "</b>")
  console.log('finish appendMessage');
  port = chrome.runtime.connectNative(hostName);
  port.onMessage.addListener(onNativeMessage);
  port.onDisconnect.addListener(onDisconnected);
  status="login";
  updateUiState();
}

function login(){
  var temp_account = document.getElementById('username').value;
  var temp_passwd = document.getElementById('passwd').value;
  var temp_remember = document.getElementById('saveAccount').checked;
  chrome.storage.local.set({"account":temp_account, "password":temp_passwd, "save":temp_remember});
  var execResult = 'success';
  if (execResult == 'success'){
    status = 'logged';
    updateUiState()
  }
  chrome.storage.local.get("account",function(data){
    console.log(data.account);
  });
  chrome.storage.local.get("password", function(data){
    console.log(data.password);
  });
}

function register(){
  var execResult = 'success';
  if (execResult == 'success'){
    status = 'reg-success';
    updateUiState()
  }

}

function search(){
  var execResult = 'success';
  if (execResult == 'success'){
    status = 'specified-search-success';
    updateUiState()
  }

}

function toLogin(){
  chrome.storage.local.clear();
  var execResult = 'success';
  if (execResult == 'success'){
    status = 'login';
    updateUiState()
  }

}

function toRegister(){
  var execResult = 'success';
  if (execResult == 'success'){
    status = 'registration';
    updateUiState()
  }

}

function toSearch(){
  var execResult = 'success';
  if (execResult == 'success'){
    status = 'search';
    updateUiState()
  }

}

function toMonitor(){
  var execResult = 'success';
  if (execResult == 'success'){
    status = 'monitor';
    updateUiState()
  }

}

// result function

// reason function



function appendMessage(text) {
  console.log("appendMessage");
  document.getElementById('reason-div').innerHTML += "<p>" + text + "</p>";
}

function sendNativeMessage() {
  message = {"username": document.getElementById('username').value, "passwd": document.getElementById('passwd').value, "system": document.getElementById('system').value, "suser": document.getElementById('suser').value};
  port.postMessage(message);
  appendMessage("Sent message: <b>" + JSON.stringify(message) + "</b>");
  updateUiState()
}

function onNativeMessage(message) {
  appendMessage("Received message: <b>" + JSON.stringify(message) + "</b>");
  updateUiState()
}

function onDisconnected() {
  appendMessage("Failed to connect: " + chrome.runtime.lastError.message);
  port = null;
  updateUiState();
}

// clean data
function cleanData() {
  chrome.storage.local.get('save', function(data){
    if (data.save == true){
      console.log('not clear');
      return
    }
    chrome.storage.local.clear();
    console.log('clear');
  });
}

// trigger
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('connect-button').addEventListener(
      'click', connect);
  window.onunload = cleanData();
  // document.getElementById('send-message-button').addEventListener(
  //     'click', sendNativeMessage);
  document.getElementById('login-btn').addEventListener('click',login);
  document.getElementById('toReg-btn').addEventListener('click',toRegister);
  document.getElementById('reg-btn').addEventListener('click',register);
  document.getElementById('search-mode-btn').addEventListener('click',toSearch);
  document.getElementById('monitor-mode-btn').addEventListener('click',toMonitor);
  document.getElementById('log-out-btn').addEventListener('click',toLogin);
  document.getElementById('search-btn').addEventListener('click',search);
  document.getElementById('backToLogin-btn').addEventListener('click',toLogin);
  document.getElementById('backToSearch-btn').addEventListener('click',toSearch);
  var inputclass = document.getElementsByClassName("ipb");
  for(var i = 0;i < inputclass.length; i++){
    inputclass[i].addEventListener('click', function(){
    this.value='';
  })
  };
  status = 'connect';
  updateUiState();
});

