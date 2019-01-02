// creating an array

let arr = new Array()
let arr2 = ['this is arr2']
console.log(arr)
console.log(arr2)


// adding to arrays

arr2.push('last item')
console.log(arr2)

arr2.unshift('first item', 2)
console.log(arr2)

arr2.pop()
console.log(arr2)

arr2.shift()
console.log(arr2)


// using splice

arr.push('somthing', 'something else', 3, 4)
console.log(arr)

arr.splice(1, 1) // starting at index 1, remove 1 element
console.log(arr)

arr.splice(0, 3, 'new', 'items', 5, 6)
console.log(arr)

arr.splice(2, 0, 'add this')
console.log(arr)


// slice

let str = 'test'
let strArr = ['t', 'e', 's', 't']

console.log(str.slice(1, 3))
console.log(strArr.slice(1, 3))

console.log(str.slice(-2))
console.log(strArr.slice(-2))


// concat

console.log(arr.concat([7, 8]))
console.log(arr.concat([7, 8], [9, 10]))
console.log(arr.concat([7, 8], 9, 10))


// searching

console.log(arr.indexOf('items'))
console.log(arr.indexOf(null))
console.log(arr.includes('add this'))

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
]

let user = users.find(item => item.id == 1 )
console.log(user.name)

let someUsers = users.filter(item => item.id < 3)
console.log(someUsers.length)


// transforming an array

let friends = ["Bilbo", "Gandalf", "Samwise"]
console.log(friends.map(item => item.length))

let nums = [1, 2, 3, 4, 5]
let result = nums.reduce((previous, current) => previous + current, 10)
console.log(result)