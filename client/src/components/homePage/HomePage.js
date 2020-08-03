import React from "react";
import { Grid } from "@material-ui/core";
import axios from "axios";
import ListCard from "./ListCard";

class HomePage extends React.Component {
  state = {
    lists: [],
  };

  componentDidMount() {
    this.getLists();
  }

  getLists() {
    axios({
      method: "GET",
      url: "/api/lists",
    }).then((lists) => {
      this.setState({ lists: lists.data });
    });
  }

  openList(event) {
    event.preventDefault();
    const listID = event.currentTarget.value;
    window.location.href = `/lists/${listID}`;
  }

  render() {
    return (
      <Grid container spacing={3}>
        {this.state.lists &&
          this.state.lists.map((listItem) => (
            <ListCard key={listItem._id} {...listItem} openList={this.openList}/>
          ))}
      </Grid>
    );
  }
}

export default HomePage;
