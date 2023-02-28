const express = require("express");
const app = express();
const notesRouter = require("./routes/notesRouter");
const bodyParser = require("body-parser");
require("dotenv").config();

// parsers
app.use(bodyParser.json());

// routes
app.use("/api/v1/", notesRouter);

// homepage
app.get("/", (req, res) => {
  res.send("Homepage");
});

// server start
app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
