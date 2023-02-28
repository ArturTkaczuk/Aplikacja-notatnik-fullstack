const express = require("express");
const app = express();
const notesRouter = require("./routes/notesRouter");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

// database
async function database() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Success connecting to database");
  } catch (err) {
    console.log("Error connecting to the database: " + err);
  }
}

database();

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
