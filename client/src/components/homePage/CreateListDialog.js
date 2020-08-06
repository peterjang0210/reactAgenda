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
      {"Create new to-do list?"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Create a new list?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={props.handleClose} color="primary">
        No
      </Button>
      <Button onClick={props.createList} color="primary" autoFocus>
        Yes
      </Button>
    </DialogActions>
  </Dialog>
);

export default CreateListModal;
