import React from 'react'

// Ship - length, where it has been hit, if it has been sunk
// Ships are premade 
// need positions to check hits and where it is?
const Ship = ( length, id, title ) => {
  let hitLocation = []
  let location = []

  // hit takes a number and marks the position on the ship as hit
  // board 10 x 10 so 100 'positions'
  const hit = (coord) => {
    hitLocation.push(coord)
  }
  
  // isSunk calculates if Ship is sunk based on Ship length and if all positions 'hit'
  const isSunk = (ship) => {
    if (location.every(pos => hitLocation.includes(pos))) {
      ship.sunk = true
    }
  }

  return {
    length,
    id,
    title,
    location,
    hitLocation,
    sunk: false,
    hit,
    isSunk,
  }
}

export default Ship