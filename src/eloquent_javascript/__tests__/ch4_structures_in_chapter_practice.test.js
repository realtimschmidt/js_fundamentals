const addToJournal = require('../ch4_structures_in_chapter_practice')

let events
let wasSqurriel
let result

describe('squirrel journal', () => {
  beforeEach(() => {
    events = ["work", "touched tree", "pizza", "running",
    "television"]
    wasSqurriel = false
    result = [
      {
        events,
        squirrel: wasSqurriel
      }
    ]
  })


  it('adds an enrty to the journal', () => {
    expect(addToJournal(events, wasSqurriel)).toEqual(result)
  })
})