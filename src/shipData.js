const playerBoats = [
    {length: 2, name: 'Patrol Boat', id: 0, square: 1, direction: 'vertical', locations: [], hits: [], misses: [], sunk: false},
    {length: 3, name: 'Submarine', id: 1, square: 62, direction: 'horizontal', locations: [], hits: [], misses: [],sunk: false},
    {length: 3, name: 'Destroyer', id: 2, square: 3, direction: 'vertical', locations: [], hits: [], misses: [],sunk: false},
    {length: 4, name: 'Battleship', id: 3, square: 4, direction: 'vertical', locations: [], hits: [], misses: [],sunk: false},
    {length: 5, name: 'Carrier', id: 4, square: 91, direction: 'horizontal', locations: [], hits: [], misses: [],sunk: false}
]

const computerBoats = [
    {length: 2, name: 'Patrol Boat', id: 0, square: 1, direction: 'vertical', locations: [], hits: [], misses: [],sunk: false},
    {length: 3, name: 'Submarine', id: 1, square: 62, direction: 'horizontal', locations: [], hits: [], misses: [],sunk: false},
    {length: 3, name: 'Destroyer', id: 2, square: 3, direction: 'vertical', locations: [], hits: [], misses: [],sunk: false},
    {length: 4, name: 'Battleship', id: 3, square: 4, direction: 'vertical', locations: [], hits: [], misses: [],sunk: false},
    {length: 5, name: 'Carrier', id: 4, square: 91, direction: 'horizontal', locations: [], hits: [], misses: [],sunk: false}
]

export { playerBoats, computerBoats }