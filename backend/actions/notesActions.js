const Note = require("../database/models/noteModel");

class noteActions {
  async createNote(req, res) {
    const title = req.body.title;
    const description = req.body.description;

    const newNote = new Note({
      title,
      description,
    });

    try {
      await newNote.save();
      console.log("Successfully added new note");
      res.status(200).json({ title, description });
    } catch (error) {
      console.log("Error occurred: " + error);
      res.status(422).json({ error: error.message });
    }
  }

  async readNotes(req, res) {
    try {
      const allNotes = await Note.find({});
      res.status(200).json(allNotes);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  updateNote(req, res) {
    const title = req.body.title;
    const description = req.body.description;
    const id = req.params.id;

    const objIndex = notes.findIndex((obj) => obj.id == id);

    if (objIndex == -1) {
      res.status(422).json({ error: "Wrong note id" });
    } else {
      notes[objIndex].title = title;
      notes[objIndex].description = description;

      res.status(200).json(notes[objIndex]);
    }
  }

  deleteNote(req, res) {
    const id = req.params.id;

    const objIndex = notes.findIndex((obj) => obj.id == id);

    if (objIndex == -1) {
      res.status(422).json({ error: "Wrong note id" });
    } else {
      notes.splice(objIndex, 1);

      res.status(200).send("Note deleted");
    }
  }
}

module.exports = new noteActions();
