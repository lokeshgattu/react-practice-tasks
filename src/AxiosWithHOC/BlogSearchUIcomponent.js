import "./index.css";
import { Component } from "react";
import hocComponentWithHoc from "./hocComponentWithHoc";
class BlogSearchUIcomponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userInput, handleSearch, title, url, author } = this.props;
    return (
      <div>
        <h1>search anything</h1>

        <div>
          <input type="text" onChange={userInput} />
          <button onClick={handleSearch}>search</button>
        </div>

        <div>
          <h1 className="head">author: {author}</h1>
          <h1 className="text">title: {title} </h1>
          <a href={url} target="_blank">
            Click For More Details
          </a>
        </div>
      </div>
    );
  }
}
export default hocComponentWithHoc(BlogSearchUIcomponent);
