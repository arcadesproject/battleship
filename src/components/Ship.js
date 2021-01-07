import React from 'react'

// Ship - lenght, where it has been hit, if it has been sunk
// Ship(4, [], false)
// need positions to check hits and where it is?
const Ship = (length, hitPosition, sunk) => {
    // hit takes a number and marks the position on the ship as hit
    const hit = (num) => {
      const { positionX, positionY } = num.target
      hitPosition.push(`${positionX}${positionY}`)
    }
    // isSunk calculates if Ship is sunk based on Ship length and if all positions 'hit'
    const isSunk = (ship) => {
      if (ship.length === hitPosition.length) {
        ship.sunk = true
      }
    }

    return {
      length,
      hitPosition,
      sunk,
      // hit
    }
  }

export default Ship
