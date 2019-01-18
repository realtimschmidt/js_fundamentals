// example

const event = require('events')

class myEvent extends event {}

const myEventObject = new myEvent()

myEventObject.on('namedEvent', () => console.log(`Called namedEvent in myEventObject's attached listner`))
myEventObject.emit('namedEvent')