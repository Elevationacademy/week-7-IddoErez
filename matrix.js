// function generateMatrix(numRows, numColumns) {
//     let matrix = []
//     let num = 1

//     for (let r = 0; r < numRows; r++) {
//         matrix.push([])
//         for (let c = 0; c < numColumns; c++) {
//             matrix[r].push(num++)
//         }
//     }
//     return matrix
// }
// console.log(generateMatrix(3,4))


// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         console.log(matrix[i][j])
//     }
// }
// const get = function (rowNum, colNum) {
//     return matrix[rowNum][colNum]
// }

// console.log(get(1, 2))

// function print(matrix) {

//     for (let i = 0; i < matrix.length; i++) {
//         let line = ""
//         for (let j = 0; j < matrix[i].length; j++) {
//             line += (matrix[i][j] + "\t")
//         }
//         console.log(line)
//     }
// }
// print(matrix)

// function printColumn(matrix, colNum) {
//     for (let i = 0; i < matrix.length; i++) {
//         console.log(matrix[i][colNum])
//     }
// }
let matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
// printColumn(matrix, 1) //prints 2, 6, 10 on separate lines

function printRow(RowNum, matrix) {
    let line = ""
    for (let j = 0; j < matrix[RowNum].length; j++) {
        line += matrix[RowNum][j] + "\t"

    }
    console.log(line)
}
printRow(1, matrix)

function alter(matrix, RowNum, colNum, num) {

    matrix[RowNum][colNum] = num

return matrix
}
console.log(alter(matrix, 1, 3, 174))

