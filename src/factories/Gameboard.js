//Gameboard places ships at specific points using Ship factory function
//Keep track of misses to display properly
//Report if all Ships of a player have been sunk 
import Ship from './Ship'
import { playerBoats, computerBoats } from '../shipData'

const Gameboard = ({title, ships, sunk, hits, misses, message, sunkMessage, gameOverText}) => {

	const place = (ship) => {
		const { direction, square, length } = ship
		let temp = []
		for (let i = 0; i < length; i++) {
			direction === 'vertical' 
				? temp.push(square + (i * 10)) 
				: temp.push(square + i)
		}
		ship.locations = [...temp]
		ships.push(ship)
	}

	const receiveAttack = (board, square) => {
		let boats = board.ships
		if (boats.some(boat => boat.locations.includes(square))) {
			let boat = boats.find(ship => ship.locations.includes(square))
			boat.hitAction(square)
			boat.isSunk(boat)
			hits.push(square)
			checkSunk(board)
			board.message = `${boat.name} hit!`
			if (boat.sunk) {
				board.sunkMessage = `Sunk ${boat.name}!`
			} else {
				board.sunkMessage = ``
			}
		} else {
			misses.push(square)
			board.message = `Miss!`
			board.sunkMessage = ''
			console.log(misses)
		}	
	}

	const checkSunk = (board) => {   
		const { ships } = board
		if ( ships.every(ship => ship.sunk === true) )  {
			board.sunk = !board.sunk
			if (board.title === 'computer') {
				board.gameOverText = 'You Win!'
			} else {
				board.gameOverText = 'Computer wins!'
			}
			console.log('test')
			console.log(board)
		}
	}

	if (title === 'computer') {
		computerBoats.forEach(ship => {
			place(Ship(ship))
		})
	} else {
		playerBoats.forEach(ship => {
			place(Ship(ship))
		})
	}

	return {
		title,
		ships,
		sunk,
		hits, 
		misses, 
		message,
		sunkMessage,
		gameOverText,
		place,
		receiveAttack,
		checkSunk,
	}
}

export default Gameboard