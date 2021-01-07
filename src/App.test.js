import { render, screen } from '@testing-library/react';
import App from './App';
import Ship from './components/Ship'
import Gameboard from './components/Gameboard'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('check ship created', () => {
  expect(Ship(4, ['a1', 'a2', 'a3'], false)).toEqual( {
    length: 4,
    hitPosition: ['a1', 'a2', 'a3'],
    sunk: false
  })
})