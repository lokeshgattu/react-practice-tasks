import React from "react";
import axios from "axios";
import "./AdminLoginClass.css";

class AdminLoginClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      adminData: [],
      errorName: "",
      errorPassword: "",
      checkBoxStatus: false,
      errorBox: "",
      passwordVisible: false, // Step 1: Add state for password visibility
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/AdminCredentials")
      .then((res) => {
        this.setState({ adminData: res.data });
      })
      .catch((error) => console.log(error));
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
    const { navigate } = this.props.navigate;
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
      const filteredResult = this.state.adminData.filter(
        (item) =>
          item.username === this.state.name &&
          item.password === this.state.password
      );

      if (filteredResult.length === 1) {
        if (
          filteredResult[0].username === this.state.name &&
          filteredResult[0].password === this.state.password
        ) {
          navigate(`/admindashboard/${this.state.name}`);
        }
      } else {
        const usernamechecking = this.state.adminData.some(
          (item) => item.username === this.state.name
        );
        const passwordchecking = this.state.adminData.some(
          (item) => item.password === this.state.password
        );

        if (usernamechecking === false && passwordchecking === true) {
          this.setState({ errorName: "Please enter correct username" });
        } else if (usernamechecking === true && passwordchecking === false) {
          this.setState({ errorPassword: "Please enter the correct password" });
        } else {
          navigate("/adminsignup");
        }
      }
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
    }
  };

  togglePasswordVisibility = () => {
    this.setState({ passwordVisible: !this.state.passwordVisible });
  };

  render() {
    return (
      <div>
        <div>
          <form>
            <div className="loginpage">
              <div className="form-container">
                <h1 className="main-heading">Admin/Login</h1>
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
                  <div style={{ position: "relative" }}>
                    <input
                      type={this.state.passwordVisible ? "text" : "password"} // Step 3: Toggle input type
                      id="password"
                      placeholder="Enter your Password"
                      onChange={(e) => this.handleChange(e, "password")}
                      style={{ paddingRight: "40px" }}
                    />
                    <span
                      onClick={this.togglePasswordVisibility} // Step 3: Add click handler
                      style={{
                        position: "absolute",
                        right: "8px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    >
                      {this.state.passwordVisible ? "🙈" : "👁️"}
                      {/* Eye icon */}
                    </span>
                  </div>
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
                <div>
                  <div className="checkbox">
                    <div>
                      <input
                        type="checkbox"
                        onChange={(e) => this.handleChange(e, "checkbox")}
                      />
                      <p className="text"> Remember Me</p> <br></br>
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
      </div>
    );
  }
}
export default AdminLoginClass;
