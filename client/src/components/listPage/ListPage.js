import React from "react";
import List from "./List";
import Header from "./Header";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";
import axios from "axios";

class ListPage extends React.Component {
  state = {
    list: {},
    tasks: [],
    open: false,
    name: "",
    category: "",
    redAlert: false,
    edit: false,
    editName: "",
  };

  componentDidMount() {
    this.getList();
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  toggleRedAlert = () => {
    this.setState({ redAlert: !this.state.redAlert });
  };

  changeToEdit = (event) => {
    this.setState({ edit: true });
  };

  editTask = (event) => {
    const taskID = event.currentTarget.value;
    axios({
      method: "PUT",
      url: `/api/tasks/${taskID}`,
      data: {
        name: this.state.editName,
      },
    }).then((updatedTask) => {
      this.setState({ edit: false, editName: "" });
      this.getList();
    });
  };

  getList() {
    const listID = window.location.pathname.substring(7);
    axios({
      method: "GET",
      url: `/api/lists/${listID}`,
    }).then((list) => {
      this.setState({ list: list.data, tasks: list.data.tasks });
    });
  }

  completeTask = (event) => {
    event.preventDefault();
    const taskID = event.currentTarget.value;
    axios({
      method: "PUT",
      url: `/api/tasks/${taskID}`,
      data: {
        completed: true,
      },
    }).then((updatedTask) => {
      this.getList();
    });
  };

  setOpen = () => {
    this.setState({ open: !this.state.open });
  };

  addTask = (event) => {
    event.preventDefault();
    if (this.state.name && this.state.category) {
      const newTask = {
        name: this.state.name,
        categroy: this.state.category,
        list: window.location.pathname.substring(7),
        completed: false,
      };
      axios({
        method: "POST",
        url: "/api/tasks",
        data: newTask,
      }).then((newTaks) => {
        this.getList();
        this.setState({ name: "", category: "" });
      });
    } else {
      this.setState({ redAlert: true });
    }
  };

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
          <List
            tasks={this.state.tasks}
            completeTask={this.completeTask}
            open={this.state.open}
            setOpen={this.setOpen}
            redAlert={this.state.redAlert}
            toggleRedAlert={this.toggleRedAlert}
            changeHandler={this.changeHandler}
            name={this.state.name}
            category={this.state.category}
            addTask={this.addTask}
            changeToEdit={this.changeToEdit}
            editName={this.state.editName}
            edit={this.state.edit}
            editTask={this.editTask}
          />
        </Table>
      </TableContainer>
    );
  }
}

export default ListPage;
