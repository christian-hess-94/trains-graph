import * as GS from "../global-styles";
import React, { useState } from "react";
import Button from "../components/button";
import TextInput from "../components/TextInput";
import useTrains from "../context/trains.context";
import Typography from "../components/typography";
import TextArea from "../components/TextArea";

const AddCitiesSection = () => {
  const [multipleRouteCommands, setMultipleRouteCommands] = useState(
    "AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7"
  );
  const [routeCommand, setRouteCommand] = useState("");
  const [routeLength, setRouteLength] = useState("0");
  const { addRoute, addMultipleRoutes, cities } = useTrains();
  return (
    <GS.StyledFlexContainer>
      <GS.StyledContainer>
        <TextArea
          label="Multiple Commands (separated by ,)"
          changeValue={setMultipleRouteCommands}
          value={multipleRouteCommands}
        />
        <Button
          label="Create Multiple Route"
          onClick={() => {
            const mrc = multipleRouteCommands.split(",");
            console.log("multipleRouteCommands: ", mrc);
            for (let index = 0; index < mrc.length; index++) {
              const frc = mrc[index];
              const commandCities = frc.trim().split("");
              const routeCommand =
                commandCities[0].trim() + commandCities[1].trim();
              const routeLength = commandCities[2].trim();
              addRoute(routeCommand, routeLength);
            }
          }}
        />
        <GS.StyledFlexContainerNoBorder>
          <Typography type="p" text="or create a single Route" />
        </GS.StyledFlexContainerNoBorder>
        <GS.StyledGridRow>
          <GS.StyledFlexContainerNoBorder>
            <TextInput
              label="Route Command (LL)"
              value={routeCommand}
              changeValue={setRouteCommand}
            />
          </GS.StyledFlexContainerNoBorder>
          <GS.StyledFlexContainerNoBorder>
            <TextInput
              label="Route Length (N)"
              value={routeLength}
              changeValue={setRouteLength}
            />
          </GS.StyledFlexContainerNoBorder>
        </GS.StyledGridRow>
        <Button
          label="Create Single Route"
          onClick={() => addRoute(routeCommand, routeLength)}
        />
      </GS.StyledContainer>
    </GS.StyledFlexContainer>
  );
};

export default AddCitiesSection;
