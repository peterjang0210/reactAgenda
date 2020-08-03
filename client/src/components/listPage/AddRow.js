import React from "react";
import {
  TableRow,
  TableCell,
  Collapse,
  Box,
  Typography,
  Table,
  TableBody,
  TextField,
  Button,
} from "@material-ui/core";

const AddRow = (props) => (
  <TableRow>
    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
      <Collapse in={props.open} timeout="auto" unmountOnExit>
        <Box margin={1}>
          <Typography variant="h6" gutterBottom component="div">
            Add Tasks
          </Typography>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell>
                  <TextField label="Name" name="name" onChange={props.changeHandler} value={props.name}/>
                </TableCell>
                <TableCell>
                  <TextField label="Category" name="category" onChange={props.changeHandler} value={props.category}/>
                </TableCell>
                <TableCell align="right">
                  <Button color="primary" onClick={props.addTask}>
                    Add
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Collapse>
    </TableCell>
  </TableRow>
);

export default AddRow;
