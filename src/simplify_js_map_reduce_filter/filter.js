const pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  }
]

const rebel = pilots.filter((pilot) => pilot.faction === 'Rebels')
const empire = pilots.filter((pilot) => pilot.faction === 'Empire')
console.log({ rebel })
console.log({ empire })