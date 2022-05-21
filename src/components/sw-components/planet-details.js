import React from "react";
import ItemDetails from "../item-details";
import { Record } from "../person-view/person-view";
import { withSwapiService } from "../hoc-helpers/with-swapi-service";

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapi) => {
  return {
    getData: swapi.getPlanet,
    getImageUrl: swapi.getPlanetImage,
  };
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
