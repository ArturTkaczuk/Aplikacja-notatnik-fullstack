import { Button } from "@mui/material";

export const AddNoteButton = (): JSX.Element => {
  return (
    <Button
      variant="contained"
      color="success"
      size="large"
      sx={{ width: "200px" }}
    >
      Add note +
    </Button>
  );
};
