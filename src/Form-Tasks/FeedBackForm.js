import React from "react";
import "./FeedBackForm.css";
class FeedBackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      errorName: "",
      errorPassword: "",
      checkBoxStatus: false,
      errorBox: "",
      clear: false,
      feedBack: "",
      errorFeedBack: "",
    };
  }
  handleChange = (e, keyword) => {
    e.preventDefault();
    if (keyword === "name") {
      this.setState({ name: e.target.value });
    } else if (keyword === "password") {
      this.setState({ password: e.target.value });
    } else if (keyword === "feedback") {
      this.setState({ feedBack: e.target.value });
    } else {
      this.setState({ checkBoxStatus: true });
    }
  };
  handleClick = (e) => {
    e.preventDefault();

    const {
      name,
      password,
      errorName,
      checkBoxStatus,
      errorPassword,
      errorBox,
      feedBack,
      errorFeedBack,
    } = this.state;
    if (
      name &&
      password &&
      feedBack &&
      checkBoxStatus === true &&
      errorName === "" &&
      errorPassword === "" &&
      errorBox === "" &&
      errorFeedBack === ""
    ) {
      this.setState({ clear: true });
    } else {
      if (!name) {
        this.setState({ errorName: "please enter the name" });
      } else {
        this.setState({ errorName: "" });
      }
      if (!password) {
        this.setState({ errorPassword: "please enter the password" });
      } else {
        this.setState({ errorPassword: "" });
      }
      if (checkBoxStatus === false) {
        this.setState({ errorBox: "please tick the checkbox" });
      } else {
        this.setState({ errorBox: "" });
      }

      if (!feedBack) {
        this.setState({ errorFeedBack: "please give your feedback" });
      } else {
        this.setState({ errorFeedBack: "" });
      }
    }
  };

  finish = (e) => {
    e.preventDefault();
    this.setState({
      clear: false,
      name: "",
      password: "",
      checkBoxStatus: false,
      errorFeedBack: "",
    });
  };
  render() {
    const { clear } = this.state;
    return (
      <div>
        {clear ? (
          <div className="main-container">
            <div className="card">
              <h1 className="card-heading">Hey {this.state.name}! </h1>
              <p className="card-text">
                this is your feedback :{this.state.feedBack}
              </p>
              <p className="card-text">Thank You For Your Feedback</p>
            </div>
            <button className="button" onClick={(e) => this.finish(e)}>
              finish
            </button>
          </div>
        ) : (
          <div>
            <form>
              <div className="main-container">
                <div className="form-container">
                  <h1 className="main-heading">Login</h1>
                  <div>
                    <label className="heading" htmlFor="name">
                      Name :
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      onChange={(e) => this.handleChange(e, "name")}
                    />
                    <p style={{ color: "red" }}>{this.state.errorName}</p>
                  </div>
                  <div>
                    <label className="heading" htmlFor="password">
                      Password :
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your Password"
                      onChange={(e) => this.handleChange(e, "password")}
                    />
                    <p style={{ color: "red" }}>{this.state.errorPassword}</p>
                  </div>
                  <div>
                    <label className="heading" htmlFor="feedBack">
                      Your Feedback :
                    </label>
                    <br></br>
                    <textarea
                      id="w3review"
                      name="feedBack"
                      rows="4"
                      cols="50"
                      onChange={(e) => this.handleChange(e, "feedback")}
                    ></textarea>
                    <p style={{ color: "red" }}>{this.state.errorFeedBack}</p>
                  </div>
                  <div>
                    <div className="checkbox">
                      <div>
                        <input
                          type="checkbox"
                          onChange={(e) => this.handleChange(e, "checkbox")}
                        />
                        <p className="text"> Remember Me</p> <br></br>
                      </div>
                      <div>
                        <p className="text">Forget Me?</p>
                      </div>
                    </div>
                    <p style={{ color: "red" }}>{this.state.errorBox}</p>
                  </div>
                  <div className="button-container">
                    <button
                      className="button"
                      onClick={(e) => this.handleClick(e)}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}
export default FeedBackForm;
