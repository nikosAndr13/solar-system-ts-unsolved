// SPACE DATA EXERCISE 4
// Return an array of Planets' names with gravity less than 10
// Return example: ['name1', 'name2', ... , 'nameN']

import { Planet } from "../data/data"

export function getPlanetNamesWithLowGravity(planets: Planet[]): string[] {
  return planets.reduce((acc: string[], planet: Planet) => {
    if (planet.gravity < 10) {
      acc.push(planet?.name)
    }
    return acc
  }, [])
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
