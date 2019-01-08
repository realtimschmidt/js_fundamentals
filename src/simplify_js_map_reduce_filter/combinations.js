var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
]

const jedi = personnel.filter((person) => person.isForceUser)
console.log({ jedi })

const jediScores = jedi.map((person) => person.pilotingScore + person.shootingScore)
console.log({ jediScores })

const totalJediScores = jediScores.reduce((acc, score) => acc + score, 0)
console.log({ totalJediScores })

// chain all 3
const totalScoresChained = personnel
  .filter((person) => person.isForceUser)
  .map((hasForce) => hasForce.pilotingScore + hasForce.shootingScore)
  .reduce((acc, score) => acc + score, 0)
console.log({ totalScoresChained })

// reduce only
const totalForceScoresReduce = personnel
  .reduce((acc, person) => person.isForceUser ? acc + person.pilotingScore + person.shootingScore : acc, 0)
console.log({ totalForceScoresReduce })