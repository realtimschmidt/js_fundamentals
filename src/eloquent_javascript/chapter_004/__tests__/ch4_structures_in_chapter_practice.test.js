const addToJournal = require('../ch4_structures_in_chapter_practice')

let events
let wasSquirrel
let events2
let wasSquirrel2
let result

describe('squirrel journal', () => {
  beforeEach(() => {
    events = ["work", "touched tree", "pizza", "running",
    "television"]
    wasSquirrel = false
    result = [
      {
        events,
        squirrel: wasSquirrel
      }
    ]
  })


  it('adds an enrty to the journal', () => {
    expect(addToJournal(events, wasSquirrel)).toEqual(result)
  })

  it('adds multiple entries to the jorunal', () => {
    events = ["work", "ice cream", "cauliflower", "lasagna",
    "touched tree", "brushed teeth"]
    wasSquirrel = true
    result.push({
      events,
      squirrel: wasSquirrel
    })
    expect(addToJournal(events, wasSquirrel)).toEqual(result)
  })
})