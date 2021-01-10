import { render, screen } from '@testing-library/react';
import App from './App';
import Ship from './factories/Ship'
import Gameboard from './factories/Gameboard'
import Player from './factories/Player'
import Game from './components/Game'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Check hit and isSunk functions work', () => {
  const newShip = Ship(4, 3, 'Battleship')
  newShip.hit(4)
  newShip.hit(5)
  newShip.hit(6)
  newShip.hit(7)
  newShip.isSunk(newShip)
  expect(newShip).toEqual( {
    id: 3,
    length: 4,
    title: 'Battleship',
    location: [],
    hitLocation: [4, 5, 6, 7],
    sunk: true,
    hit: expect.any(Function),
    isSunk: expect.any(Function)
  })
})

test('Adding a ship to Gameboard, ship will not add if ship already there', () => {
  const board = Gameboard()
  const ship2 = Ship(3, 2, 'Destroyer')
  board.place([ship2, 2, 'vertical']) 
  expect(board.shipPositions).toEqual( [2, 12, 22])
  expect(ship2.location).toEqual( [2, 12, 22])
  expect(ship2.direction).toEqual('vertical')
  expect(board.ships).toEqual([ship2])
})

test('Check receiveAttack hits right boat, missedPositions work etc.', () => {
  const ship3 = Ship(3, 3, 'Destroyer')
  const board = Gameboard()
  board.place([ship3, 3, 'vertical'])
  board.receiveAttack(13)
  board.receiveAttack(23)
  
  board.receiveAttack(14)
  board.receiveAttack(3)
  expect(ship3.hitLocation).toEqual([13, 23, 3])
  expect(board.missedPositions).toEqual([14])
  expect(ship3.sunk).toEqual(true)
  expect(board.ships[0].sunk).toEqual(true)
  board.checkSunk(board)
  expect(board.allSunk).toEqual(true)
})

// test('Check player turn', () => {
//   const game = Game()
//   expect(Game.human.computerHits.length).toBe(1)
// })