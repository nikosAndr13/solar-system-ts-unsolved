// SPACE DATA EXERCISE 7
// Return an array of all Planets names that have moons
import { Planet } from "../data/data"
export function getPlanetsWithMoons(planets: Planet[]): string[] {
  return planets.filter(planet => {
    return (planet.moons !== undefined)
  }).map(planet => planet.name)
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
