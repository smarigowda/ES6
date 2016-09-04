// topic
// block scoping

function foo(x, y) {
  // let z = x * 2
  var z = x * 2 // to inform that the intention is to use throughout the function

  if ( x > y ) {
    // var temp = x // temp is in scope of foo, hoisted to the scope of foo
    let temp = x // temp is in scope of foo, hoisted to the scope of foo
    x = y
    y = temp
  }

  // for( var i = 0; i < 10; i++ ) { // to inform that i belongs to the for loop
  for( let i = 0; i < 10; i++ ) { // to inform that i belongs to the for loop
    // ...
  }
}

// const
// block scoping
const x = 2 // variable which can not be reassigned
// can not be reassigned,
// immutable value -- nothing to do with value
// value which does not change -- not correct
// ex:
const y = [1, 2, 3]
console.log(y)
y[0] = 100
console.log(y)

const c = Object.freeze([3, 4, 5])
console.log(c)
c[0] = 10 // ignores
console.log(c)
