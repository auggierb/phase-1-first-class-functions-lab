const returnFirstTwoDrivers = function ([d1,d2,d3,d4]){
return [d1, d2]
}
const returnLastTwoDrivers = function ([d1,d2,d3,d4]){
    return [d3,d4]
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(value){
  fareDoubler()
return function (fare) { return value * fare }
}

const fareDoubler = function (fare){
    return fare * 2} 

const fareTripler = function(fare){
    return fare*3
}
function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
  return returnFirstTwoDrivers(drivers)
}
    





