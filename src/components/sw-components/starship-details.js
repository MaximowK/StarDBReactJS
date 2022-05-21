import React from "react";
import ItemDetails from "../item-details";
import { Record } from "../person-view/person-view";
import { withSwapiService } from "../hoc-helpers/with-swapi-service";
import { useParams } from "react-router-dom";

const StarshipDetails = (props) => {
  const params = useParams();
  return (
    <ItemDetails {...props} itemId={params.id}>
      <Record field="model" label="Model" />
      <Record field="length" label="Lenght" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapi) => {
  return {
    getData: swapi.getStarship,
    getImageUrl: swapi.getStarshipImage,
  };
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
