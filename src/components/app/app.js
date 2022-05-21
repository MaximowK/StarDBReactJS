import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import "./app.css";
import ErrorIndicator from "../error-inicator";
import { StarshipsPage, PlanetPage, PeoplePage } from "../pages";
import { SwapiServiceProvider } from "../swapi-service-context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SwapiService from "../../services/swapi-servise";
import ErrorBoundry from "../error-boundry";
import { StarshipDetails } from "../sw-components";

export default class App extends Component {
  swapi = new SwapiService();
  state = {
    hasError: false,
  };
  componentDidCatch() {
    this.setState({ hasError: true });
  }
  renderGreeting = () => {
    return <h2>Welcome to StarDB</h2>;
  };
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapi}>
          <Router>
            <div className="container">
              <Header />
              <RandomPlanet />
              <Routes>
                <Route path="/" element={<h2>Welcome to Star DB</h2>} />
                <Route path="/people/" element={<PeoplePage />} />
                <Route path="/planets" element={<PlanetPage />} />
                <Route path="/starships" element={<StarshipsPage />} />
                <Route path="/starships/:id" element={<StarshipDetails />} />
                <Route path="*" element={<h2>There's nothing here!</h2>} />
              </Routes>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
