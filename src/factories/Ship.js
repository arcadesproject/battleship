import React from 'react'

// Ship - length, where it has been hit, if it has been sunk
// Ship(4, [], false)
// need positions to check hits and where it is?
const Ship = (length) => {
  let hitLocation = []
  // hit takes a number and marks the position on the ship as hit
  // board 10 x 10 so 100 'positions'
  const hit = (num) => {
    hitLocation.push(num)
  }
  // isSunk calculates if Ship is sunk based on Ship length and if all positions 'hit'
  const isSunk = (ship) => {
    if (length === hitLocation.length) {
      ship.sunk = true
    }
  }

  return {
    length,
    hitLocation,
    sunk: false,
    hit,
    isSunk,
  }
}

export default Ship