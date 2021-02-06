// Ship - length, where it has been hit, if it has been sunk
// Ships are premade 
// need positions to check hits and where it is?

const Ship = ({length, name, id, square, direction, locations, hits, sunk}) => ({
		
	length, 
	name,
	id, 
	square, 
	direction,
	locations,
	hits,
	sunk,
	hitAction (square) {
		this.hits.push(square)
		console.log(hits)
	},
	isSunk () {
		if(length === hits.length) {
			this.sunk = !this.sunk
		}	
	}
})

export default Ship