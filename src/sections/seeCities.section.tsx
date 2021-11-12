import * as GS from "../global-styles";
import React, { useState } from "react";
import Button from "../components/button";
import TextInput from "../components/TextInput";
import useTrains from "../context/trains.context";
import Typography from "../components/typography";
import CityListItem from "../components/cityListItem";
import * as S from "./styles";
const SeeCitiesSection = () => {
  const { cities } = useTrains();
  return (
    <>
      <S.SeeCitiesContainer>
        {cities.map((city, index) => (
          <CityListItem key={index} city={city} />
        ))}
      </S.SeeCitiesContainer>
    </>
  );
};

export default SeeCitiesSection;
