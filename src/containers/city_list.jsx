import React, { Component } from "react";
import City from "./city";

class CityList extends Component {
  
  render() {
    return (
      <ul className="list-group cities">
        {this.props.cities.map((city) => <City city={city} key={city.name} />)}
      </ul>
    )
  }
}

export default CityList;
