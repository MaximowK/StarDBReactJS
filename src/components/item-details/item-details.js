import React, { Component } from "react";
import SwapiService from "../../services/swapi-servise";
import PersonView from "../person-view";
import ErrorIndicator from "../error-inicator";
import Spinner from "../spinner";

import "./item-details.css";

export default class ItemDetails extends Component {
  swapi = new SwapiService();
  state = {
    item: null,
    image: null,
    loading: true,
    error: false,
  };
  componentDidMount() {
    this.updatePerson();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.itemId !== this.props.itemId) {
      this.updatePerson();
    }
  }
  onItemLoaded = (item) => {
    this.setState({
      item,
      image: this.props.getImageUrl(item),
      loading: false,
      error: false,
    });
  };
  onError = (err) => {
    this.setState({ error: true, loading: false });
  };

  updatePerson() {
    const { getData, itemId } = this.props;
    if (!itemId) {
      return;
    } else {
      getData(itemId).then(this.onItemLoaded).catch(this.onError);
    }
  }

  render() {
    const { item, loading, error, image } = this.state;
    const hasData = !(loading || error);
    const errorIndicator = error ? <ErrorIndicator /> : null;
    const spinner = this.state.loading ? <Spinner /> : null;
    const content = hasData ? (
      <PersonView image={image} item={item}>
        {this.props.children}
      </PersonView>
    ) : null;

    return (
      <div className="person-details card">
        {errorIndicator}
        {content}
        {spinner}
      </div>
    );
  }
}
