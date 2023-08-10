import { Component } from "react";
import "./Search.component.css";
class Search extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input
        type="search"
        placeholder="Search for Monsters"
        onChange={this.props.handleChange}
      />
    );
  }
}
export default Search;
