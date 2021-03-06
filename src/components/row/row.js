import React from "react";
import "./row.css";
import PropTypes from "prop-types";
const Row = ({ left, right }) => {
  Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node,
  };
  return (
    <div className="viewContainer row mb2">
      <div className="col-md-6">{left}</div>
      <div className="col-md-6">{right}</div>
    </div>
  );
};

export default Row;
