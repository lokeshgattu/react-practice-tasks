import React from "react";
import axios from "axios";
import "./UserLoginClass.css";
class UserLoginClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      unameErr: "",
      passwordErr: "",
      userData: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/userCredentials")
      .then((res) => {
        this.setState({ userData: res.data });
      })
      .catch((error) => console.log(error));
  }
  handleChange = (e, keyword) => {
    e.preventDefault();
    if (keyword === "username") {
      this.setState({ username: e.target.value });
    }
    if (keyword === "password") {
      this.setState({ password: e.target.value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { navigate } = this.props.navigate;
    if (this.state.username === "") {
      this.setState({ unameErr: "please enter username" });
    }
    if (this.state.password === "") {
      this.setState({ passwordErr: "please enter password !" });
    }

    if (this.state.username && this.state.password) {
      const filteredResult = this.state.userData.filter(
        (item) =>
          item.username === this.state.username &&
          item.password === this.state.password
      );

      if (filteredResult.length === 1) {
        if (
          filteredResult[0].username === this.state.username &&
          filteredResult[0].password === this.state.password
        ) {
          navigate("/userdashboard");
        }
      } else {
        const usernameChecking = this.state.userData.some(
          (item) => item.username === this.state.username
        );
        const passwordChecking = this.state.userData.some(
          (item) => item.password === this.state.password
        );
        if (usernameChecking === false && passwordChecking === true) {
          this.setState({ unameErr: "please enter correct username" });
        } else if (usernameChecking === true && passwordChecking === false) {
          this.setState({ passwodErr: "please enter correct password " });
        } else {
          // navigate("/error")
          navigate("/usersignup");
        }
      }
    } else {
      if (!this.state.username) {
        this.setState({ unameErr: "please enter the name" });
      } else {
        this.setState({ unameErr: "" });
      }
      if (!this.state.password) {
        this.setState({ passwodErr: "please enter the password" });
      } else {
        this.setState({ passwodErr: "" });
      }
    }
  };
  render() {
    return (
      <>
        <div className="user-container">
          <form>
            <h2>User Login Page</h2>
            <div className="user-container-item">
              Username :{" "}
              <input
                type="text"
                placeholder="Enter UserName Here"
                onChange={(e) => this.handleChange(e, "username")}
              ></input>
              <p style={{ color: "red" }}>{this.state.unameErr}</p>
            </div>
            <div className="user-container-item">
              Password :{" "}
              <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => this.handleChange(e, "password")}
              ></input>
              <p style={{ color: "red" }}>{this.state.passwordErr}</p>
            </div>

            <div className="user-login">
              <button onClick={(e) => this.handleSubmit(e)}>Login</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
export default UserLoginClass;
