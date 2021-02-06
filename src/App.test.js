import { render, screen } from '@testing-library/react';
import App from './App';
import Ship from './factories/Ship'
import Gameboard from './factories/Gameboard'
import { computerBoardData, humanBoardData } from './boardData'
import Player from './factories/Player'
import computer from './playerData'
import Game from './components/Game'
import { playerBoats, computerBoats } from './shipData'

const newShip = Ship(playerBoats[1])
const newShip2 = Ship(computerBoats[1])
const newShip3 = Ship(playerBoats[2])
const newShip4 = Ship(computerBoats[2])

describe('Testing ship factory', () => {
  
  newShip.hitAction(4)
  newShip.hitAction(5)
  newShip.hitAction(6)
  newShip.isSunk()
  newShip2.hitAction(3)
  newShip2.hitAction(13)
  newShip2.hitAction(23)
  
  test('check hitAction', () => {
    expect(newShip.hits).toEqual([4, 5, 6])
  })

  test('check second ship hits', () => {
    expect(newShip2.hits).toEqual([3, 13, 23])
  }) 

  test('Check isSunk', () => {
    expect(newShip.sunk).toBe(true)
  })


})

describe('Gameboard tests', () => {
  const newGameBoard = Gameboard(humanBoardData)
  const newGameBoard2 = Gameboard(computerBoardData)
  newGameBoard.place(newShip3)
  newGameBoard2.place(newShip4)
  newGameBoard.receiveAttack(newGameBoard, 0)
  newGameBoard.receiveAttack(newGameBoard, 10)
  newGameBoard.receiveAttack(newGameBoard, 3)
  newGameBoard.receiveAttack(newGameBoard, 13)
  newGameBoard.receiveAttack(newGameBoard, 23)
  newGameBoard2.receiveAttack(newGameBoard2, 0)
  newGameBoard2.receiveAttack(newGameBoard2, 3)
  newGameBoard.checkSunk(newGameBoard)


  test('Ship places on board properly', () => {
    expect(newShip3.locations).toEqual ([3, 13, 23])
  })

  test('Gameboard has ships', () => {
    expect(newGameBoard.ships.length).toBe(1)
  })
  
  test('Receive attack, track misses', () => {
    expect(newGameBoard.misses).toEqual([0, 10])
    expect(newGameBoard2.misses).toEqual([0])
  })

  test('Right ship hit', () => {
    expect(newShip3.hits).toEqual([3, 13, 23])
    expect(newShip4.hits).toEqual([3])
  })

  test('Able to check if all ships sunk', () => {
    expect(newGameBoard.sunk).toBe(true)
  })

})

// describe('Player factory tests', () => {
//   const player = Player(computer)
//   const newGameBoard3 = Gameboard(humanBoardData)
//   player.computerChoice(newGameBoard3)
//   player.computerChoice(newGameBoard3)
//   player.computerChoice(newGameBoard3)

//   test('Player hits array', () => {
//     expect(player.hits.length).toBe(3)
//   })

