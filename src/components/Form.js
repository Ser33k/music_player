import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Form = ({ open, handleClose, handleSubscribe }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleFullNameChange = (e) => setFullName(e.currentTarget.value);
  const handleEmailChange = (e) => setEmail(e.currentTarget.value);
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Music Newsletter</DialogTitle>
      <DialogContent>
        <DialogContentText>Your Weekly Dose of Music News.</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="fullName"
          label="Full name"
          type="text"
          fullWidth
          variant="standard"
          value={fullName}
          onChange={handleFullNameChange}
        />
        <TextField
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
          value={email}
          onChange={handleEmailChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={() => {
            setFullName("");
            setEmail("");
            handleSubscribe(fullName, email);
          }}
        >
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Form;
