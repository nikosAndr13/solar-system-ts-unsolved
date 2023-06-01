// SPACE DATA EXERCISE 10
// Return a given asteroid object of data
// make sure that you destructure your parameters
import { AllData } from "../data/data";
export function getAsteroidDataByName({ allData, asteroidName }: { allData: AllData, asteroidName: string }) {
  const asteRoid = allData.asteroids.filter(asteroid => asteroid.name === asteroidName);
  return asteRoid ? asteRoid[0] : undefined;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
