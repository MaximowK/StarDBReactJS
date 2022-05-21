import React from "react";
import ItemList from "../item-list";
import withData from "../hoc-helpers/with-data";
import { withSwapiService } from "../hoc-helpers/with-swapi-service";
import { withChildFunction } from "../hoc-helpers/with-child-function";
import { compose } from "../hoc-helpers/compose";
const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ name, model }) => (
  <span>
    {name} ({model})
  </span>
);
const renderNameAndDiameter = ({ name, diameter }) => (
  <span>
    {name} ({diameter})
  </span>
);
const mapPersonMethodsToProps = (swapi) => {
  return {
    getData: swapi.getAllPeople,
  };
};
const mapPlanetMethodsToProps = (swapi) => {
  return {
    getData: swapi.getAllPlanets,
  };
};
const mapStarshipMethodsToProps = (swapi) => {
  return {
    getData: swapi.getAllStarships,
  };
};

const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withData,
  withChildFunction(renderModelAndName)
)(ItemList);
const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderNameAndDiameter)
)(ItemList);

export { PersonList, StarshipList, PlanetList };
