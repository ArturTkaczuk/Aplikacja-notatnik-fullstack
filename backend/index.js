const express = require("express");
const app = express();
const notesRouter = require("./routes/notes");
const bodyParser = require("body-parser");

// parsers
app.use(bodyParser.json());

// routes
app.use("/api/v1/", notesRouter);

// homepage
app.get("/", (req, res) => {
  res.send("Homepage");
});

// server start
app.listen(3000, () => {
  console.log("Server start");
});
