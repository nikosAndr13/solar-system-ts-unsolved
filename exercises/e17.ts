export const minBy = (array: [], cb: (element: object) => {}) => {
  if (array.length === 0) { return undefined };
  return array.reduce((lowestObj, currentObj) => {
    if (cb(currentObj) < cb(lowestObj)) {
      return currentObj;
    } else { return lowestObj };
  })
};

export function maxBy(array: [], cb: (element: object) => {}) {
  if (array.length === 0) { return undefined };
  return array.reduce((highestObj, currentObj) => {
    if (cb(currentObj) > cb(highestObj)) {
      return currentObj;
    } else { return highestObj };
  })
}
