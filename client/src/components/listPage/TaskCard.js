import React from "react";
import { TableRow, TableCell, Button } from "@material-ui/core";

const TaskCard = (props) => (
  <TableRow>
    <TableCell>{props.name}</TableCell>
    {props.completed && props.completed ? (
      <TableCell align="right">Completed</TableCell>
    ) : (
      <TableCell align="right">
        <Button color="primary">Complete</Button>
      </TableCell>
    )}
  </TableRow>
);

export default TaskCard;
