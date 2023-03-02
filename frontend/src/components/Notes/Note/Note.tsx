import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import { NoteType } from "../../../types";

type NoteProps = {
  note: NoteType;
  deleteNote: (_id: string) => void;
  handleOpenModal: (_id?: string) => void;
};

export const Note = ({ note, deleteNote }: NoteProps): JSX.Element => {
  const date = new Date(note.updatedAt).toISOString().split("T")[0];

  return (
    <Card sx={{ minWidth: 275, backgroundColor: "lightyellow" }}>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <Box sx={{ display: "flex", gap: "10px", width: "100%" }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            Title
          </Typography>
          <Button sx={{ ml: "auto" }} size="small" variant="contained">
            Edit
          </Button>
          <Button
            onClick={() => deleteNote(note._id)}
            size="small"
            variant="contained"
            color="error"
          >
            Delete
          </Button>
        </Box>
        <Typography
          sx={{ textDecoration: "underline" }}
          variant="h5"
          component="div"
          gutterBottom
        >
          {note.title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          Description
        </Typography>
        <Typography variant="body1" style={{ whiteSpace: "pre-line" }}>
          {note.description}
        </Typography>
        <Typography sx={{ fontStyle: "italic" }}>
          Last edited: {date}
        </Typography>
      </CardContent>
    </Card>
  );
};
