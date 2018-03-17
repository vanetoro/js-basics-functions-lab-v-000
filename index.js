// Code your solution in this file!

function distanceFromHqInBlocks(pickUp){
   return Math.abs(pickUp -42)
}
function distanceFromHqInFeet(pickUp){
  return distanceFromHqInBlocks(pickUp) * 264
}

function distanceTravelledInFeet(pickUp, dropOff){
  return Math.abs((pickUp - dropOff) * 264)
}

function calculatesFarePrice(start, destination){
  let distance = Math.abs(start - destination)
  switch(distance){
    case distance < 400:
      return 0;
    case distance > 400 && distance < 2000:
    return distance * 2;
    case distance > 2000 && distance < 2500:
    return 25;
    case distance > 2500:
      return 'cannot travel that far'
  }
}