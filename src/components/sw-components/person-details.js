import React from "react";
import ItemDetails from "../item-details";
import { Record } from "../person-view/person-view";
import { withSwapiService } from "../hoc-helpers/with-swapi-service";

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="name" label="Name" />
      <Record field="gender" label="Gender" />
    </ItemDetails>
  );
};
const mapMethodsToProps = (swapi) => {
  return {
    getData: swapi.getPerson,
    getImageUrl: swapi.getPersonImage,
  };
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);
