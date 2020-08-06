import React from "react";
import { Grid } from "@material-ui/core";
import axios from "axios";
import ListCard from "./ListCard";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import CreateListDialog from "./CreateListDialog";

class HomePage extends React.Component {
  state = {
    lists: [],
    calendarList: [],
    listID: "",
    open: false,
    currentDate: ""
  };

  componentDidMount() {
    this.getLists();
  }

  getLists() {
    axios({
      method: "GET",
      url: "/api/lists",
    }).then((lists) => {
      const calendarList = [];
      for (let i = 0; i < lists.data.length; i++) {
        const reversedDate = lists.data[i].date.split("/").reverse();
        let date = "";
        if (reversedDate[2].length > 1) {
          if (reversedDate[1].length > 1) {
            date = `20${reversedDate[0]}-${reversedDate[2]}-${reversedDate[1]}`;
          } else {
            date = `20${reversedDate[0]}-${reversedDate[2]}-0${reversedDate[1]}`;
          }
        } else {
          if (reversedDate[1].length > 1) {
            date = `20${reversedDate[0]}-0${reversedDate[2]}-${reversedDate[1]}`;
          } else {
            date = `20${reversedDate[0]}-0${reversedDate[2]}-0${reversedDate[1]}`;
          }
        }
        for (let j = 0; j < lists.data[i].tasks.length; j++) {
          const event = {
            title: lists.data[i].tasks[j].name,
            date: date,
          };
          calendarList.push(event);
        }
      }
      this.setState({ lists: lists.data, calendarList: calendarList });
    });
  }

  handleDateClick = (arg) => {
    const reversedDate = arg.dateStr.split("-").reverse();
    const date = `${reversedDate[1].substring(1)}/${reversedDate[0].substring(
      1
    )}/${reversedDate[2].substring(2)}`;
    for (let i = 0; i < this.state.lists.length; i++) {
      if (this.state.lists[i].date === date) {
        this.setState({ listID: this.state.lists[i]._id });
        if (this.state.listID) {
          this.openList();
        }
      } else {
        if(i === this.state.lists.length - 1){
          this.handleClickOpen(date);
        }
      }
    }
  };

  openList() {
    const listID = this.state.listID;
    window.location.href = `/lists/${listID}`;
  }

  handleClickOpen = (date) => {
    this.setState({ open: true, currentDate: date });
  };

  handleClose = (event) => {
    this.setState({ open: false });
  };

  createList = (event) => {
    axios({
      method: "POST",
      url: "/api/lists",
      data: {
        date: this.state.currentDate
      }
    }).then(newList => {
      this.setState({open: false, listID: newList.data._id});
      this.openList();
    })
  }

  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridDay"
            titleFormat={{
              weekday: "short",
              month: "numeric",
              day: "numeric",
              omitCommas: true,
            }}
            events={this.state.calendarList}
            eventColor="#378006"
            dateClick={this.handleDateClick}
          />
        </Grid>
        <CreateListDialog
          open={this.state.open}
          handleClose={this.handleClose}
          createList={this.createList}
        />
        {/* {this.state.lists &&
          this.state.lists.map((listItem) => (
            <ListCard
              key={listItem._id}
              {...listItem}
              openList={this.openList}
            />
          ))} */}
      </Grid>
    );
  }
}

export default HomePage;
