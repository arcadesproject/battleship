import React from 'react'
import './App.css';

const App = () => {

  

  const isSunk = (ship) => {
    if (ship.length === ship.hitPosition.length) {
      return true
    } else {
      return false
    }
  }

  const Gameboard = () => {
    
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
