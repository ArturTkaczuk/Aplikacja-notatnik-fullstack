const express = require("express");
const app = express();
const notesRouter = require("./routes/notesRouter");
const bodyParser = require("body-parser");
require("dotenv").config();

// database
require("./database/mongoose");

// parsers
app.use(bodyParser.json());

// routes
app.use("/api/v1/", notesRouter);

module.exports = app;
