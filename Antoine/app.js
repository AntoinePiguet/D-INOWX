const express = require("express");
const path = require("path");

const app = express();

const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.set("port", process.env.PORT || 3000);
//Connexion port 3000
var server = http.listen(3000, () => {
  console.log("server is running on port", server.address().port);
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});
