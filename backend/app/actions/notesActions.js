import Note from "../database/models/noteModel.js";

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
      res.status(200).json(newNote);
    } catch (error) {
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

  async updateNote(req, res) {
    const title = req.body.title;
    const description = req.body.description;
    const id = req.params.id;

    try {
      await Note.findOneAndUpdate(
        { _id: id },
        { title, description, updatedAt: Date.now() }
      );
      res.sendStatus(200);
    } catch (error) {
      res.status(422).json({ error: error.message });
    }
  }

  async deleteNote(req, res) {
    const id = req.params.id;

    try {
      await Note.deleteOne({ _id: id });
      res.sendStatus(200);
    } catch (error) {
      res.status(422).json({ error: error.message });
    }
  }
}

export default new noteActions();
