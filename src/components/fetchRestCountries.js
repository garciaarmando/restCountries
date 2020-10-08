import React from "react";

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
        <ul>
          {items.map((item) => (
            <li key={item.name}>
              Name: {item.name} | Capital: {item.capital} | Region:{" "}
              {item.region} | Population: {item.population} | Flag:{" "}
              <img src={item.flag} alt="This is the flag of the country" />
            </li>
          ))}
        </ul>
      );
    }
  }
}
export default FetchRestCountries;
