// objects aren't iterable without channg Object.prototype
Object.prototype[Symbol.iterator] = function() {
  let properties = Object.keys(this)
  let count = 0
  let isdone = false
  let next = () => {
      let value = this[properties[count]]
      if (count == properties.length) {
          isdone = true
      }
      count++
      return { done: isdone, value }
  }
  return { next }
}

let o = new Object()
o.s = 'SK'
o.me = 'SKODA'
for (let a of o) {
  console.log(a)
}

let dd = {
  num1: 900,
  num2: 800
}

for (let a of dd) {
  console.log(a)
}