const createIterator = () => {
  let array = ['Schmidt', 'Tim']
  return {
    next: function() {
      if(this.index == 0) {
        this.index++
        return { value: array[this.index], done: false }
      }
      if(this.index == 1) {
        return { value: array[this.index], done: true }
      }
    },
    index: 0
  }
}
const iterator = createIterator()
console.log(iterator.next())
console.log(iterator.next())


// Array
 const arr = ['Tim', 'Schmidt', 'loves', 'JS']

 for(const a of arr) {
   console.log(a)
 }


 // String
const myName = "Tim Schmidt"

for(const a of myName) {
  console.log(a)
}


// Map
const map = new Map([['surname', "Schmidt"], ['firstname', "Tim"]])

for(const a of map) {
  console.log(a)
}

for(const [key, value] of map) {
  console.log(`key: ${key}, value: ${value}`)
}


// Set
const set = new Set(['Tim', 'Schmidt'])

for(const a of set) {
  console.log(a)
}


// TypedArray
const typedarray = new Uint8Array([0xe8, 0xb4, 0xf8, 0xaa])

for(const a of typedarray) {
  console.log(a)
}


// Arguments
function testFunction(arg) {
  console.log(typeof arguments[Symbol.iterator])
  for(const a of arguments) {
    console.log(a)
  }
}
testFunction('Tim')