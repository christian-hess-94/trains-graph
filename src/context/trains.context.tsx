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
  calculateRouteDistance: (c: string) => number;
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
  const checkIfCityExistsLocally = (
    cityName: string,
    existingCities: City[]
  ): City | null => {
    const city = existingCities.filter((city) => city.name === cityName);
    if (city.length) {
      return city[0];
    }
    return null;
  };

  const addMultipleRoutes = (s: string) => {
    const multipleRouteCommands = s.split(",");
    const newCities = [...cities];
    multipleRouteCommands.forEach((routeCommand) => {
      const trimmedRouteCommand = routeCommand.trim().split("");
      const from = trimmedRouteCommand[0];
      const to = trimmedRouteCommand[1];
      const distance = parseInt(trimmedRouteCommand[2]);
      console.group(routeCommand);
      if (from === to || distance === 0 || trimmedRouteCommand.length > 3) {
        console.log("Invalid Route");
        console.groupEnd();
        return;
      }

      let existingCity = checkIfCityExistsLocally(from, newCities);
      if (!existingCity) {
        console.log(
          from +
            " city doesnt exist, creating it and the route to:" +
            to +
            " with distance: " +
            distance
        );
        newCities.push({ name: from, routes: [{ from, to, distance }] });
        console.groupEnd();
        return;
      }
      console.log(from + " City exists, continuing");

      const cityIndex = newCities.indexOf(existingCity);
      console.log(from + " cityIndex: ", cityIndex);
      const existingRoute = existingCity.routes.filter((route) => {
        return route.to === to;
      });
      if (existingRoute.length) {
        console.log("Route already exists");
        console.groupEnd();
        return;
      }
      console.log(from + " Route to:" + to + " doesnt exist, creating");
      const newExistingRoutes = [...existingCity.routes];
      newExistingRoutes.push({ from, to, distance });
      console.log(from + " newExistingRoutes: ", newExistingRoutes);
      existingCity.routes = newExistingRoutes;
      newCities.splice(cityIndex, 1, existingCity);
      console.table(newCities);
      console.groupEnd();
    });
    setCities(newCities);
    // console.log({ currentCities, multipleRouteCommands });
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

  const calculateRouteDistance = (cityString: string): number => {
    const citiesArray = cityString.split("");
    let totalDistance = 0;
    let routeIsValid = true;
    citiesArray.forEach((cityName, cityIndex) => {
      const selectedCity = cities.filter((city) => city.name === cityName)[0];
      if (!selectedCity) {
        alert(`${cityName} doesn't exist!`);
        routeIsValid = false;
        return;
      }
      let nextCity = "";
      if (cityIndex < citiesArray.length - 1) {
        nextCity = citiesArray[cityIndex + 1];
      } else {
        return;
      }
      const selectedRoute = selectedCity.routes.filter(
        (route) => route.to === nextCity
      )[0];
      if (!selectedRoute) {
        alert(`Route from ${cityName} to ${nextCity} doesn't exist!`);
        routeIsValid = false;
        return;
      }
      totalDistance += selectedRoute.distance;
    });
    if (!routeIsValid) {
      return 0;
    }
    alert(totalDistance);
    return totalDistance;
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
