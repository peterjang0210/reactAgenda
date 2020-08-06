import React from "react";
import TaskCard from "./TaskCard";
import { TableBody, TableRow, TableCell, IconButton } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Alert } from "@material-ui/lab";
import AddRow from "./AddRow";

const List = (props) => (
  <TableBody>
    {props.tasks &&
      props.tasks.map((task) => (
        <TaskCard
          key={task._id}
          {...task}
          completeTask={props.completeTask}
          changeToEdit={props.changeToEdit}
          changeHandler={props.changeHandler}
          edit={props.edit}
          editName={props.editName}
          editTask={props.editTask}
        />
      ))}
    <TableRow>
      <TableCell>
        <IconButton
          aria-label="expand row"
          size="small"
          onClick={props.setOpen}
        >
          {props.open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </TableCell>
    </TableRow>
    {props.redAlert ? (
      <Alert severity="error" onClose={props.toggleRedAlert}>
        Name or category field is empty
      </Alert>
    ) : (
      ""
    )}
    <AddRow
      open={props.open}
      addTask={props.addTask}
      changeHandler={props.changeHandler}
      name={props.name}
      category={props.category}
    />
  </TableBody>
);

export default List;
