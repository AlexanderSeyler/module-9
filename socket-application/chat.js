var socket = io();

var messages = document.getElementById("messages");
var form = document.getElementById("form");
var input = document.getElementById("input");
var onlineUsersDiv = document.getElementById("online-users");
var typingIndicator = document.getElementById("typingIndicator");
var isTyping = false;
var typingTimer;

var urlParams = new URLSearchParams(window.location.search);
var nickname = urlParams.get("nickname");

socket.emit("set nickname", nickname);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value);
    input.value = "";
    isTyping = false;
    socket.emit("typing", { isTyping: isTyping, nickname: nickname });
  }
});

input.onkeydown = function () {
  if (!isTyping) {
    isTyping = true;
    socket.emit("typing", { isTyping: isTyping, nickname: nickname });
  }
  clearTimeout(typingTimer);
  typingTimer = setTimeout(function () {
    isTyping = false;
    socket.emit("typing", { isTyping: isTyping, nickname: nickname });
  }, 5000);
};

input.onkeyup = function () {
  clearTimeout(typingTimer);
  if (input.value.trim() === "") {
    isTyping = false;
    socket.emit("typing", { isTyping: isTyping, nickname: nickname });
  } else {
    typingTimer = setTimeout(function () {
      isTyping = false;
      socket.emit("typing", { isTyping: isTyping, nickname: nickname });
    }, 2000);
  }
};

socket.on("chat message", function (data) {
  var item = document.createElement("li");
  item.textContent = data.nickname + ": " + data.message;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

socket.on("user connected", function (nickname) {
  var connectedMsg = document.createElement("li");
  connectedMsg.textContent = nickname + " connected";
  messages.appendChild(connectedMsg);
});

socket.on("user disconnected", function (nickname) {
  var disconnectedMsg = document.createElement("li");
  disconnectedMsg.textContent = nickname + " disconnected";
  messages.appendChild(disconnectedMsg);
});

socket.on("online users", function (users) {
  onlineUsersDiv.innerHTML = "Online users: " + users.join(", ");
});

socket.on("typing", function (data) {
  if (data.isTyping) {
    typingIndicator.textContent = data.nickname + " is typing...";
  } else {
    typingIndicator.textContent = "";
  }
});
