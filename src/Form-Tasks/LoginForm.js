import React from "react";
// import "./LoginForm.css";
class LoginForm extends React.Component {
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
    };
  }
  handleChange = (e, keyword) => {
    e.preventDefault();
    if (keyword === "name") {
      this.setState({ name: e.target.value });
    } else if (keyword === "password") {
      this.setState({ password: e.target.value });
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
    } = this.state;
    if (
      name &&
      password &&
      checkBoxStatus === true &&
      errorName === "" &&
      errorPassword === "" &&
      errorBox === ""
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
      if (checkBoxStatus === false) {
        this.setState({ errorBox: "please tick the checkbox" });
      } else {
        this.setState({ errorBox: "" });
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
    });
  };
  render() {
    // const { clear } = this.state;
    return (
      <div>
        {this.state.clear ? (
          <div className="main-container">
            <h1 className="success-heading">
              You have Successfully LoggedIn !
            </h1>
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
                      LogIn
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
export default LoginForm;
