//players take turns playing the game by attacking enemy Gameboard
//played vs. computer which picks co-ordinates randomly but can't shoot same co-ords twice

const Player = (name) => {
	
	let computerChoices = []

	const computerChoice = (humanBoard) => {
		let square = Math.floor(Math.random() * 100)
		if(!computerChoices.includes(square)) {
			computerChoices.push(square)
			humanBoard.receiveAttack(humanBoard, square)
		}
	}

	return {
		name,
		computerChoice
	}
}

export default Player