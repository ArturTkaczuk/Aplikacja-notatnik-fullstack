import { Box } from "@mui/material";
import { NoteType } from "../../types";
import { Note } from "./Note/Note";

type NotesProps = {
  notes: NoteType[];
  deleteNote: (_id: string) => void;
};

export const Notes = ({ notes, deleteNote }: NotesProps): JSX.Element => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {notes.map((note) => {
        return <Note key={note._id} deleteNote={deleteNote} note={note} />;
      })}
    </Box>
  );
};
