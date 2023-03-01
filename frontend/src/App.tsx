import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { AddNoteButton } from "./components/AddNoteButton/AddNoteButton";
import { Notes } from "./components/Notes/Notes";
import { Header } from "./components/Header/Header";
import { NoteType } from "./types";
import axios from "axios";

function App() {
  let [notes, setNotes] = useState<NoteType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/notes");
        console.log(res.data);
        setNotes(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Header />
      <AddNoteButton />
      <Notes notes={notes} />
    </Container>
  );
}

export default App;
