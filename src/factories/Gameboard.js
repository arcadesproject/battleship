//Gameboard places ships at specific points using Ship factory function
//Keep track of misses to display properly
//Report if all Ships of a player have been sunk !!!!!!!!!!!!!!!!!!!
const Gameboard = () => {

    let grid = []
    for (let i = 0; i < 100; i++) {
        grid.push(i)
    }
    let shipPositions = []
    let missedPositions = []
    let ships = []

    const place = ([ship, square, direction]) => {
        let temp = []

        if (direction === 'horizontal') {
            for (let i = 0; i < ship.length; i++) {
                temp.push(square + i)
            }
        } else {
            for (let i = 0; i < ship.length; i++) {
                temp.push(square + (i * 10))
            }
        }

        if (!temp.some(r => shipPositions.includes(r)) 
            && temp.every(i => grid.includes(i))) { // && in overall array grid
            shipPositions.push(...temp)
            ship.location.push(...temp)
            ship.direction = direction
            ships.push(ship)
        }
    }

    const checkSunk = (board) => {   
        if ( ships.every(ship => ship.sunk === true) )  {
            board.allSunk = true
        }
    }
    //receiveAttack takes a pair of co-ordinates and determines if a Ship has been hit
    //if hit then send hit() function to correct ship
    //if miss then record co-ordinates and mark on DOM
    const receiveAttack = (square) => {
        if ( shipPositions.includes(square)) { // or check directly in ship keys?
            let boat = ships.find(ship => ship.location.includes(square))
            boat.hit(square)
            boat.isSunk(boat)
        } else {
            missedPositions.push(square)
        }
    }

    

    return {
        shipPositions,
        missedPositions,
        place,
        receiveAttack,
        checkSunk,
        ships,
        grid,
        allSunk: false,
    }
}

export default Gameboard