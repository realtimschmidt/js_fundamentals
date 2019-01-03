// create new objects

let user = new Object()
let someUser = {
  name: "John",
  age: 30
}
console.log(user, someUser)

someUser.isAdmin = true
delete someUser.age
console.log(someUser)

const makeUser = (name, age) => {
  return {
    name,
    age
  }
}

let userJohn = makeUser("John", 30)
console.log(userJohn.name)


// loop

let sampleUser = {
  name: "John",
  age: 30,
  isAdmin: true
}

for(let key in sampleUser) {
  console.log('key: ' + key)
  console.log('value: ' + sampleUser[key])
}


// object methods

console.log('keys:', Object.keys(sampleUser))
console.log('values:', Object.values(sampleUser))
console.log('entries:', Object.entries(sampleUser))
