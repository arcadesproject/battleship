import React from 'react'
import Ship from './Ship'

//Gameboard places ships at specific points using Ship factory function
//Keep track of misses to display properly
//Report if all Ships of a player have been sunk
const Gameboard = () => {

    //receiveAttack takes a pair of co-ordinates and determines if a Ship has been hit
    //if hit then send hit() function to correct ship
    //if miss then record co-ordinates and mark on DOM
    const receiveAttack = (x, y) => {

    }
    return (
        <div className="gameBoard">
            
        </div>
    )
}

export default Gameboard