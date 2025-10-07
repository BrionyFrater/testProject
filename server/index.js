const express = require("express");
const cors = require('cors');

require("dotenv/config");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

// allow JSON request bodies
app.use(express.json());

const aotInfo = require("./attack-on-titan.json");

// simple test route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.get("/api/aot", (req, res) => {
    let rand = parseInt((Math.random() * 100) % 20)

  
    res.json({
       ...aotInfo?.results[rand]
    })
})

app.get("/api/image", async (req, res) => {
  const url = req.query.url;
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  res.set("Content-Type", response.headers.get("content-type"));
  res.send(Buffer.from(buffer));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
