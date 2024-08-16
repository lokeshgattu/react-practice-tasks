import axios from "axios";
import "./index.css";
import { Component } from "react";
class BlogSearch extends Component {
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
      .then((res) => this.setState({ result: res.data.hits }))
      .catch((err) => console.log(err));
  };
  render() {
    //const {userInput,handleSearch,result}=this.props
    return (
      <div>
        <h1>search anything at anytime at search</h1>
        <div>
          <input type="text" onChange={(e) => this.userInput(e)} />
          <button onClick={(e) => this.handleSearch(e)}>search</button>
        </div>
        {this.state.result.map((item) => (
          <div key={item.story_id}>
            <h1 className="head">author: {item.author}</h1>
            <h1 className="text">title: {item.title} </h1>
            <a href={item.url} target="_blank">
              Click For More Details
            </a>
          </div>
        ))}
      </div>
    );
  }
}
export default BlogSearch;
