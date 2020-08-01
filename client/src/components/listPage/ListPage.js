import React from "react";
import List from "./List";
import Header from "./Header";
import { Grid, Paper } from "@material-ui/core";
import axios from "axios";

class ListPage extends React.Component {
  state = {};

//   componentDidMount(){
//       this.getList();
//   }

//   getList(){
//     axios({
//         method: "GET",
//         url:"/api/lists"
//     }).then(lists)
//   }

  render() {
    return (
      <Grid spacing={3}>
        <Grid item>
          <Paper>
            <Header />
          </Paper>
        </Grid>
        <Grid>
          <Paper>
            <List />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default ListPage;
