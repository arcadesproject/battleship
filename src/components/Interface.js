import React from 'react'
import Game from './Game'
//import Gameboard from '../factories/Gameboard'

//DOM module
const Interface = () => {
    const game = Game()
    const { computerBoard, humanBoard } = game

    return (
        <div>
            <h3>Computer</h3>
            <div className="gridContainer">
                
                {computerBoard.grid.map((i, index) => {

                    if (computerBoard.missedPositions.includes(i)) {
                        return <div className="missSquare" key={index}></div>
                    }
                    else if (computerBoard.hitPositions.includes(i)) {
                        return <div className="hitSquare" key={index}></div>
                    }
                    else { return <div className="square" key={index}
                        onClick={() => {
                            computerBoard.receiveAttack(index)
                            //console.log(computerBoard.receiveAttack())
                            }}></div>
                }})}
            </div>
            <h3>Player</h3>
            <div class="gridContainer">
                {humanBoard.grid.map((i, index) => {
                    if (humanBoard.shipPositions.includes(i)) {
                        return <div className="shipSquare" key={index}></div>
                    }
                    return <div className="square" key={index}></div>
                })}
            </div>
        </div>
    )
}

export default Interface