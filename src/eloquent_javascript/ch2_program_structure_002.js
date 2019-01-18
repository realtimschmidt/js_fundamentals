// print number 1 through 100
// num % 3 === 0, print "Fizz"
// num % 5 === 0, print "Buzz"
// num % 3 === 0 && num % 5, print "FizzBuzz"

for(let i = 1; i <= 100; i++){
  if (i % 5 == 0 && i % 3 === 0) {
    console.log("FizzBuzz")
  }
  else if (i % 3 === 0) {
    console.log("Fizz")
  }
  else if (i % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(i)
  }
}