const express = require('express');
const { getDatabase_1 } = require('./modules/notion');
const { getDatabase_2 } = require("./modules/notion");

const port = 8000;
const app = express();
const io = require("socket.io")();

app.use(express.static('public'));

app.get('/leftpage', async (req, res) => {
  const leftanswers = await getDatabase_1();
  res.json(leftanswers);
});

app.get("/rightpage", async (req, res) => {
  const rightanswers = await getDatabase_2();
  res.json(rightanswers);
});

app.listen(port, console.log(`Server started on ${port}`));

//---client side 

io.on("connection", (socket) => {
  console.log(socket.rooms);
});