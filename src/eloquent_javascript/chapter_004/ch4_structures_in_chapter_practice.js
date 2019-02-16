let journal = []

const addEntry = (events, squirrel) => {
  journal.push({events, squirrel})
}

module.exports = (events, squirrel) => {
  addEntry(events, squirrel)

  return journal
}