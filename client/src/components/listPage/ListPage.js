import React from "react";
import List from "./List";
import Header from "./Header";
import { Grid, Paper, Table, TableContainer, TableHead, TableRow, TableCell} from "@material-ui/core";
import axios from "axios";

class ListPage extends React.Component {
  state = {
    list: {},
    tasks: []
  };

  componentDidMount() {
    this.getList();
  }

  getList() {
    const listID = window.location.pathname.substring(7);
    axios({
      method: "GET",
      url: `/api/lists/${listID}`,
    }).then((list) => {
      this.setState({ list: list.data, tasks: list.data.tasks });
    });
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tasks</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <List tasks={this.state.tasks}/>
        </Table>
      </TableContainer>
    );
  }
}

export default ListPage;
