const express = require("express");
const router = express.Router();
const noteActions = require("../actions/notesActions");

// Create note
router.post("/notes", noteActions.createNote);

// Read notes
router.get("/notes", noteActions.readNotes);

// Update note
router.put("/notes/:id", noteActions.updateNote);

// Delete note
router.delete("/notes/:id", noteActions.deleteNote);

module.exports = router;
