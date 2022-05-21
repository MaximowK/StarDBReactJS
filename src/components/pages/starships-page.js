import React from "react";
import { StarshipList } from "../sw-components";
import { useNavigate } from "react-router-dom";

const StarshipsPage = () => {
  const navigate = useNavigate();
  const onItemSelected = (selectedItem) => {
    navigate(`${selectedItem}`);
  };

  return <StarshipList onItemSelected={onItemSelected} />;
};

export default StarshipsPage;
