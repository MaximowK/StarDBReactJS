import React, { Component } from "react";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import { PersonList } from "../sw-components";
import { PersonDetails } from "../sw-components";

export default class PeoplePage extends Component {
  state = {
    selectedItem: 2,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };
  render() {
    return (
      <ErrorBoundry>
        <Row
          left={<PersonList onItemSelected={this.onItemSelected} />}
          right={<PersonDetails itemId={this.state.selectedItem} />}
        />
      </ErrorBoundry>
    );
  }
}
