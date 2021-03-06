import React, { Component } from "react";
import Row from "../row";
import { PlanetList } from "../sw-components";
import { PlanetDetails } from "../sw-components";

export default class PlanetPage extends Component {
  state = {
    selectedItem: 2,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };
  render() {
    return (
      <Row
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={<PlanetDetails itemId={this.state.selectedItem} />}
      />
    );
  }
}
