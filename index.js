import express from "express";
import socket from "socket.io";

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/control", (req, res) => {
  res.render("pages/control");
});

app.get("/room", (req, res) => {
  res.render("pages/room");
});

const server = app.listen(8000, () => {
  console.log("running on PORT 8000");
});

const io = socket(server);

io.on("connection", (socket) => {
  console.log("made socket connection", socket.id);
});
