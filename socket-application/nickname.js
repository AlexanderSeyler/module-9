var socket = io();

var nicknameForm = document.getElementById("nicknameForm");
var nicknameInput = document.getElementById("nicknameInput");

nicknameForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var nickname = nicknameInput.value.trim();
  if (nickname) {
    window.location.href = "/chat?nickname=" + encodeURIComponent(nickname); // Redirect to the chat page with the nickname as a query parameter
  }
});
