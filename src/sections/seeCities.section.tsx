import * as GS from "../global-styles";
import React, { useState } from "react";
import Button from "../components/button";
import TextInput from "../components/TextInput";
import useTrains from "../context/trains.context";
import Typography from "../components/typography";
import CityListItem from "../components/cityListItem";

const SeeCitiesSection = () => {
  const { cities } = useTrains();
  return (
    <GS.StyledFlexContainer>
      {cities.map((city, index) => (
        <CityListItem key={index} city={city} />
      ))}
    </GS.StyledFlexContainer>
  );
};

export default SeeCitiesSection;
