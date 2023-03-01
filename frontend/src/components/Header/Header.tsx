import { Paper } from "@mui/material";

export const Header = (): JSX.Element => {
  return (
    <Paper sx={{ display: "flex", justifyContent: "center" }}>
      <h1>My notes:</h1>
    </Paper>
  );
};
