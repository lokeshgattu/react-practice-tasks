import React from "react";
import ".././Form-Tasks/RegistrationForm.css";
class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      country: "",
      phone: "",
      password: "",
      errorName: "",
      errorEmail: "",
      errorCountry: "",
      errorPhone: "",
      errorPassword: "",
      checkBoxStatus: false,
      errorBox: "",
      successfulMsg: "",
      clear: false,
    };
  }

  handleChange = (e, keyword) => {
    e.preventDefault();
    if (keyword === "name") {
      this.setState({ name: e.target.value });
    } else if (keyword === "email") {
      this.setState({ email: e.target.value });
    } else if (keyword === "country") {
      this.setState({ country: e.target.value });
    } else if (keyword === "phone") {
      this.setState({ phone: e.target.value });
    } else if (keyword === "password") {
      this.setState({ password: e.target.value });
    } else {
      this.setState({ checkBoxStatus: true });
    }
  };

  handleClick = (e) => {
    e.preventDefault();
    console.log("registration button is clicked");
    const {
      name,
      email,
      country,
      phone,
      password,
      checkBoxStatus,
      errorName,
      errorEmail,
      errorCountry,
      errorPassword,
      errorPhone,
      errorBox,
    } = this.state;
    if (
      name &&
      email &&
      country &&
      phone &&
      password &&
      checkBoxStatus === true &&
      errorCountry === "" &&
      errorName === "" &&
      errorEmail === "" &&
      errorPassword === "" &&
      errorPhone === "" &&
      errorBox === ""
    ) {
      //successfulMsg: "You have Successfully Registered"
      this.setState({ clear: true });
    } else {
      if (!name) {
        this.setState({ errorName: "please enter the name" });
      } else {
        this.setState({ errorName: "" });
      }
      if (!email) {
        this.setState({ errorEmail: "please enter the email" });
      } else {
        this.setState({ errorEmail: "" });
      }
      if (!country) {
        this.setState({ errorCountry: "please enter the country" });
      } else {
        this.setState({ errorCountry: "" });
      }
      if (!phone) {
        this.setState({ errorPhone: "please enter the phone number" });
      } else {
        this.setState({ errorPhone: "" });
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
  finish = (e) => {
    e.preventDefault();
    this.setState({
      clear: false,
      name: "",
      email: "",
      country: "",
      phone: "",
      password: "",
      checkBoxStatus: false,
    });
  };

  render() {
    // const { clear } = this.state;
    return (
      <>
        {this.state.clear ? (
          <div className="main-container">
            <h1 className="success-heading">
              You have Successfully Registered !
            </h1>
            <button className="button" onClick={(e) => this.finish(e)}>
              finish
            </button>
          </div>
        ) : (
          <div className="main-container">
            <h1 className="heading">Registration Form</h1>
            <div className="form-container">
              <form>
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
                  <label className="heading" htmlFor="email">
                    Email Address :
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email Address"
                    onChange={(e) => this.handleChange(e, "email")}
                  />
                  <p style={{ color: "red" }}>{this.state.errorEmail}</p>
                </div>

                <div>
                  <label className="heading" htmlFor="country">
                    Country :
                  </label>
                  <select
                    name="country"
                    onChange={(e) => this.handleChange(e, "country")}
                  >
                    <option value="">---select---</option>
                    <option value="India">India</option>
                    <option value="Australia">Australia</option>
                    <option value="USA">America</option>
                  </select>
                  <p style={{ color: "red" }}>{this.state.errorCountry}</p>
                </div>

                <div>
                  <label className="heading" htmlFor="phone">
                    Phone :
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Enter your phone number"
                    onChange={(e) => this.handleChange(e, "phone")}
                  />
                  <p style={{ color: "red" }}>{this.state.errorPhone}</p>
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
                  <input
                    type="checkbox"
                    onChange={(e) => this.handleChange(e, "checkbox")}
                  />
                  <p className="text"> I filled all the details</p> <br></br>
                  <p style={{ color: "red" }}>{this.state.errorBox}</p>
                </div>

                <div className="button-container">
                  <button
                    className="button"
                    onClick={(e) => this.handleClick(e)}
                  >
                    Register
                  </button>
                </div>
              </form>

              <h1 style={{ color: "green" }}>{this.state.successfulMsg}</h1>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default RegistrationForm;
