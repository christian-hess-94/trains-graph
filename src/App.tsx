import React from "react";
import * as GS from "./global-styles";
import Providers from "./providers";
import AddCitiesSection from "./sections/addCities.section";
import CalculateDistancesSection from "./sections/calculateDistances.section";
import SeeCitiesSection from "./sections/seeCities.section";
function App() {
  return (
    <GS.App>
      <Providers>
        <GS.StyledContainer>
          <AddCitiesSection />
          <SeeCitiesSection />
        </GS.StyledContainer>
        <CalculateDistancesSection />
      </Providers>
    </GS.App>
  );
}

export default App;
