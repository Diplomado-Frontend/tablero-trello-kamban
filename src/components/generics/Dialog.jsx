import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const FormDialog = (props) => {
  const [open, setOpen] = useState(props.open);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>Please set card's information</DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Card name"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={props.title}
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Card description"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={props.description}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
