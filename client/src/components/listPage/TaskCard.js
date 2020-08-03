import React from "react";
import { TableRow, TableCell, Button } from "@material-ui/core";

const TaskCard = (props) => (
  <TableRow>
    {props.completed && props.completed ? (
      <TableCell className="completedTask">{props.name}</TableCell>
    ) : (
      <TableCell>{props.name}</TableCell>
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
