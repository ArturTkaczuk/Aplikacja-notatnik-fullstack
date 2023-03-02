import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { AddNoteButton } from "./components/AddNoteButton/AddNoteButton";
import { Notes } from "./components/Notes/Notes";
import { Header } from "./components/Header/Header";
import { NoteType } from "./types";
import axios from "./axios";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function App() {
  const [notes, setNotes] = useState<NoteType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/notes");
        console.log("Notes fetched successfully!");
        setNotes(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const deleteNote = async (_id: string) => {
    try {
      // backend
      await axios.delete(`/notes/${_id}`);
      console.log("Note deleted successfully!");
      // local state manipulation
      setNotes(notes.filter((note) => note._id !== _id));
    } catch (error) {
      console.error(error);
    }
  };

  // modal
  const [open, setOpen] = useState(false);
  const [_idForModal, set_idForModal] = useState<string | undefined>(undefined);
  const [modalMode, setModalMode] = useState<"edit" | "add new">("add new");
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const handleOpenModal = (_id?: string) => {
    // if id is passed to openModal function, then modal is set to "Edit mode"
    // else modal is opened in "Add new mode"
    set_idForModal(_id);
    if (_id) {
      setModalMode("edit");
    } else {
      setModalMode("add new");
    }
    setOpen(true);
  };
  const resetModalData = () => {
    setModalTitle("");
    setModalDescription("");
  };

  const handleCloseModal = () => {
    resetModalData();
    setOpen(false);
  };

  const handleSave = async () => {
    if (modalMode === "add new") {
      try {
        // backend post request
        const res = await axios.post("/notes", {
          title: modalTitle,
          description: modalDescription,
        });
        console.log("Note added successfully!");
        // local state manipulation
        setNotes([...notes, res.data as NoteType]);
        // close modal
        handleCloseModal();
      } catch (error) {
        console.error(error);
      }
    } else if (modalMode === "edit") {
      // backend
      // local state manipulation
      console.log({ _id: _idForModal });
    }
  };

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Header />
      <AddNoteButton handleOpenModal={handleOpenModal} />
      <Notes
        handleOpenModal={handleOpenModal}
        deleteNote={deleteNote}
        notes={notes}
      />

      {/* Add/edit note modal */}
      <Button onClick={() => handleOpenModal()}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography variant="h6">
            {modalMode === "edit" ? "Edit note" : "Add new note"}
          </Typography>
          <TextField
            fullWidth
            id="standard-basic"
            label="Title"
            variant="standard"
            value={modalTitle}
            onChange={(e) => setModalTitle(e.target.value)}
          />
          <TextField
            fullWidth
            id="standard-multiline-static"
            label="Description"
            multiline
            rows={4}
            variant="standard"
            sx={{ mt: "10px" }}
            value={modalDescription}
            onChange={(e) => setModalDescription(e.target.value)}
          />
          <Box sx={{ display: "flex", gap: "20px", mt: "20px" }}>
            <Button
              onClick={handleSave}
              size="small"
              variant="contained"
              color="success"
            >
              Save
            </Button>
            <Button
              onClick={handleCloseModal}
              size="small"
              variant="contained"
              color="error"
            >
              Exit
            </Button>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
}

export default App;
