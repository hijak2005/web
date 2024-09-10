'use strict';

let username = document.getElementById('username');
let password = document.getElementById('password');
let usernameError = document.querySelector('#username+p');
let passwordError = document.querySelector('#password+p');
let submitDone = document.getElementById('good-to-go');

function submit() {
  if (username.value.length < 12) {
    usernameError.style.visibility = 'visible';
  } else {
    usernameError.style.visibility = 'hidden';
  }

  if (password.value.length < 8) {
    passwordError.style.visibility = 'visible';
  } else {
    passwordError.style.visibility = 'hidden';
  }

  if ((usernameError.style.visibility === 'hidden') &&
      (passwordError.style.visibility === 'hidden')) {
    submitDone.style.visibility = 'visible';
    setTimeout(function() {
      submitDone.style.visibility = 'hidden';
    }, 2000);
  }
}

function fastValidUsername() {
  if (username.value.length < 12) {
    usernameError.style.visibility = 'visible';
  } else {
    usernameError.style.visibility = 'hidden';
  }
}

function fastValidPassword() {
  if (password.value.length < 8) {
    passwordError.style.visibility = 'visible';
  } else {
    passwordError.style.visibility = 'hidden';
  }
}