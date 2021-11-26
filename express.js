let express = require("express");

let app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "default get request" });
});

app.post("/", (req, res) => {
  res.status(200).json({ message: "default post request" });
});

app.get("/demo", (req, res) => {
  res.status(200).json({ message: "demo get request" });
});

app.post("/demo", (req, res) => {
  res.status(200).json({ message: "demo post request" });
});

app.listen(8080, () => {
  console.log("server started");
});
