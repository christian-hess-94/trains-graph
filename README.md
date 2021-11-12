# How to install and run

1. Install NodeJS and yarn
1. Run the "yarn" command to install dependencies
1. After the installation is finished, run "yarn start" to run the project on port 3000

You can see this project working at it's corresponding [Github Page](https://christian-hess-94.github.io/trains-graph)

## Explanation

- This project allows the user to create cities and connecting routes between them, with specified distances.

- The user can create a route by executing a command that uses the following pattern:

`CITYNAMECITYNAMEDISTANCE`

- Currently the user can create a single route, or multiple routes by adding them separated by commas (,) in the specified text fields.

- The program detects if the user is trying to add an already existing route

- The program detects if the user is trying to add an invalid route

- If the first citie's name doesn't exist, the city is created first before the route itself is created

- The status list below the inputs shows all the cities and their routes

- Routes only go one way (a route from A to C with distance 5 doesn't entail in a route from C to A with distance 5. the second route must be created manually)

- The program is able to calculate a route between multiple cities.

- The program can detect if a route through multiple cities is invalid

- The calculate C to C feaature is incomplete. It's a recursive program that calculates all routes going from C back to C, with a maximum of 3 stops. It currently logs part of the solution to the console.

The project uses the ContextAPI to all the values that are shared in the entire application. There is one context:

- The Trains Context has all the logic for adding cities and their routes aswell as calculating a multiple city route.

All styles and components were custom made using styled-components. The project uses flexbox for positioning.
