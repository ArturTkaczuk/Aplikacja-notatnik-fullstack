const express = require("express");
const app = express();
const notesRouter = require("./app/routes/notesRouter");
const bodyParser = require("body-parser");
require("dotenv").config();
const Note = require("./app/database/models/noteModel");

// database
require("./app/database/mongoose");

// parsers
app.use(bodyParser.json());

// routes
app.use("/api/v1/", notesRouter);

// server start
app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
