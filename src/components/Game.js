import { useState } from 'react'

//Game loop logic, player one, check hit, update, etc. then computer
const Game = ({computerBoard, humanBoard, computerPlayer}) => {

	const grid = []
    for (let i = 0; i < 100; i++) {
        grid.push(i)
	}

	const [turn, setTurn] = useState(0)
	const [start, setStart] = useState(false)

	const gameStart = () => setStart(true)

	const restart = () => {
		let temp = [computerBoard, humanBoard]
		temp.forEach(item => {
			item.gameOverText = ''
			item.message = ''
			item.sunkMessage = ''
			item.gameOverText = ''
			item.misses.splice(0, item.misses.length)
			item.hits.splice(0, item.hits.length)
			item.ships.forEach(ship => {
				ship.hits.splice(0, ship.hits.length)
				ship.sunk = false
			})
		})
		computerBoard = temp[0]
		humanBoard = temp[1]
		console.log(computerBoard)
		console.log(humanBoard)
		setStart(false)
	}

	const gameOver = () => {
		if(computerBoard.sunk || humanBoard.sunk) {
			setStart(false)
		}
	}

    if(start) {
		return (
			<div className="container">
				<div>
					<div className="gridContainer">
						{grid.map(square => {
							if (computerBoard.misses.includes(square)) {
								return <div className="missSquare" key={square}></div>
							} else if (computerBoard.ships.some(ship => ship.hits.includes(square))) {
								return <div className="hitSquare" key={square}></div>
							} else { 
								return <div className="square"
										key={square}
										onClick={()=> {
											computerBoard.receiveAttack(computerBoard, square)
											computerPlayer.computerChoice(humanBoard)
											gameOver()
											setTurn(turn + 1)
										}}>
										</div> 
							}	
						})}
					</div>

					<div className="gridContainer">
						{grid.map((square, index) => {
							if (humanBoard.misses.includes(square)) {
								return <div className="missSquare" key={square}></div>
							} else if (humanBoard.ships.some(ship => ship.hits.includes(square))){
								return <div className="hitSquare" key={square}></div>
							} else if (humanBoard.ships.some(ship => ship.locations.includes(square))) {
								return <div className="shipSquare" key={square}></div>
							} else { 
								return <div className="square" key={square}></div> 
							}
							
						})}
					</div>
				</div>

				<div className="updateContainer">
					<p>{computerBoard.gameOverText}</p>
					<p>{humanBoard.gameOverText}</p>
					<p>{computerBoard.message}</p>
					<p>{computerBoard.sunkMessage}</p>
					<p>{humanBoard.message}</p>
					<p>{humanBoard.sunkMessage}</p>
					<button onClick={() => {
						restart()
					}}>
						Restart
					</button>
				</div>

			</div>
		)
	} else {
		return (
			<div className="container">
				<div>
					<div className="gridContainer">
						{grid.map((square, index) => {
							if (computerBoard.misses.includes(square)) {
								return <div className="missSquare" key={square}></div>
							} else if (computerBoard.ships.some(ship => ship.hits.includes(square))) {
								return <div className="hitSquare" key={square}></div>
							} else { 
								return <div className="square" key={square}></div> 
							}
						})}
					</div>
					<div className="gridContainer">
						{grid.map((square, index) => {
							if (humanBoard.misses.includes(square)) {
								return <div className="missSquare" key={square}></div>
							} else if (humanBoard.ships.some(ship => ship.hits.includes(square))){
								return <div className="hitSquare" key={square}></div>
							} else if (humanBoard.ships.some(ship => ship.locations.includes(square))) {
								return <div className="shipSquare" key={square}></div>
							} else { 
								return <div className="square" key={square}></div> 
							} 
						})}
					</div>
				</div>
				<div className="updateContainer">
					<p>{computerBoard.gameOverText}</p>
					<p>{humanBoard.gameOverText}</p>
					<p>{computerBoard.message}</p>
					<p>{computerBoard.sunkMessage}</p>
					<p>{humanBoard.message}</p>
					<p>{humanBoard.sunkMessage}</p>
					<button onClick={()=> {
						gameStart()
					}}>
						Start
					</button>
				</div>

			</div>
		)
	}
}

export default Game