import { Box } from "@mui/material";
import { Note } from "./Note/Note";

type NotesProps = {
  prop: string;
};

export const Notes = (): JSX.Element => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Note />
      <Note />
    </Box>
  );
};
