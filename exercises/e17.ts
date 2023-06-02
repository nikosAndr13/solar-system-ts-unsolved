type Person = {
  name: string;
  age: number;
};

export const minBy = <T>(array: T[], cb: (person: T) => number | string) => {
  if (array.length === 0) { return undefined };
  return array.reduce((lowestObj, currentObj) => {
    if (cb(currentObj) < cb(lowestObj)) {
      return currentObj;
    } else { return lowestObj };
  })
};

export function maxBy<T>(array: T[], cb: (element: T) => number | string) {
  if (array.length === 0) { return undefined };
  return array.reduce((highestObj, currentObj) => {
    if (cb(currentObj) > cb(highestObj)) {
      return currentObj;
    } else { return highestObj };
  })
}
