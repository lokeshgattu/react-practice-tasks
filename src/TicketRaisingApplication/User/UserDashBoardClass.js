import axios from "axios";
import React from "react";
import "./UserDashBoardClass.css";
class UserDashBoardClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketId: "",
      priority: "",
      ticketDesc: "",
      sortPriority: "",
      ticketIdErr: "",
      priorityErr: "",
      ticketDescErr: "",
      sortPriorityErr: "",
      userChecked: false,
    };
  }
  handleChange = (e, keyword) => {
    e.preventDefault();
    if (keyword === "ticketId") {
      this.setState({ ticketId: e.target.value });
    }
    if (keyword === "priority") {
      this.setState({ priority: e.target.value });
    }
    if (keyword === "ticketDesc") {
      this.setState({ ticketDesc: e.target.value });
    }
    if (keyword === "sortPriority") {
      this.setState({ sortPriority: e.target.value });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const RaisedTime = new Date();
    const fullYear = RaisedTime.getFullYear();
    const Month = RaisedTime.getMonth() + 1;
    const day = RaisedTime.getDay();
    const date = RaisedTime.getDate();
    const time = RaisedTime.getHours();
    const minutes = RaisedTime.getMinutes();
    const seconds = RaisedTime.getSeconds();
    if (
      this.state.ticketId &&
      this.state.priority &&
      this.state.ticketDesc &&
      this.state.sortPriority &&
      this.state.ticketIdErr === "" &&
      this.state.priorityErr === "" &&
      this.state.ticketDescErr === "" &&
      this.state.sortPriorityErr === ""
    ) {
      axios
        .post("http://localhost:3001/TicketsRaised", {
          ticketid: this.state.ticketId,
          ticketstamp: `Date:-${date}/${Month}/${fullYear}  Time:-${time}:${minutes}:${seconds}`,
          priority: this.state.priority,
          ticketdescription: this.state.ticketDesc,
          sortpriority: this.state.sortPriority,
          ticketstatus: "open",
        })
        .then((res) => {
          console.log(res);
          this.setState({ userChecked: true });
        })
        .catch((err) => console.log(err));
    } else {
      if (!this.state.ticketId) {
        this.setState({ ticketIdErr: "please enter the ticket id" });
      } else {
        this.setState({ ticketIdErr: "" });
      }
      if (!this.state.priority) {
        this.setState({ priorityErr: "please enter the priority" });
      } else {
        this.setState({ priorityErr: "" });
      }
      if (!this.state.ticketDesc) {
        this.setState({ ticketDescErr: "please enter the description" });
      } else {
        this.setState({ ticketDescErr: "" });
      }
      if (!this.state.sortPriority) {
        this.setState({
          sortPriorityErr: "please enter the priority in number",
        });
      } else {
        this.setState({ sortPriorityErr: "" });
      }
    }
  };
  render() {
    return (
      <>
        <h1 id="user-heading">Welcome to UserDashBoard</h1>
        <form>
          <div className="dashboard-container">
            <label>TicketId : </label>
            <input
              type="text"
              placeholder="enter id"
              onChange={(e) => this.handleChange(e, "ticketId")}
            ></input>{" "}
            <br></br>
            <p style={{ color: "red" }}>{this.state.ticketIdErr}</p>
            <label>Priority : </label>
            <select onChange={(e) => this.handleChange(e, "priority")}>
              <option>select</option>
              <option>Critical</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            {/* <input type="text" placeholder="priority eg...high,critical" ></input> <br></br> */}
            <p style={{ color: "red" }}>{this.state.priorityErr}</p>
            <label>Ticket Description : </label>
            <input
              type="text"
              placeholder="enter desc."
              onChange={(e) => this.handleChange(e, "ticketDesc")}
            ></input>{" "}
            <br></br>
            <p style={{ color: "red" }}>{this.state.ticketDescErr}</p>
            <label>sortpriority : </label>
            <select onChange={(e) => this.handleChange(e, "sortPriority")}>
              <option>select</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
            {/* <input type="text" placeholder="priority between(0-5)" ></input> <br></br> */}
            <p style={{ color: "red" }}>{this.state.sortPriorityErr}</p>
            <button onClick={(e) => this.handleSubmit(e)}>submit</button>
          </div>
        </form>
      </>
    );
  }
}
export default UserDashBoardClass;
