let arr = ["Ilya", "Kantor"]
let [firstName, surname] = arr
console.log(firstName, surname)

let [, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"]
console.log(title)

let [a, b, c] = "abc"
let [one, two, three] = new Set([1, 2, 3])
console.log(a, b, c, one, two, three)

// must use ; because of automatic semicolon insertion after }
let user = {};
[user.name, user.lastName] = "Ilya Kantor".split(' ')
console.log(user.name)


// destructuring in loop
let someUser = {
  name: "John",
  age: 30,
}

for(let [key, value] of Object.entries(someUser)) {
  console.log(`${key}:${value}`)
}

// rest variables
let [name1, name2, ...restArr] = ["Julius", "Caesar", "Consul", "of the Roman Republic"]
console.log('name1: ' + name1)
console.log('name2: ' + name2)
console.log(restArr[0])
console.log(restArr[1])
console.log(restArr.length)


// default values
let [first = 'defaultFirstName', last = 'defaultLastName'] = ['Julius']
console.log('first: ' + first, 'last: ' + last)


// object destructuring
let options = {
  text: "Menu",
  width: 100,
  height: 200
}

let {text, width, height} = options
console.log(text, width, height)

let {width: w, height: h} = options
console.log(text, w, h)

let circle = {
  circumference: 157
}
let {diameter = 50, radius = 25, circumference} = circle
console.log(diameter, radius, circumference)


// nested destructuring
let shape = {
  size: {
    shapeWidth: 100,
    shapeHeight: 200,
  },
  items: ["cake", "donut"],
  extra: true
}

let {
  size: {
    shapeWidth,
    shapeHeight
  },
  items: [item1, item2],
  menuName = 'Cool Menu'
} = shape

console.log(menuName, shapeWidth, shapeHeight, item1, item2)


// function params and destructuring
let obj = {
  objTitle: "My menu",
  objItems: ["Item1", "Item2"]
}

const showMenu = ({objTitle = "Untitles", objWidth = 200, objHeight = 100, objItems = []}) => {
  console.log(`${objTitle} ${objWidth} ${objHeight}`)
  console.log( objItems )
}

showMenu(obj)