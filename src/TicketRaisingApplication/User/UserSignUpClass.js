import axios from "axios";
import React from "react";
import "./UserSignUpClass.css";

class UserSignUpClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailErr: "",
      passwordErr: "",
      responseMsg: "",
    };
  }
  handleChange = (e, keyword) => {
    if (keyword === "email") {
      this.setState({ email: e.target.value });
    } else {
      this.setState({ password: e.target.value });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let { navigate } = this.props.navigate;
    if (this.state.email === "") {
      this.setState({ emailErr: "please enter email" });
    }
    if (this.state.password === "") {
      this.setState({ passwordErr: "please enter password" });
    }
    if (this.state.email && this.state.password) {
      axios
        .post("http://localhost:3001/userCredentials", {
          username: this.state.email,
          password: this.state.password,
        })
        .then((res) => {
          console.log(res);
          this.setState({
            responseMsg: "you have created your account successfully",
          });
          setTimeout(() => {
            navigate("/userlogin");
          }, 2000);
        })
        .then((err) => console.log(err));
    }
  };
  render() {
    return (
      <>
        <h1 id="heading">You don't have an account, Please SignUp Here!!</h1>
        <div className="main-container">
          <form>
            <h2>User SignUp</h2>
            <div className="container1">
              <label className="labeldata">UserName : </label>
              <input
                type="email"
                onChange={(e) => this.handleChange(e, "email")}
                placeholder="Enter the UserName"
              ></input>
              <p style={{ color: "red" }}>{this.state.emailErr}</p>
            </div>
            <div className="container1">
              <label className="labeldata">Password : </label>
              <input
                type="password"
                onChange={(e) => this.handleChange(e, "password")}
                placeholder="Enter the Password"
              ></input>
              <p style={{ color: "red" }}>{this.state.passwordErr}</p>
            </div>
            <div className="btn">
              <button onClick={(e) => this.handleSubmit(e)}>signup</button>
              <p style={{ color: "green" }}>{this.state.responseMsg}</p>
            </div>
          </form>
        </div>
      </>
    );
  }
}
export default UserSignUpClass;
