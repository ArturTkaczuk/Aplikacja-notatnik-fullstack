import { Button } from "@mui/material";

type AddNoteButtonProps = {
  handleOpenModal: (_id?: string) => void;
};

export const AddNoteButton = ({
  handleOpenModal,
}: AddNoteButtonProps): JSX.Element => {
  return (
    <Button
      onClick={() => handleOpenModal()}
      variant="contained"
      color="success"
      size="large"
      sx={{ width: "200px" }}
    >
      Add note +
    </Button>
  );
};
