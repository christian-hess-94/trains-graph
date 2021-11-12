import React from "react";
import { TrainsProvider } from "./context/trains.context";

const Providers: React.FC = ({ children }) => {
  return <TrainsProvider>{children}</TrainsProvider>;
};

export default Providers;
