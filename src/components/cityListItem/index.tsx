import React from "react";
import { City } from "../../context/trains.context";
import * as GS from "../../global-styles";
import RouteListItem from "../routeListItem";
import Typography from "../typography";

interface ReceiptItemProps {
  city: City;
}

const CityListItem: React.FC<ReceiptItemProps> = ({
  city: { name, routes },
}) => {
  return (
    <GS.StyledContainer>
      <GS.StyledFlexContainerNoBorder>
        <GS.StyledGridRow>
          <Typography type="h6" text="City" />
          <Typography type="h1" text={name} />
        </GS.StyledGridRow>
        <GS.StyledFlexContainerNoBorder>
          {routes.map((route, index) => (
            <RouteListItem key={index} route={route} />
          ))}
        </GS.StyledFlexContainerNoBorder>
      </GS.StyledFlexContainerNoBorder>
      <GS.StyledFlexContainerNoBorder />
    </GS.StyledContainer>
  );
};

export default CityListItem;
