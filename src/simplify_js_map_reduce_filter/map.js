const officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
]

let officersIdsForEach = []

// forEach
officers.forEach((officer) => officersIdsForEach.push(officer.id))
console.log({ officersIdsForEach })

// map
const officersIdsMap = officers.map((officer) => officer.id)
console.log({ officersIdsMap })