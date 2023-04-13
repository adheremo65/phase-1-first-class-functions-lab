// Code your solution in this file!
const returnFirstTwoDrivers = function (x=['Antonia', 'Nuru', 'Amari', 'Mo']) {
    return x.slice(0,2);
}
const returnLastTwoDrivers = function (x=['Antonia', 'Nuru', 'Amari', 'Mo']) {
    return x.slice(2,5);
}

  const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

  function createFareMultiplier(Y){
    let X = 5;
    return function (Y){
        return Y*X;
    }
  }

  function fareDoubler(n){
    let m = 2*n
    return m; 
  }

  function fareTripler(u){
    let z = 3*u;
    return z; 
  }
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
function slicer(array){
  let sliced = array.slice(0,2)
  return sliced;
}

function selectDifferentDrivers(array,cb){
  return cb(array);
}
