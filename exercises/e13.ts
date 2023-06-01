// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53
import { AllData } from "../data/data";
export function getAveragePlanetsTemperature(data: AllData) {
  let temp = data.planets.reduce((acc: number, planet) => {
    const val = planet.avgTemp;
    return (acc + val);
  }, 0)
  return temp / data.planets.length;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
