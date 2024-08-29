import React from "react";
import axios from "axios";
import "./StylingFiles/TicketsRaisedClass.css";

class TicketsRaisedClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      raisedTickets: [],
      closedTickets: [],
      activeTicketId: null,
      feedback: "",
      feedbackEmpty: "",
      solvebutton: false,
    };
  }

  componentDidMount() {
    // axios.get("http://localhost:3001/TicketsRaised").then((res) => {
    //   this.setState({ raisedTickets: res.data });
    // });
    const { ticketsraisedinfo } = this.props;
    this.setState({ raisedTickets: ticketsraisedinfo }); //Tickets getting stored and displayed from raisedTickets, so ticketsraisedinfo is of sorted order tickets coming as params through props, so assigning that to raisedTickets will display them in sorted order and on deleting also, it will delete from UI.
  }

  onSolveTicket = (id) => {
    this.setState({ activeTicketId: id, solvebutton: true });
  };

  handleChange = (e, keyword) => {
    if (keyword === "feedback") {
      this.setState({ feedback: e.target.value });
    }
  };

  onClosedTickets = (e, id) => {
    e.preventDefault();
    const { feedback, raisedTickets } = this.state;

    if (feedback) {
      const closedTicket = raisedTickets.find((item) => item.ticketid === id);
      const closedTime = new Date();
      const fullYear = closedTime.getFullYear();
      const Month = closedTime.getMonth();
      const day = closedTime.getDay();
      const date = closedTime.getDate();
      const time = closedTime.getHours();
      const minutes = closedTime.getMinutes();
      const seconds = closedTime.getSeconds();

      axios
        .post("http://localhost:3001/TicketsClosed", {
          ticketid: closedTicket.ticketid,
          ticketstamp: closedTicket.ticketstamp,
          priority: closedTicket.priority,
          ticketdescription: closedTicket.ticketdescription,
          ticketsolution: feedback,
          sortpriority: closedTicket.sortpriority,
          ticketstatus: "closed",
          ticketclosedTime: `Day:-${day}  Date:-${date}/${Month}/${fullYear}  Time:-${time}:${minutes}:${seconds}`,
          id: closedTicket.id,
        })
        .then((res) => {
          console.log("Ticket closed successfully:", res);
          console.log(closedTicket.ticketid);
        })
        .catch((error) => console.log("Error closing ticket:", error));

      // axios
      //   .post("http://localhost:3001/TicketsRaised", {
      //     ticketid: "7rbf",
      //     ticketraisedtime: "12:00PM",
      //     priority: "Critical",
      //     ticketdescription: "Issue with login",
      //     sortpriority: "1",
      //     ticketstatus: "open",
      //   })
      //   .then((res) => {
      //     console.log("Ticket closed successfully:", res);
      //     console.log(closedTicket.ticketid);
      //   })
      //   .catch((error) => console.log("Error closing ticket:", error));

      axios
        .delete(`http://localhost:3001/TicketsRaised/${closedTicket.id}`)
        .then((res) => {
          console.log("Ticket deleted successfully:", res);
          this.setState((prevState) => ({
            raisedTickets: prevState.raisedTickets.filter(
              (item) => item.ticketid !== id
            ),
            activeTicketId: null,
            feedback: "",
            feedbackEmpty: "",
          }));
        })
        .catch((error) => console.log("Error deleting ticket:", error));
    } else {
      this.setState({
        feedbackEmpty: "Please enter the solution, it is mandatory!",
      });
    }
  };

  onBackDashboardPage = (e) => {
    const { navigate } = this.props.navigate;
    navigate(`/admindashboard/:username`);
  };

  render() {
    const { activeTicketId, feedbackEmpty } = this.state;
    // const temp = [...this.state.raisedTickets].sort(
    //   (a, b) => a.sortpriority - b.sortpriority
    // );
    // console.log("sorted tickets:", temp);
    return (
      <div className="ticketsback">
        <h1>My Dear Admin, Open Tickets here are waiting for you to solve!</h1>
        <div className="opentickets">
          {this.state.raisedTickets.map((item) => (
            <div
              key={item.ticketid}
              className={
                this.state.solvebutton &&
                item.ticketid === this.state.activeTicketId
                  ? "aftertickets"
                  : "tickets"
              }
            >
              <h1>Priority: {item.priority}</h1>
              <h2>SortPriority: {item.sortpriority}</h2>
              <p className="ticketdata">Ticket TimeStamp: {item.ticketstamp}</p>
              <p className="ticketdata">
                Ticket Description: {item.ticketdescription}
              </p>
              <p className="ticketdata">Ticket Status: {item.ticketstatus}</p>
              <button
                className="adminsolve"
                onClick={() => this.onSolveTicket(item.ticketid)}
              >
                Solve Ticket
              </button>
              {activeTicketId === item.ticketid ? (
                <div>
                  <h2>Please Provide a solution:</h2>
                  <br />
                  <textarea
                    onChange={(e) => this.handleChange(e, "feedback")}
                    cols="40"
                    rows="10"
                    placeholder="Enter the solution"
                  ></textarea>
                  <br />
                  <button
                    onClick={(e) => this.onClosedTickets(e, item.ticketid)}
                    className="opensolve"
                  >
                    Submit & Close Ticket
                  </button>
                  <h2 style={{ color: "red", fontSize: "18px" }}>
                    {feedbackEmpty}
                  </h2>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          ))}
        </div>
        <div className="backbutton">
          <button
            onClick={(e) => this.onBackDashboardPage(e)}
            className="adminback"
          >
            Back to Admin DashBoard
          </button>
        </div>
      </div>
    );
  }
}

export default TicketsRaisedClass;
