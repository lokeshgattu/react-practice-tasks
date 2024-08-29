import React from "react";
class FormElements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tech: "",
      projects: "",
      agree: true,
    };
  }
  handleTech = (e) => {
    console.log(e.target.value);
    this.setState({ tech: e.target.value });
  };
  handleExp = (e) => {
    console.log(e.target.value);
    this.setState({ projects: e.target.value });
  };
  handleAgreement = (e) => {
    this.setState({ agree: !this.state.agree });
  };
  render() {
    return (
      <form>
        Select your tech:{" "}
        <select name="technology" onChange={(e) => this.handleTech(e)}>
          <option value="">---select---</option>
          <option value="React JS">React JS</option>
          <option value="Node JS">Node JS</option>
          <option value="Express JS">Express JS</option>
        </select>
        <br></br>
        Add your experience:
        <textarea
          name="projectdHandled"
          cols="20"
          rows="10"
          onChange={(e) => this.handleExp(e)}
        ></textarea>
        <br></br>I Agree to the terms and condition{" "}
        <input
          type="checkbox"
          name="agreement"
          checked={!this.state.agree}
          onChange={(e) => this.handleAgreement(e)}
        ></input>
        <button>submit</button>
      </form>
    );
  }
}

export default FormElements;
