import React from "react";
import useTrains from "../context/trains.context";
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
