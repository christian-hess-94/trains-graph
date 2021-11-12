import * as GS from "../global-styles";
import React, { useState } from "react";
import Button from "../components/button";
import TextInput from "../components/TextInput";
import useTrains from "../context/trains.context";

const CalculateDistancesSection = () => {
  const { calculateRouteDistance } = useTrains();
  const [cityString, setCityString] = useState("ABC");
  return (
    <GS.StyledFlexContainer>
      <GS.StyledContainer>
        <TextInput
          label="Check distance between cities (without any dividers)"
          value={cityString}
          changeValue={setCityString}
        />
        <Button
          label="Test"
          onClick={() => calculateRouteDistance(cityString)}
        />
      </GS.StyledContainer>
    </GS.StyledFlexContainer>
  );
};

export default CalculateDistancesSection;
