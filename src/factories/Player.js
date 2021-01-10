//players take turns playing the game by attacking enemy Gameboard
//played vs. computer which picks co-ordinates randomly but can't shoot same co-ords twice

const Player = (name) => {
    let turn = true
    let computerHits = []

    const turnEvent = (player) => {
        if ( turn === true ) {
            // playerChoose()
            player.turn = !player.turn
        } else {
            player.computerTurn(player)
            player.turn = !player.turn
        }
    }

    const computerTurn = (player) => {
        let selection = Math.floor(Math.random() * 100)
        if (!player.computerHits.includes(selection)) {
            player.computerHits.push(selection)
        }
    }

    return {
        turn, 
        turnEvent,
        computerTurn,
        computerHits,
        name,
    }

}

export default Player