import React from "react";
import "./styles/SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }
  render() {
    return (
      <input
        className="searchBar__container"
        // onChange={this.onInputChange}
        value={this.state.term}
        onChange={(event) => this.setState({ term: event.target.value })}
        placeholder="Search your country 😄"
      />
    );
  }
  onInputChange(event) {
    console.log(event.target.value);
    // console.log(event);
  }
}

export default SearchBar;
