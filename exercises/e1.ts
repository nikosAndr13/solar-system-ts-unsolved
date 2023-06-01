// SPACE DATA EXERCISE 1
// Return an array of all Planets' names
// Return example: ['name1', 'name2', ... , 'nameN']

export interface planet {
  name: string;
  id: string;
  isPlanet: boolean;
  mass: {
    massValue: number;
    massExponent: number;
  };
  vol: {
    volValue: number;
    volExponent: number;
  };
  gravity: number;
  avgTemp: number;
  moonsCount: number;
  moons: string[];
}

export function getPlanetNames(planets: planet[]): string[] {
  return planets.map((planet => planet?.name))
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-1"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
