const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");
const cors = require("cors");

//dot env configuation
dotenv.config();
//configuring express app
const app = express();
//adding cors
app.use(cors());
//configuring port number
const PORT = process.env.PORT || 5000;
//route
app.get("/", (req, res) => {
  res.send("Server is running ");
});
//chats route
app.get("/api/chats", (req, res) => res.send(chats));
//chat by id name
app.get("/api/chats/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

app.listen(PORT, console.log("server is running at " + PORT));
