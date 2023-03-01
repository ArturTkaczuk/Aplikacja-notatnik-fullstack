const express = require("express");
const app = express();
const notesRouter = require("./routes/notesRouter");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// database
require("./database/mongoose");

// middleware
app.use(cors());
app.use(bodyParser.json());

// routes
app.use("/api/v1/", notesRouter);

module.exports = app;
