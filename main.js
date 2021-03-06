// // ---------- Question 6 //Time Complexity Exercises
// let ages = [1, 4, 5, 6, 1, 2, 4]
// const findDuplicates = function (ages) {

//     obj = {}
//     //    let newArray = []
//     for (let i = 0; i < ages.length; i++) {
//         if (ages[i] === obj[ages[i]]) {
//             console.log(`${ages[i]} has a duplicate`)
//         } else {
//             obj[ages[i]] = ages[i]
//         }
//         console.log(obj)
//     }

// }
// findDuplicates(ages)

// // Question 1 Algorithms -- -- -
// const printStars = (num) => {
//     for (let i=1; i<num+1; i++){
//         console.log("*".repeat(i))
//        }
// }
// printStars(5)

// // --- Question 2 --------
// const printBackwardsStars = (num) => {
//     for (let i=num; i>1; i--){
//         console.log("*".repeat(i))
//        }
// }
// printBackwardsStars(5)

// // ---- Question 3 --------
// const printStarSeries = (num, count) => {
//  for (let i=0; i<count; i++) { 
//     for (let i=1; i<num+1; i++){
//         console.log("*".repeat(i))
//        }
//    for (let i=num; i>1; i--){
//       console.log("*".repeat(i))
//        }
//     }
// }
// printStarSeries(15 ,3)

// // --- Question 4 + 5- ----
// const reverse = function (str) {
//     let parsed = str.split('')
//     let reversed = ""
//     for (let i = str.length - 1; i > -1; i--) {
//         reversed += parsed[i]
//     }

//     // - -4--- return reversed
//     //-- 5  ----
//     // console.log(str.split(""))
//     if (reversed.split(" ").join("") === str.split(" ").join("")) {

//         return true
//     } else {
//         return true
//     }
// }
// reverse("do geese see god")

// ----Question 6 ----
// const alphabet = "abcdefghijklmnopqrstuvwxyz"
// const encrypt = (string) => {
//     let newArray = []
//     for (let j in string) {
//         for (let i = 0; i < alphabet.length; i++) {
//             if (alphabet[i] === string[j]) {
//                 newArray.push(alphabet[i + 1])
//             }
//         }
//     }
//     console.log(newArray.join(""))

// }
// encrypt("cat")
// ------ 7------------
//Algorithm question 7
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const decrypt = (string) => {
    let newArray = []
    for (let j in string) {
        for (let i = 0; i < alphabet.length; i++) {
            if (alphabet[i] === string[j]) {
                newArray.push(alphabet[i - 1])
            }
        }
    }
    console.log(newArray.join(""))

}
decrypt("bby")


// ====== Data Structures Question ===

class UniqueArray {
    constructor() {
        this.arrayStuff = []
        this.arrayLength = 0
    }

    showAll() {
     console.log(this.arrayStuff)
    }
    exists(item) {
    for (let i = 0; i < this.arrayLength; i++) {
     if (this.arrayStuff[i] === item) {
      return true
    } else {
      return false
    }
    }
    }  
    get(index) {
      return this.arrayStuff[index]
    }
    add(item) {
            if (!this.exists(item)) {
                this.arrayStuff[this.arrayLength] = item
                this.arrayLength++
            }
        }

    }

    const uniqueStuff = new UniqueArray()
    uniqueStuff.add("toy")
    uniqueStuff.showAll() //prints ["toy"]
    uniqueStuff.add("toy")
    uniqueStuff.showAll() //prints ["toy"]
    console.log(uniqueStuff.exists("toy")) //returns true
    uniqueStuff.add("poster")
    uniqueStuff.add("hydrogen")
    uniqueStuff.showAll()
    console.log(uniqueStuff.get(2)) //prints "hydrogen"
