import React, { useState } from 'react'
import './App.css';
import Ship from './factories/Ship'
import Game from './components/Game'
import boats from './shipData'
import Gameboard from './factories/Gameboard';

const App = () => {
  // boats.forEach(boat => {
  //   Ship(boat)
  // })

  // boats.forEach(boat => {
  //   Gameboard().place(boat)
  // })
  // for (let i = 0; i < boats.length; i++) {
  //   let boat = boats[i]
  //   Gameboard().place(boat)
  // }

  // const [boatArray, setBoats] = useState([...boats])

  // console.log(boats)

  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;