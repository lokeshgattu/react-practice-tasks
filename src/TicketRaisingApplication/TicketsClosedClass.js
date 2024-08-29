import React from "react";
import axios from "axios";
import "./StylingFiles/AdminClosedClass.css";

class TicketsClosedClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      closedTickets: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/TicketsClosed")
      .then((res) => {
        this.setState({ closedTickets: res.data });
      })
      .catch((error) => console.log(error));
  }

  onBackDashboardPage = (e) => {
    const { navigate } = this.props.navigate;
    navigate(`/admindashboard/:username`);
  };

  deleteClosed = (e, id) => {
    e.preventDefault();
    axios.delete(`http://localhost:3001/TicketsClosed/${id}`).then((res) => {
      const temp = this.state.closedTickets.filter((item) => item.id !== id);
      this.setState({ closedTickets: temp });
    });
  };

  render() {
    const { ticketsclosedinfo } = this.props;

    return (
      <div className="pageimage">
        <h1 className="closeheading">
          Below Tickets Here are the Successfully Closed Ones!
        </h1>
        <div className="closed">
          {this.state.closedTickets.map((item) => (
            <div key={item.id} className="closedcard">
              <h2>Priority: {item.priority}</h2>
              <h3>Ticket Created Time: {item.ticketraisedtime}</h3>
              <h3>SortPriority: {item.sortpriority}</h3>
              <p className="bolddata">
                Ticket Description: {item.ticketdescription}
              </p>
              <p className="bolddata">Ticket Solution: {item.ticketsolution}</p>
              <p className="bolddata">Ticket Status: {item.ticketstatus}</p>
              <p className="bolddata">
                Ticket Closed Time: {item.ticketclosedTime}
              </p>
              <button
                className="deleted"
                onClick={(e) => this.deleteClosed(e, item.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <div className="backdash">
          <button
            className="backdashbutton"
            onClick={(e) => this.onBackDashboardPage(e)}
          >
            Back to Admin DashBoard
          </button>
        </div>
      </div>
    );
  }
}

export default TicketsClosedClass;
