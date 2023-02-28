const express = require("express");
const router = express.Router();

// Create
router.post("/notes", (req, res) => {
  res.send("Create note");
});

// Read
router.get("/notes", (req, res) => {
  res.send("Get all notes");
});

// Update
router.put("/notes/:id", (req, res) => {
  const id = req.params.id;
  res.send("Update note with id: " + id);
});

// Delete
router.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  res.send("Delete note with id: " + id);
});

module.exports = router;
