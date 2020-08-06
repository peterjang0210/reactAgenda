import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from "@material-ui/core";

const CreateListModal = (props) => (
  <Dialog
    open={props.open}
    onClose={props.handleClose}
  >
    <DialogTitle id="alert-dialog-title">
      {"Create new to-do list for this date?"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Create a new list?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={props.handleClose} color="primary">
        Disagree
      </Button>
      <Button onClick={props.createList} color="primary" autoFocus>
        Agree
      </Button>
    </DialogActions>
  </Dialog>
);

export default CreateListModal;
