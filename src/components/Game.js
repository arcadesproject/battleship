import React from 'react'
import Player from '../factories/Player'
import Gameboard from '../factories/Gameboard'
import Ship from '../factories/Ship'

//Game loop logic, player one, check hit, update, etc. then computer
const Game = () => {

    const human = Player('human')
    const humanBoard = Gameboard()
    const computerBoard = Gameboard()

    //Ship(length, id, title), position, direction
    const placesOne = [ 
        [Ship(2, 0, 'Patrol Boat'), 1, 'vertical'],
        [Ship(3, 1, 'Submarine'), 62, 'horizontal'],
        [Ship(3, 2, 'Destroyer'), 3, 'vertical'],
        [Ship(4, 3, 'Battleship'), 4, 'vertical'],
        [Ship(5, 4, 'Carrier'), 91, 'horizontal']
    ]

    const placesTwo = [
        [Ship(2, 5, 'Patrol Boat'), 1, 'vertical'],
        [Ship(3, 6, 'Submarine'), 12, 'vertical'],
        [Ship(3, 7, 'Destroyer'), 3, 'vertical'],
        [Ship(4, 8, 'Battleship'), 49, 'vertical'],
        [Ship(5, 9, 'Carrier'), 91, 'horizontal']
    ]
    
    //put pieces on players board and computer board
    placesOne.forEach(e => humanBoard.place(e))
    placesTwo.forEach(e => computerBoard.place(e))

    human.turnEvent(human)

    const turnEvent = (player) => {
        if ( turn === true ) {
            // playerChoose()
            player.turn = !player.turn
        } else {
            player.computerTurn(player)
            player.turn = !player.turn
        }
    }

    //only needs to trigger after every player choice
    const computerTurn = (player) => {
        let selection = Math.floor(Math.random() * 100)
        if (!player.computerHits.includes(selection)) {
            player.computerHits.push(selection)
        }
    }

}

export default Game