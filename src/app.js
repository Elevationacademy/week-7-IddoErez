/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function(number) {
  //Your code here
      if (number === 0) {return 1}
      return number*findFactorial(number-1)
}
console.log(findFactorial(5))

//Exercise 2
const reverseString = function(str, reversedString = "") {
  let length =str.length
  if (length ===0) {return reversedString}
  reversedString +=str.slice(length-1, length)
  str = str.slice(0, length-1)
  return reverseString(str, reversedString)
}
console.log(reverseString("abc"))

//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function(arr1 ,arr2) {
  //Your code here
    console.log(arr1) //[]
    console.log(arr2)
    if (arr1.length===0) {return arr1, arr2}
    arr2 = arr1.splice(0)
    return swap(arr1, arr2)
       
}

swap(arr1,arr2) 

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }