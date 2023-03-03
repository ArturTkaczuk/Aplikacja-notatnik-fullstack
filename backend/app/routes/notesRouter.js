import express from "express";
import noteActions from "../actions/notesActions.js";

const router = express.Router();

// Create note
router.post("/notes", noteActions.createNote);

// Read notes
router.get("/notes", noteActions.readNotes);

// Update note
router.put("/notes/:id", noteActions.updateNote);

// Delete note
router.delete("/notes/:id", noteActions.deleteNote);

export default router;
