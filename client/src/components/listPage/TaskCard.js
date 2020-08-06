import React from "react";
import {
  TableRow,
  TableCell,
  Button,
  Typography,
  TextField,
} from "@material-ui/core";

const TaskCard = (props) => (
  <TableRow>
    {props.completed && props.completed ? (
      <TableCell>
        <Typography className="completedTask">{props.name}</Typography>
      </TableCell>
    ) : (
      <TableCell>
        {props.edit ? (
          <form>
            <TextField
              onChange={props.changeHandler}
              value={props.editName}
              name="editName"
            />
            <Button color="primary" onClick={props.editTask} value={props._id}>Edit Name</Button>
          </form>
        ) : (
          <Typography onClick={props.changeToEdit}>{props.name}</Typography>
        )}
      </TableCell>
    )}
    {props.completed && props.completed ? (
      <TableCell align="right">Completed</TableCell>
    ) : (
      <TableCell align="right">
        <Button color="primary" value={props._id} onClick={props.completeTask}>
          Complete
        </Button>
      </TableCell>
    )}
  </TableRow>
);

export default TaskCard;
