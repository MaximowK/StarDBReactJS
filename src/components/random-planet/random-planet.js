import React, { Component } from "react";
import SwapiServise from "../../services/swapi-servise";
import ErrorIndicator from "../error-inicator";
import Spinner from "../spinner";
import PropTypes from "prop-types";

import "./random-planet.css";

export default class RandomPlanet extends Component {
  static defaultProps = {
    updateInterval: 3000,
  };
  static propTypes = {
    updateInterval: PropTypes.number,
  };
  swapiServise = new SwapiServise();
  state = { planet: {}, loading: true };

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false, error: false });
  };
  onError = (err) => {
    this.setState({ error: true, loading: false });
  };
  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiServise
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);
    const errorIndicator = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {errorIndicator}
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt="planet-icon"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
