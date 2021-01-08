import { render, screen } from '@testing-library/react';
import App from './App';
import Ship from './factories/Ship'
import Gameboard from './components/Gameboard'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Check hit and isSunk functions work', () => {
  const newShip = Ship(3)
  newShip.hit(4)
  newShip.hit(5)
  newShip.hit(6)
  newShip.isSunk(newShip)
  expect(newShip).toEqual( {
    length: 3,
    hitLocation: [4, 5, 6],
    sunk: true,
    hit: expect.any(Function),
    isSunk: expect.any(Function)
  })
})