const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);

const onlineUsers = {};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/nickname.html");
});

app.get("/chat", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.on("set nickname", (nickname) => {
    if (nickname) {
      onlineUsers[socket.id] = nickname;
      io.emit("user connected", nickname);
      io.emit("online users", Object.values(onlineUsers));
    }
  });

  socket.on("disconnect", () => {
    if (onlineUsers[socket.id]) {
      const disconnectedNickname = onlineUsers[socket.id];
      delete onlineUsers[socket.id];
      io.emit("user disconnected", disconnectedNickname);
      io.emit("online users", Object.values(onlineUsers));
    }
  });

  socket.on("chat message", (msg) => {
    if (onlineUsers[socket.id]) {
      io.emit("chat message", {
        message: msg,
        nickname: onlineUsers[socket.id],
      });
    }
  });

  socket.on("typing", (data) => {
    if (onlineUsers[socket.id]) {
      io.emit("typing", { isTyping: data.isTyping, nickname: data.nickname });
    }
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
