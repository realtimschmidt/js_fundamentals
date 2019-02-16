// consider refactoring loops inside loops at the end of chapter

const analyzeJournal = (journal) => {
  let events = []
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event)
      }
    }
  }
  return events
}

module.exports = (journal) => {
  return analyzeJournal(journal)
}