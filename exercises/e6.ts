// SPACE DATA EXERCISE 6
// Return an array with all asteroids discovered after a given year

import { asteroid } from "./e2";

export function getAsteroidsDiscoveredAfterYear(asteroids: asteroid[], year: number) {
  return asteroids.reduce((acc: asteroid[], asteroid: asteroid) => {
    if (asteroid.discoveryYear > year) {
      acc.push(asteroid)
    }
    return acc;
  }, [])
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-6"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
