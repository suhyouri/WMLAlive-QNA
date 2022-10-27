const { getDatabase_1 } = require('./notion');
const { getDatabase_2 } = require("./notion");
const cors = require("cors");
// const PORT = 8000;
const HOST = "localhost";
const { Client } = require("@notionhq/client");
let bodyParser = require("body-parser");
let jsonParser = bodyParser.json();
require("dotenv").config();
//socket.io
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: ["https://admin.socket.io"],
    credentials: true,
  },
});

//database 
const databaseId = process.env.NOTION_API_DATABASE;
const databaseId_2 = process.env.NOTION_API_DATABASE_2;
const portNum = process.env.PORT;
const notion = new Client({ auth: process.env.NOTION_API_KEY });
app.use(cors());

app.use(express.static('public'));

// ---> 1. Query a database
app.get('/leftpage', async (req, res) => {
  const leftanswers = await getDatabase_1();
  res.json(leftanswers);
});

app.get("/rightpage", async (req, res) => {
  const rightanswers = await getDatabase_2();
  res.json(rightanswers);
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
    console.log("message: " + msg);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

// app.listen(portNum, HOST, () => {
//   console.log("Starting proxy at " + HOST + ":" + portNum);
// });

//socket ver
server.listen(portNum, HOST, () => {
  console.log("Starting proxy at " + HOST + ":" + portNum);
});

// ---> 2. Create a page
app.post("/submitFormToNotion_left", jsonParser, async (req, res) => {
    const nickname = req.body.Nickname;
    const content = req.body.Content;

    try {
      const response = await notion.pages.create({
        parent: { database_id: databaseId },
        properties: {
          Nickname: {
            title: [
              {
                text: {
                  content: nickname,
                },
              },
            ],
          },
          Content: {
            rich_text: [
              {
                text: {
                  content: content,
                },
              },
            ],
          },
        },
      });
    //   console.log(response);
      console.log("Success!_leftInput");
    } catch (err) {
      console.log(err);
    }
});

app.post("/submitFormToNotion_right", jsonParser, async (req, res) => {
  const nickname = req.body.Nickname;
  const content = req.body.Content;

  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId_2 },
      properties: {
        Nickname: {
          title: [
            {
              text: {
                content: nickname,
              },
            },
          ],
        },
        Content: {
          rich_text: [
            {
              text: {
                content: content,
              },
            },
          ],
        },
      },
    });
    //   console.log(response);
    console.log("Success!_rightInput");
  } catch (err) {
    console.log(err);
  }
});

