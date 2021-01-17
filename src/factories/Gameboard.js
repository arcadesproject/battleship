//Gameboard places ships at specific points using Ship factory function
//Keep track of misses to display properly
//Report if all Ships of a player have been sunk 
import Ship from './Ship'
const Gameboard = () => {
    let ships = []
	let misses = [] // state?
	let sunk = false

	const place = (ship) => {
		const { direction, square, length } = ship
		let temp = []
		for (let i = 0; i < length; i++) {
			direction === 'vertical' 
				? temp.push(square + (i * 10)) 
				: temp.push(square + i)
		}
		ship.locations = [...temp]
		ships.push(Ship(ship))
	}
	//boats haven't used Ship factory so don't have hitAction
	const receiveAttack = (board, square) => {
		if (board.ships.some(boat => boat.locations.includes(square))) {
            const boat = board.ships.find(ship => ship.locations.includes(square)) // or change state?
			boat.hitAction(square, boat)
			boat.isSunk(boat)
			checkSunk(board)
		} else {
			misses.push(square)
		}
	}

	//Need to check if sunk
	const checkSunk = (board) => {   
		const { ships } = board
		if ( ships.every(ship => ship.sunk === true) )  {
			board.sunk = !board.sunk
		}
		console.log(board.sunk)
	}


	// useEffect( () => {
	// 	if (ships.every(boat => boat.sunk === true)) {
	// 		console.log(ships)
	// 	}
	// }, [ships])

	return {
		ships,
		misses,
		sunk,
		place,
		receiveAttack
	}
}

export default Gameboard

//     let grid = []
//     for (let i = 0; i < 100; i++) {
//         grid.push(i)
//     }

//     let shipPositions = []
//     const [missedPositions, setMissedPositions] = useState([])
//     const [hitPositions, setHitPositions] = useState([])
//     const [allSunk, setAllSunk] = useState(false)
    
//     const place = ({direction, locations, length, square}) => {
//         if (direction === 'horizontal') {
//             for(let i = length; i > 0; i--) {
//               locations.push(square + i)
//               console.log(locations)
//             }
//           } else {
//             for(let i = 0; i < length; i++) {
//               locations.push(square + (i*10))
//             }
//           }
//         if (!locations.some(r => shipPositions.includes(r)) 
//             && locations.every(i => grid.includes(i))) { // && in overall array grid
//             shipPositions.push(...locations)
//         }
//         console.log(shipPositions)
//         need to work out what to do if can't be placed
//         take location out of ship factory? recursive function to change coords if not placeable?
//     }

//     const checkSunk = (ships) => {   
//         if ( ships.every(ship => ship.sunk === true) )  {
//             setAllSunk(prevState => !prevState)
//         }
//     }
//     receiveAttack takes a pair of co-ordinates and determines if a Ship has been hit
//     if hit then send hit() function to correct ship
//     if miss then record co-ordinates and mark on DOM
//     const receiveAttack = (i, ships) => {
//         const square = i
//         if ( shipPositions.includes(square)) {
//             const boat = ships.find(ship => ship.locations.includes(square))
//             boat.hitAction(square, boat)
//             boat.isSunk(boat)
//             setHitPositions(
//                 prevState => [...prevState].concat(square)
//             )
//         } else {
//             setMissedPositions(
//                 prevState => [...prevState].concat(square)
//             )
//         }
//     }

//     return {

//     }
// }

