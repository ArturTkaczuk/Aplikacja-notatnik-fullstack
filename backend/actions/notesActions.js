const notes = [
  {
    id: 12334,
    title: "Wash car",
    description: "And on the way home buy groceries",
  },
  {
    id: 43432,
    title: "Visit aunt",
    description: "And dont forget to buy her chocolate",
  },
];

class noteActions {
  createNote(req, res) {
    const title = req.body.title;
    const description = req.body.description;
    const id = Math.floor(Math.random() * (10000 - 1) + 1);

    notes.push({ id, title, description });

    res.status(200).json({ id, title, description });
  }

  readNotes(req, res) {
    res.status(200).json(notes);
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
