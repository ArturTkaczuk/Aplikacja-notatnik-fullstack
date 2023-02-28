const express = require("express");
const app = express();
const notesRouter = require("./routes/notesRouter");
const bodyParser = require("body-parser");
require("dotenv").config();
const Note = require("./database/models/noteModel");

// database
require("./database/mongoose");

// parsers
app.use(bodyParser.json());

// routes
app.use("/api/v1/", notesRouter);

// server start
app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
