import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/watch", async (req, res) => {
  const url = req.query.url;
  if (!url) return res.send("Missing ?url=");

  try {
    const response = await fetch(url);
    const data = await response.text();

    res.set("Content-Type", "application/vnd.apple.mpegurl");
    res.send(data);
  } catch (e) {
    res.send("Error fetching stream");
  }
});

app.listen(8080, () => {
  console.log("Repeater running on port 8080");
});
