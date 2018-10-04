// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

// Notes
// Push adds one or more elements to the end of a stack and returns the stack's length
// Pop removes the last element of a stack and returns this element

// Solution 1
// Create constructor method that holds this.data = []
// Create push method to add to the end of the array
// Create pop method to remove from the end of the array and return it
// Create peek method to return the last element in the stack without removing it

class Stack {
  constructor() {
    this.data = []
  }

  push(record) {
    this.data.push(record)
  }

  pop() {
    return this.data.pop()
  }

  peek() {
    return this.data[this.data.length - 1]
  }
}

module.exports = Stack
