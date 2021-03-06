/* Write your class below */
class Queue {
    constructor() {
        this.queue = []
        this.length = 0
    }
    enqueue(item) {
      this.queue.unshift(item)
       this.length++
    }
  
    dequeue(item) {
        this.queue.shift(item)
        this.length--
    }
    peek() {
    if (this.length>0) {
            return this.queue[this.length-1]
        }
     else return null
    }
    isEmpty() {
        if (this.length === 0) {
            return true
        }
        else {
            return false
        }
    }
    print() {
        console.log(this.queue)
    }
}


//You can paste the test code from the lesson below to test your solution

let q = new Queue()
console.log(q.isEmpty())    //true
q.print()                   //[]
q.enqueue(2)
q.print()
console.log(q.isEmpty())    //false
q.enqueue(4)
q.print()                   //[4,2]
console.log(q.peek())       //2
q.dequeue()
q.dequeue()
q.print()                   //[4,2]
console.log(q.peek())       //null
console.log(q.isEmpty())    //true


/* Do not remove the exports below */
module.exports = Queue