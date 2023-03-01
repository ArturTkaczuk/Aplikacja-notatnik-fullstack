import React, { useState } from "react";
import { Container } from "@mui/material";
import { AddNoteButton } from "./components/AddNoteButton/AddNoteButton";
import { Notes } from "./components/Notes/Notes";
import { Header } from "./components/Header/Header";

function App() {
  const [notes, setNotes] = useState([
    {
      _id: {
        $oid: "63fe338297e8fb52a4d30125",
      },
      title: "już nie taka nowa",
      description: "ale stara",
      createdAt: {
        $date: {
          $numberLong: "1677603714810",
        },
      },
      updatedAt: {
        $date: {
          $numberLong: "1677617021638",
        },
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "63fe3cb3704a5676330e7e15",
      },
      title: "Note one",
      description: "Go shopping",
      createdAt: {
        $date: {
          $numberLong: "1677606067812",
        },
      },
      updatedAt: {
        $date: {
          $numberLong: "1677606067812",
        },
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "63fe47b1eaaf22edc63467d3",
      },
      title: "Note two",
      description: "Go for a walk",
      createdAt: {
        $date: {
          $numberLong: "1677608881768",
        },
      },
      updatedAt: {
        $date: {
          $numberLong: "1677608881768",
        },
      },
      __v: 0,
    },
  ]);

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Header />
      <AddNoteButton />
      <Notes />
    </Container>
  );
}

export default App;
