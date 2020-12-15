/* Write your code below */
const Matrix = require('./Matrix')
class EmployeeMatrix extends Matrix {
    constructor(rowNum, columnNum) {
        super(rowNum, columnNum)
    }
    loadData(data) {
        this.matrix = []
        for (let r = 0; r < data.length; r++) {
            this.matrix.push([])
            this.matrix[r].push(data[r]._id)
            this.matrix[r].push(data[r].name)
            this.matrix[r].push(data[r].department)
            this.matrix[r].push(data[r].salary)

        }
        console.log(this.matrix)
        return this.matrix

    }

    getEmployees(department) {
        let nameArray = []
        for (let r = 0; r < data.length; r++) {
            if (data[r].department === department) {
                nameArray.push(data[r].name)
            }
        }
        return (nameArray)
    }
    getTotalSalary(department) {
        let salarySum = 0
        for (let r = 0; r < data.length; r++) {
            if (data[r].department === department) {
                salarySum += data[r].salary
            }
        }
        return (salarySum)
    }

    findRichest() {
        let highestSalary = 0
        let highestEarner = {}
        for (let r = 0; r < data.length; r++) {
            if (data[r].salary > highestSalary) {
                highestSalary = data[r].salary
                highestEarner = { name: data[r].name }
            }
        }
        return highestEarner.name
    }

}





//You can paste the code from the lesson below to test your solution

let data = [
    { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
    { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
    { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
    { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
    { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
    { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]

let m = new EmployeeMatrix()

// m.loadData(data)
// m.print()
//prints

// e10021  Gillian Finance 2000
// e10725  Tibor   Design  1200
// e10041  Anisha  Finance 2300
// e10411  Jakub   Design  1600
// e11995  Mar     Design  1300
// e10732  Nisha   Design  1200

// console.log(m.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
// console.log(m.getEmployees("Design")) //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]
// console.log(m.getTotalSalary("Finance")) //prints 4300
// console.log(m.getTotalSalary("Design")) //prints 530
// console.log(m.findRichest()) //prints Anisha


class TicTacToe extends Matrix {
    constructor(rowNum, columnNum) {
        super(rowNum, columnNum)
        this.matrix = []
    }
    loadBoard() {

        for (let r = 0; r < 3; r++) {
            this.matrix.push([])
            for (let c = 0; c < 3; c++) {
                this.matrix[r].push(".")
            }
        }
        return this.matrix
    }
    play(rowNum, columnNum, Player) {
           if (Player === 1) {
            this.matrix[rowNum][columnNum] = "x"
                    }
        else {
            this.matrix[rowNum][columnNum] = "0"
      
            }
            return this.matrix
        }

      
    

    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line)
        }
    }

}
// let board = new TicTacToe()
// board.loadBoard()
// board.print()

//prints
// .       .       .
// .       .       .
// .       .       .

// let board = new TicTacToe()
// board.loadBoard()

// board.play(2, 2, 1)
// board.play(0, 0, 2)
// board.print()
// prints 
// o       .       .
// .       .       .
// .       .       x
let board = new TicTacToe()
board.loadBoard()

board.play(2, 2, 1)
board.play(0, 0, 2)
board.play(0, 2, 1)
board.play(1, 0, 2)
board.play(1, 2, 1) //prints Congratulations Player 1

board.print()
//prints
// o       .       x
// o       .       x
// .       .       x
/* Do not remove the exports below */
module.exports = EmployeeMatrix