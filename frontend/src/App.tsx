import { useState } from "react";
import { Container } from "@mui/material";
import { AddNoteButton } from "./components/AddNoteButton/AddNoteButton";
import { Notes } from "./components/Notes/Notes";
import { Header } from "./components/Header/Header";
import { NoteType } from "./types";

function App() {
  const [notes, setNotes] = useState<NoteType[]>([
    {
      _id: "63fe338297e8fb52a4d30125",
      title: "już nie taka nowa",
      description: "ale stara",
      createdAt: "2023-02-28T17:01:54.810Z",
      updatedAt: "2023-02-28T20:43:41.638Z",
      __v: 0,
    },
    {
      _id: "63fe3cb3704a5676330e7e15",
      title: "Note one",
      description: "Go shopping",
      createdAt: "2023-02-28T17:41:07.812Z",
      updatedAt: "2023-02-28T17:41:07.812Z",
      __v: 0,
    },
    {
      _id: "63fe47b1eaaf22edc63467d3",
      title: "Note two",
      description: "Go for a walk",
      createdAt: "2023-02-28T18:28:01.768Z",
      updatedAt: "2023-02-28T18:28:01.768Z",
      __v: 0,
    },
  ]);

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Header />
      <AddNoteButton />
      <Notes notes={notes} />
    </Container>
  );
}

export default App;
