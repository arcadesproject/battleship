//players take turns playing the game by attacking enemy Gameboard
//played vs. computer which picks co-ordinates randomly but can't shoot same co-ords twice

const Player = ({name, hits}) => {
	
	const computerChoice = (humanBoard) => {
		let square = squarePicker()
		if(!hits.includes(square)) {
			hits.push(square)
			humanBoard.receiveAttack(humanBoard, square)
		} else {
			computerChoice(humanBoard)
		}
	}

	const squarePicker = () => {
		return Math.floor(Math.random() * 100)
	}

	return {
		name,
		hits,
		computerChoice
	}
}

export default Player