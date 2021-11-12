import React from "react";
import { Route } from "../../context/trains.context";
import * as GS from "../../global-styles";
import Typography from "../typography";

interface ReceiptItemProps {
  route: Route;
}

const RouteListItem: React.FC<ReceiptItemProps> = ({
  route: { from, to, distance },
}) => {
  return (
    <GS.StyledContainer>
      <GS.StyledGridRow>
        <GS.StyledFlexGridRow>
          <Typography type="h6" text="To" />
          <Typography type="h1" text={to} />
        </GS.StyledFlexGridRow>
        <GS.StyledFlexGridRow>
          <Typography type="h6" text="Distance" />
          <Typography type="h1" text={distance.toString()} />
        </GS.StyledFlexGridRow>
      </GS.StyledGridRow>
      <GS.StyledFlexContainerNoBorder />
    </GS.StyledContainer>
  );
};

export default RouteListItem;
