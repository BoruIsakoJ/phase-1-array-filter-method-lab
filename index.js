// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
//function findMatching(drivers, driverName) {
  //  return drivers.filter(driver => driver.name.toLowerCase() === driverName.toLowerCase());
//}
function findMatching(drivers, driverName) {
    return drivers.filter(driver => driver.toLowerCase() === driverName.toLowerCase());
}
console.log(findMatching(drivers, "SAmmy"))

function fuzzyMatch(drivers, letter) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letter.toLowerCase()));
}
function matchName(drivers, name){
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase())
}