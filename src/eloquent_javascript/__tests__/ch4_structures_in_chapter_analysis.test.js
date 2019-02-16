const analyze = require('../ch4_structures_in_chapter_analysis')
const entries = require('../ch4_journal_entries')

let events
let journal

describe('analyze journal entries', () => {
  beforeEach(() => {
    events = ['work', 'touched tree', 'pizza', 'running', 'television', 'ice cream', 'cauliflower', 'lasagna', 'brushed teeth', 'weekend', 'cycling', 'break', 'peanuts', 'beer']
    journal = entries()
  })
  
  it('finds each type of event in the journal', () => {
    expect(analyze(entries())).toEqual(events)
  })
})
