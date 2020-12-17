/* Write your code below */
class Matrix{
    constructor(rows, cols){
        this.matrix = []
        this.generateMatrix(rows, cols)
    }
    generateMatrix(rows, cols){
        let row
        let counter = 1
        for(let i = 0; i<rows; i++){
            row = []
            for(let j=0; j<cols; j++){
                row.push(counter++)
            }
            this.matrix.push(row)
        }
    }

    print(){
        for(let i=0; i<this.matrix.length; i++){
            console.log(this.matrix[i])
        }
    }

    alter(row, col, value){
        this.matrix[row][col] = value
    }

    get(row, col){
        return this.matrix[row][col]
    }

    printColumn(col){
        for(let i=0; i<this.matrix.length; i++){
            console.log(this.matrix[i][col])
        }
    }

    printRow(row){
        for(let i=0; i<this.matrix[row].length; i++){
            console.log(this.matrix[row][i])
        }
    }

    findCoordinate(value){
        for(let i = 0; i<this.matrix.length; i++){
            for(let j=0; j<this.matrix[i].length; j++){
                if(value == this.matrix[i][j]){
                    return {x: i, y:j}
                }
            }
        }
        return {err: "This number does not exist in this matrix"}
    }

}



//You can paste the code from the lesson below to test your solution

let m = new Matrix(3, 4)
m.print()
//prints
/*
1       2       3       4
5       6       7       8
9       10      11      12
*/

m.alter(0, 0, m.get(1, 1))
m.printColumn(0) //prints 6, 5, 9 (separate lines)
m.printRow(0) //prints 6, 2, 3, 4 (separate lines)


m = new Matrix(3, 4)
m.print()
console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}

/* Do not remove the exports below */
module.exports = Matrix