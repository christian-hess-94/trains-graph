import React, { createContext, useContext, useState } from "react";

export interface City {
  name: string;
  routes: Route[];
}

export interface Route {
  distance: number;
  from: string;
  to: string;
}

export interface TrainsContextData {
  cities: City[];
  addRoute: (s: string, l: string) => void;
  addMultipleRoutes: (mr: string) => void;
  calculateRouteDistance: (f: string, t: string) => number;
}

const DEFAULT_TRAINS_CONTEXT_DATA: TrainsContextData = {
  cities: [],
  addRoute: () => null,
  addMultipleRoutes: () => null,
  calculateRouteDistance: () => 0,
};

const trainsContext = createContext<TrainsContextData>(
  DEFAULT_TRAINS_CONTEXT_DATA
);

const { Provider } = trainsContext;

export const TrainsProvider: React.FC = ({ children }) => {
  const [cities, setCities] = useState<City[]>([]);

  const checkIfCityExists = (cityName: string): City | null => {
    const city = cities.filter((city) => city.name === cityName);
    if (city.length) {
      return city[0];
    }
    return null;
  };

  const addMultipleRoutes = (s: string) => {
    const mrc = s.split(",");
    console.log("multipleRouteCommands: ", mrc);
    for (let index = 0; index < mrc.length; index++) {
      const frc = mrc[index];
      const commandCities = frc.trim().split("");
      const routeCommand = commandCities[0].trim() + commandCities[1].trim();
      const routeLength = commandCities[2].trim();
      addRoute(routeCommand, routeLength);
    }
  };

  const addRoute = (routeCommand: string, routeLength: string) => {
    const commandCities = routeCommand.split("");
    const from = commandCities[0];
    const to = commandCities[1];
    const distance = parseInt(routeLength);
    if (from === to || distance === 0 || commandCities.length > 2) {
      alert("Invalid route");
      return;
    }
    let existingCity = checkIfCityExists(from);
    if (!existingCity) {
      const newCities: City[] = [...cities];
      newCities.push({ name: from, routes: [{ from, to, distance }] });
      setCities(newCities);
      return;
    }
    const cityIndex = cities.indexOf(existingCity);
    const existingRoute = existingCity.routes.filter((route) => {
      return route.to === to;
    });
    console.log("existingRoute: ", existingRoute);
    if (existingRoute.length) {
      alert("Route already exists!");
      return;
    }
    const newExistingRoutes = [...existingCity.routes];
    newExistingRoutes.push({ from, to, distance });
    existingCity.routes = newExistingRoutes;
    const newCities = [...cities];
    newCities.splice(cityIndex, 1, existingCity);
    setCities(newCities);
  };

  const calculateRouteDistance = (from: string, to: string): number => {
    return 0;
  };

  return (
    <Provider
      value={{ cities, addMultipleRoutes, addRoute, calculateRouteDistance }}
    >
      {children}
    </Provider>
  );
};

const useTrains = (): TrainsContextData => {
  const context = useContext(trainsContext);
  if (!context)
    throw new Error("useTrains must be used within <TrainsProvider>");
  return context;
};

export default useTrains;
