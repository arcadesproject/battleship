import React from 'react'
import './App.css';
import Game from './components/Game'
import Player from './factories/Player'
import Gameboard from './factories/Gameboard'
import computer from './playerData'
import { computerBoardData, humanBoardData } from './boardData'


const App = () => {
  const humanBoard = Gameboard(humanBoardData)
	const computerBoard = Gameboard(computerBoardData)
  const computerPlayer = Player(computer)
  
  console.log(humanBoard)

  return (
    <div className="App">
      <Game 
        humanBoard={humanBoard}
        computerBoard={computerBoard}
        computerPlayer={computerPlayer}
      />
    </div>
  );
}

export default App;