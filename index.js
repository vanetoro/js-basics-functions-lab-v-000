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

function calculatesFarePrice(start,destination){
  
}