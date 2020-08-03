import React from "react";
import TaskCard from "./TaskCard";
import { TableBody } from "@material-ui/core";

const List = (props) => (
  <TableBody>
    {props.tasks &&
      props.tasks.map((task) => <TaskCard key={task._id} {...task} />)}
  </TableBody>
);

export default List;
