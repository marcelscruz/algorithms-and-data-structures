// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// Notes
// Unshift adds one or more elements to the beginning of a queue and returns the queue's length
// Shift removes the first element of a queue and returns this element

// Solution 1
// Create constructor method that holds this.data = []
// Create add method to add to the beginning of the array
// Create remove method to remove from the beginning of the array

class Queue {}

module.exports = Queue
