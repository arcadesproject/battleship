// const placesOne = [ //use state since may change? in component etc
//     [Ship(2, 0, 'Patrol Boat'), 1, 'vertical'],
//     [Ship(3, 1, 'Submarine'), 62, 'horizontal'],
//     [Ship(3, 2, 'Destroyer'), 3, 'vertical'],
//     [Ship(4, 3, 'Battleship'), 4, 'vertical'],
//     [Ship(5, 4, 'Carrier'), 91, 'horizontal']
// ]

// const placesTwo = [
//     [Ship(2, 5, 'Patrol Boat'), 1, 'vertical'],
//     [Ship(3, 6, 'Submarine'), 12, 'vertical'],
//     [Ship(3, 7, 'Destroyer'), 3, 'vertical'],
//     [Ship(4, 8, 'Battleship'), 49, 'vertical'],
//     [Ship(5, 9, 'Carrier'), 91, 'horizontal']
// ]

const boats = [
    {length: 2, name: 'Patrol Boat', id: 0, square: 1, direction: 'vertical', locations: [], hits: [], sunk: false},
    {length: 3, name: 'Submarine', id: 1, square: 62, direction: 'horizontal', locations: [], hits: [], sunk: false},
    {length: 3, name: 'Destroyer', id: 2, square: 3, direction: 'vertical', locations: [], hits: [], sunk: false},
    {length: 4, name: 'Battleship', id: 3, square: 4, direction: 'vertical', locations: [], hits: [], sunk: false},
    {length: 5, name: 'Carrier', id: 4, square: 91, direction: 'horizontal', locations: [], hits: [], sunk: false}
]

export default boats