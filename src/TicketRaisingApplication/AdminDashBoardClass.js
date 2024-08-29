import React from "react";
import axios from "axios";
import "./StylingFiles/AdminDashBoardClass.css";

class AdminDashBoardClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      raisedTickets: [],
      closedTickets: [],
      activeTicketId: null,
      feedback: "",
      feedbackEmpty: "",
      solvebutton: false,
      errormsgstatus: false,
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/TicketsRaised").then((res) => {
      this.setState({ raisedTickets: res.data });
    });
  }

  openRaisedTickets = () => {
    const temp = [...this.state.raisedTickets].sort(
      (a, b) => a.sortpriority - b.sortpriority
    );
    console.log("sorted tickets:", temp);

    // this.setState({ raisedTickets: temp }); //Don't assign the temp to raisedTickets, directly assign temp in place of this.state.raisedTickets.
    const { navigate } = this.props.navigate;
    const ticketsraised = JSON.stringify(temp); //data is stringifying
    const encodedTickets = encodeURIComponent(ticketsraised); //stringified data is encoded
    navigate(`/openTickets/${encodedTickets}`);
  };

  openClosedTickets = () => {
    const { navigate } = this.props.navigate;
    const closedTickets = JSON.stringify(this.state.closedTickets); //data is stringifying
    const encodedClosedTickets = encodeURIComponent(closedTickets); //stringified data is encoded
    navigate(`/closedTickets/${encodedClosedTickets}`);
  };

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

    if (feedback && this.state.feedbackEmpty === "") {
      const closedTicket = raisedTickets.find((item) => item.ticketid === id);
      const closedTime = new Date();
      const fullYear = closedTime.getFullYear();
      const Month = closedTime.getMonth() + 1;
      // const day = closedTime.getDay();
      const date = closedTime.getDate();
      const time = closedTime.getHours();
      const minutes = closedTime.getMinutes();
      const seconds = closedTime.getSeconds();

      axios
        .post("http://localhost:3001/TicketsClosed", {
          ticketid: closedTicket.ticketid,
          ticketraisedtime: closedTicket.ticketstamp,
          priority: closedTicket.priority,
          ticketdescription: closedTicket.ticketdescription,
          ticketsolution: feedback,
          sortpriority: closedTicket.sortpriority,
          ticketstatus: "closed",
          ticketclosedTime: `Date:-${date}/${Month}/${fullYear}  Time:-${time}:${minutes}:${seconds}`,
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
      if (!feedback && this.state.activeTicketId === id) {
        this.setState({
          // feedbackEmpty: "Please enter the solution, it is mandatory!",
          errormsgstatus: true,
        });
      } else {
        this.setState({
          // feedbackEmpty: "",
          errormsgstatus: false,
        });
      }
    }
  };

  onBackLoginPage = (e) => {
    const { navigate } = this.props.navigate;
    navigate("/login");
  };

  render() {
    const { username } = this.props.data;
    const { raisedTickets, activeTicketId, feedbackEmpty } = this.state;
    const filteredItems = raisedTickets.filter(
      (item) => item.sortpriority === "1"
    );

    return (
      <div className="dashboardcontent">
        <div className="wel">
          <h1 className="welcomestyle">
            Welcome Admin - {username.toUpperCase()}
          </h1>
        </div>
        <div>
          <div className="cardflexing">
            {filteredItems.map((item) => (
              <div
                key={item.ticketid}
                className={
                  this.state.solvebutton &&
                  item.ticketid === this.state.activeTicketId
                    ? "after"
                    : "before"
                }
              >
                <h1>Ticket Priority: {item.priority}</h1>
                <h2>Sort Priority for Admin: {item.sortpriority}</h2>
                <p>Ticket TimeStamp: {item.ticketstamp}</p>
                <p>Ticket Description: {item.ticketdescription}</p>
                <p>Ticket Status: {item.ticketstatus}</p>
                <button
                  className="solve"
                  onClick={() => this.onSolveTicket(item.ticketid)}
                >
                  Solve Ticket
                </button>
                {activeTicketId === item.ticketid ? (
                  <div>
                    <h2>Please Provide a solution:</h2>
                    <textarea
                      onChange={(e) => this.handleChange(e, "feedback")}
                      cols="40"
                      rows="10"
                      placeholder="Enter the solution"
                    ></textarea>
                    <br />
                    <button
                      onClick={(e) => this.onClosedTickets(e, item.ticketid)}
                      className="sc"
                    >
                      Submit & Close Ticket
                    </button>
                    <h2 style={{ color: "red", fontSize: "18px" }}>
                      {this.state.errormsgstatus
                        ? "Please enter the solution, it is mandatory!"
                        : ""}
                    </h2>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="multiple">
            <button
              className="openclose"
              onClick={(e) => this.openRaisedTickets(e)}
            >
              Open Raised Tickets
            </button>
            <button
              className="openclose"
              onClick={(e) => this.openClosedTickets(e)}
            >
              Closed Tickets
            </button>
          </div>
          <div className="back">
            <button
              className="backColor"
              onClick={(e) => this.onBackLoginPage(e)}
            >
              Back to Login Page
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashBoardClass;
