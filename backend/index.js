const express = require("express");
const app = express();
const notesRouter = require("./routes/notes");

app.use(notesRouter);

app.get("/", (req, res) => {
  res.send("Homepage");
});

// server start
app.listen(3000, () => {
  console.log("Server start");
});
