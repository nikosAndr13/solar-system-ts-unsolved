// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { Asteroid } from "../data/data";

export function getGreatestDiscoveryYear(asteroids: Asteroid[]) {
  const counts = new Map<number, number>();

  asteroids.forEach((asteroid) => {
    const { discoveryYear } = asteroid;
    counts.set(discoveryYear, (counts.get(discoveryYear) || 0) + 1);
  });

  let maxYear: number | undefined;
  let maxCount = 0;

  counts.forEach((count, year) => {
    if (count > maxCount) {
      maxCount = count;
      maxYear = year;
    }
  });

  return maxYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
