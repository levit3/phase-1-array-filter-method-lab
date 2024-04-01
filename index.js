function findMatching(array, string) {
  let allDrivers = array.filter(
    (driver) => driver.toLowerCase() === string.toLowerCase()
  );
  return allDrivers;
}
function fuzzyMatch(array, string) {
  let x = array.filter(
    (driver) => driver.split("", string.length).join("") === string
  );
  return x;
}
function matchName(array, string) {
  let x = array.filter((driver) => driver["name"] === string);
  return x;
}
