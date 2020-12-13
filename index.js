class Polygon{
    constructor(numArray){
        this.numArray = numArray
    }

    get countSides(){
       return this.numArray.length
    }

    get perimeter(){
        let summed = this.numArray.reduce(function(total,value){
            return value +total
        }, 0)

        return summed
    }
}


class Triangle extends Polygon {

    get isValid(){

        if ( (this.numArray[0] + this.numArray[1]  > this.numArray[2]) && (this.numArray[0] + this.numArray[2]  > this.numArray[1]) && (this.numArray[1] + this.numArray[2]  > this.numArray[0])){
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {

    get isValid(){

        const [a, b, c, d] = this.numArray
        if (a === b && b === c && c === d){
            return true
        } else{
            return false
        }
    }

    get area(){
        return this.numArray[0] * this.numArray[0]
    }
}