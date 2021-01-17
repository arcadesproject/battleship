// Ship - length, where it has been hit, if it has been sunk
// Ships are premade 
// need positions to check hits and where it is?
//import { useState, useRef, useEffect } from 'react'

const Ship = ({length, name, id, square, direction, locations, hits, sunk}) => {

	const hitAction = (square, boat) => {
    	boat.hits.push(square)
  	}

	const isSunk = (boat) => {
		if(locations.length === hits.length) { 
      		boat.sunk = !sunk 
    	}
  	}

	return {
		length, 
		name,
		id, 
		square, 
		direction,
		locations,
		hits,
		sunk,
		hitAction,
		isSunk
	}
}


// const Ship = ({length, name, id, square, direction}) => {
//   const [hitLocation, setHitLocation] = useState([])
//   let location = []

//   if(direction === 'horizontal') {
//     for(let i = 0; i < length; i++) {
//       location.push(square + i)
//     }
//   } else {
//     for(let i = 0; i < length; i++) {
//       location.push(square + (i*10))
//     }
//   }

//   // hit takes a number and marks the position on the ship as hit
//   // board 10 x 10 so 100 'positions'
//   const hit = (coord) => {
//     //updating after dom
//     setHitLocation(
//       prevState => [...prevState.concat(coord)]
//     )
//   }
  
//   // isSunk calculates if Ship is sunk based on Ship length and if all positions 'hit'
//   const isSunk = (ship) => {
//     if (location.every(pos => hitLocation.includes(pos))) {
//       ship.sunk = true
//     }
//   }

//   return {
//     length,
//     id,
//     name,
//     location,
//     hitLocation,
//     sunk: false,
//     hit,
//     isSunk,
//   }
// }

export default Ship