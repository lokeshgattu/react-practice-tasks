import axios from "axios";
import { Component } from "react";
const hocComponentWithHoc = (InputComponent) => {
  return class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        result: [],
        search: "",
        title: "",
        url: "",
        author: "",
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
          res.data.hits.map((item) => {
            const hasTitle = "title" in item;
            const hasUrl = "url" in item;
            if (hasTitle && hasUrl) {
              this.setState({
                title: item.title,
                url: item.url,
                author: item.author,
              });
            } else {
              this.setState({
                title: item.story_title,
                url: item.story_url,
                author: item.author,
              });
            }
          });
          // const temp=res.data.hits
          // const data=temp.filter((item)=>item.title!=="" && item.url!=="")
          // console.log(data)
          // this.setState({result: data})
        })
        .catch((err) => console.log(err));
    };
    render() {
      return (
        <>
          <InputComponent
            title={this.state.title}
            url={this.state.url}
            author={this.state.author}
            userInput={(e) => this.userInput(e)}
            handleSearch={(e) => this.handleSearch(e)}
          ></InputComponent>
        </>
      );
    }
  };
};
export default hocComponentWithHoc;
