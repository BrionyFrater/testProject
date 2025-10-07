const express = require("express");
require("dotenv/config");

const app = express();
const PORT = process.env.PORT || 3000;

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
        character: aotInfo?.results[rand]
    })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
