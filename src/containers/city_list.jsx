import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';
import City from "./city";

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <ul className="list-group cities">
        {this.props.cities.map(city => <City city={city} key={city.name} />)}
      </ul>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    // eslint-disable-next-line object-shorthand
    { setCities: setCities },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
