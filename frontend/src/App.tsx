import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { AddNoteButton } from "./components/AddNoteButton/AddNoteButton";
import { Notes } from "./components/Notes/Notes";
import { Header } from "./components/Header/Header";
import { NoteType } from "./types";
import axios from "./axios";

function App() {
  let [notes, setNotes] = useState<NoteType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/notes");
        console.log(res.data);
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
      // state manipulation
      setNotes(notes.filter((note) => note._id !== _id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Header />
      <AddNoteButton />
      <Notes deleteNote={deleteNote} notes={notes} />
    </Container>
  );
}

export default App;
