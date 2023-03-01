import { Card, CardContent, Typography, Box, Button } from "@mui/material";

type NoteProps = {
  prop: string;
};

const body = `Example line:
    Example1

  Example line2:
    Example2
  `;

export const Note = (): JSX.Element => {
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
          <Button size="small" variant="contained" color="error">
            Delete
          </Button>
        </Box>
        <Typography
          sx={{ textDecoration: "underline" }}
          variant="h5"
          component="div"
          gutterBottom
        >
          be new bykk
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          Description
        </Typography>
        <Typography variant="body1" style={{ whiteSpace: "pre-line" }}>
          {body}
        </Typography>
        <Typography sx={{ fontStyle: "italic" }}>
          Last edited: 01/03/23
        </Typography>
      </CardContent>
    </Card>
  );
};
