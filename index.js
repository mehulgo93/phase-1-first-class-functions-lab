// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
    let newArr = arr.slice(0,2);
    return newArr;
}

const returnLastTwoDrivers = function(arr) {
    let newArr = arr.slice(-2);
    return newArr;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
            return function (fare) {
                      return fare * int;
    
}}

function fareDoubler(fare) {
    const doubler = createFareMultiplier(2);
    return doubler(fare);
  }

  function fareTripler(fare) {
    const tripler = createFareMultiplier(3);
    return tripler(fare);
  }

  function selectDifferentDrivers(arr, returnFirstTwoDrivers) {
   return returnFirstTwoDrivers(arr);
  }