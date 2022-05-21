import React, { Component } from "react";
import "./person-view.css";
import ErrorButton from "../error-button";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};
export { Record };

export default class PersonView extends Component {
  render() {
    const item = this.props.item;
    return (
      <React.Fragment>
        <img
          className="person-image"
          src={`${this.props.image}`}
          alt="person "
        />
        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, (child, idx) => {
              return React.cloneElement(child, { item });
            })}
          </ul>
          <ErrorButton />
        </div>
      </React.Fragment>
    );
  }
}
