import React from "react";
import "./styles/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <span className="font-weight-light"> REST COUNTRIES </span>
        </div>{" "}
      </div>
    );
  }
}

export default Navbar;