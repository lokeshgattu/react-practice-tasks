import axios from "axios";
import { Component } from "react";
const hocComponentWithHoc = (InputComponent) => {
  return class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        result: [],
        search: "",
      };
    }
    componentDidMount() {
      axios
        .get("https://hn.algolia.com/api/v1/search?query=react")
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
    userInput = (e) => {
      this.setState({ search: e.target.value });
    };
    handleSearch = (e) => {
      e.preventDefault();
      axios
        .get(`https://hn.algolia.com/api/v1/search?query=${this.state.search}`)
        .then((res) => {
          //Conditional logic seeking for objects which doesn't have empty titles and empty urls//
          // const temp = res.data.hits;
          // const data = temp.filter((item) =>
          //     (item.title !== "" || item.story_title !== "") &&
          //     (item.url !== "" || item.story_url !== "")
          // );
          this.setState({ result: res.data.hits });
        })
        .catch((err) => console.log(err));
    };
    render() {
      return (
        <>
          <InputComponent
            result={this.state.result}
            userInput={(e) => this.userInput(e)}
            handleSearch={(e) => this.handleSearch(e)}
          ></InputComponent>
        </>
      );
    }
  };
};
export default hocComponentWithHoc;
