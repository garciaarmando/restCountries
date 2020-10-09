import React from "react";
import "./styles/fetchRestCountries.css";
import NavBar from "./Navbar";

class FetchRestCountries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <React.Fragment>
          <NavBar />
          <ul className="countriesList">
            {items.map((item) => (
              <li key={item.name}>
                <section className="countriesList-flag">
                  <img src={item.flag} alt="" />
                </section>
                <section className="countriesList-information">
                  <p>
                    Country Name: <strong>{item.name}</strong>
                  </p>
                  <p>
                    Capital: <strong> {item.capital} </strong>
                  </p>
                  <p>
                    Region: <strong> {item.region}</strong>
                  </p>
                  <p>
                    Population: <strong>{item.population}</strong>
                  </p>
                </section>
              </li>
            ))}
          </ul>
        </React.Fragment>
      );
    }
  }
}
export default FetchRestCountries;
