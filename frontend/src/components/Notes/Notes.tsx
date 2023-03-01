import { Box } from "@mui/material";
import { NoteType } from "../../types";
import { Note } from "./Note/Note";

type NotesProps = {
  notes: NoteType[];
};

export const Notes = ({ notes }: NotesProps): JSX.Element => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {notes.map((note) => {
        return <Note note={note} />;
      })}
    </Box>
  );
};
