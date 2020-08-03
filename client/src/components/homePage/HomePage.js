import React from "react";
import { Grid } from "@material-ui/core";
import axios from "axios";
import ListCard from "./ListCard";

class HomePage extends React.Component {
  state = {
    lists: [],
  };

  componentDidMount() {
    this.getList();
  }

  getList() {
    axios({
      method: "GET",
      url: "/api/lists",
    }).then((lists) => {
      this.setState({ lists: lists.data });
    });
  }

  render() {
    return (
      <Grid spacing={3}>
          {this.state.lists && this.state.lists.map(listItem => (
              <ListCard key={listItem._id} date={listItem.date}/>
          ))}
      </Grid>
    );
  }
}

export default HomePage;
