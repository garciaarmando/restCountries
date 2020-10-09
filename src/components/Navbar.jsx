import React from "react";
import "./styles/Navbar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <span className="font-weight-light"> REST COUNTRIES API </span>
        </div>{" "}
      </div>
    );
  }
}

export default NavBar;
