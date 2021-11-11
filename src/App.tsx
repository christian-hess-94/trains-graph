import React from "react";
import * as GS from "./global-styles";
import Providers from "./providers";
import AddCitiesSection from "./sections/addCities.section";
import SeeCitiesSection from "./sections/seeCities.section";
function App() {
  return (
    <GS.App>
      <Providers>
        <AddCitiesSection />
        <SeeCitiesSection />
        <GS.StyledContainer></GS.StyledContainer>
      </Providers>
    </GS.App>
  );
}

export default App;
