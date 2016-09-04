// var f1 = x => try { 3 } catch(e) { throw Error(e) }
var f1 = x =>  { try { 3 } catch(e) { throw Error(e) } }

var f2 = x => 3 // 3
var f2 = x => { return 3 } // 3
var f2 = x => { 3 } // undefined
// console.log(f2())

x => { y: 2 } // concise body not an object
f3 = x => ({ y: 2 }) // returns an object
// console.log(f3())

// arrow functions are anonymous, no names in stack trace
// no self reference

var foo = x => 3 // name inferencing
// console.log(foo.name) // blank

// this binding

// this.id = 56

console.log(this)

var obj1 = {
  id: 42,
  foo: function foo() {
    setTimeout(function() {
      console.log(this)
      console.log(this.id)
    }.bind(this), 2000)
    // }, 2000)
  }
}

var obj2 = {
  id: 42,
  foo: function foo() {
    setTimeout(() => {
      console.log(this)
      console.log(this.id)
    }, 2000)
    // }, 2000)
  }
}

// console.log(obj1.foo()) // expecting 42 but returns undefined
console.log(obj2.foo()) // expecting 42 but returns undefined
