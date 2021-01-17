import React, { useState } from 'react'
import Player from '../factories/Player'
import Gameboard from '../factories/Gameboard'
import boats from '../shipData'

//Game loop logic, player one, check hit, update, etc. then computer
const Game = (props) => {
	
	let grid = []
    for (let i = 0; i < 100; i++) {
        grid.push(i)
	}

    //const human = Player('human')
    const humanBoard = Gameboard()
    boats.forEach(ship => {
        return humanBoard.place(ship)
    })


    const computer = Player('computer')
    const computerBoard = Gameboard()
    boats.forEach(ship => {
        return computerBoard.place(ship)
    })

    console.log(computerBoard)

    return (
    	<>
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
									computer.computerChoice(humanBoard)
                                }}
                                >

                                </div> 
		    		}
		    		
		    	})}
    		</div>

    		<div className="gridContainer">
		    	{grid.map((square, index) => {
		    		if (humanBoard.misses.includes(square)) {
		    			return <div className="missSquare" key={square}></div>
		    		} else if (humanBoard.ships.some(ship => ship.locations.includes(square))) {
		    			return <div className="shipSquare" key={square}></div>
		    		} else { 
		    			return <div className="square" key={square}></div> 
		    		}
		    		
		    	})}
    		</div>

    	</>
    )
}

export default Game

// const Game = ({boatList}) => {

//     const humanBoard = Gameboard()
//     const computerBoard = Gameboard()
//     let computerShips = [...boatList]
    

//     return (
//         <div>
//             <h3>Computer</h3>
//             <div className="gridContainer">
//                 {computerBoard.grid.map((i, index) => {

//                     if (computerBoard.missedPositions.includes(i)) {
//                         return <div className="missSquare" key={i}></div>
//                     }
//                     else if (computerBoard.hitPositions.includes(i)) {
//                         return <div className="hitSquare" key={i}></div>
//                     }
//                     else { return <div className="square" key={i}
//                         onClick={() => {
//                             computerBoard.receiveAttack(index, computerShips)
//                             computerBoard.checkSunk(computerShips)
//                             }}></div>
//                 }})}
//                 {computerBoard.allSunk === true && 
//                     <p>Game Over! You sunk all their ships</p>
//                 }
//             </div>
//             <h3>Player</h3>
//             <div className="gridContainer">
//                 {humanBoard.grid.map((i, index) => {
//                     if (humanBoard.shipPositions.includes(i)) {
//                         return <div className="shipSquare" key={i}></div>
//                     }
//                     return <div className="square" key={i}></div>
//                 })}
//             </div>
//         </div>
//     )
// }

// export default Game