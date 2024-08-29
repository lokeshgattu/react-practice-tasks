import React from "react";
import axios from "axios";
import "./StylingFiles/AdminSignUpPage.css";
class AdminSignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      errorName: "",
      errorPassword: "",
      successfulmsg: "",
      adminData: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/AdminCredentials")
      .then((res) => this.setState({ adminData: res.data }))
      .catch((err) => console.log("error"));
  }

  handleChange = (e, keyword) => {
    e.preventDefault();
    if (keyword === "name") {
      this.setState({ name: e.target.value });
    } else {
      this.setState({ password: e.target.value });
    }
  };

  handleClick = (e) => {
    e.preventDefault();
    const { name, password, errorName, errorPassword } = this.state;
    if (name && password && errorName === "" && errorPassword === "") {
      axios
        .post("http://localhost:3001/AdminCredentials", {
          username: this.state.name,
          password: this.state.password,
        })
        .then((res) => {
          console.log(res.data);
          //   const temp = [...this.state.adminData, res.data];

          //   this.setState({ adminData: temp });
        })
        .catch((error) => console.log(error));
      this.setState({
        successfulmsg: "You've created your account successfully!",
      });
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
    }
  };
  render() {
    return (
      <div className="signuppage">
        <h1 className="errormsg">
          You are not an existing user, So please Sign Up/Create an account
          here!
        </h1>
        <div>
          <div>
            <form>
              <div className="container">
                <div className="form">
                  <h1 className="signupheading">SignUp</h1>
                  <div>
                    <label className="heading" htmlFor="name">
                      Name :
                    </label>
                    <br></br>
                    <input
                      type="text"
                      id="signupname"
                      placeholder="Enter your name"
                      onChange={(e) => this.handleChange(e, "name")}
                    />
                    <p
                      style={{
                        color: "red",
                        fontWeight: "bolder",
                        fontSize: "18px",
                      }}
                    >
                      {this.state.errorName}
                    </p>
                  </div>
                  <div>
                    <label className="heading" htmlFor="password">
                      Password :
                    </label>
                    <br></br>
                    <input
                      type="password"
                      id="signuppassword"
                      placeholder="Enter your Password"
                      onChange={(e) => this.handleChange(e, "password")}
                    />
                    <p
                      style={{
                        color: "red",
                        fontWeight: "bolder",
                        fontSize: "18px",
                      }}
                    >
                      {this.state.errorPassword}
                    </p>
                  </div>
                  <div className="button-box">
                    <button
                      className="createbutton"
                      onClick={(e) => this.handleClick(e)}
                    >
                      Create Account
                    </button>
                  </div>
                  <p
                    style={{
                      color: "green",
                      fontWeight: "bolder",
                      fontSize: "18px",
                    }}
                  >
                    {this.state.successfulmsg}
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default AdminSignUpPage;
