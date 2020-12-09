// Your code here

class Polygon{

    constructor(array){
        this.sides = array
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce(function(a, b) { return a + b}, 0)
    };
    
}

class Triangle extends Polygon{

    get isValid (){
        const side1 = this.sides[0] 
        const side2 = this.sides[1] 
        const side3 = this.sides[2] 
        const validations =  ((this.countSides === 3) && (side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
        return validations ?  true : false;    
    }
}

class Square extends Polygon{

    get isValid (){
        const side1 = this.sides[0] 
        const side2 = this.sides[1] 
        const side3 = this.sides[2]
        const side4 = this.sides[3]
        const validations =  ((this.countSides === 4) && (side1 === side2) && (side4 === side3 ) && (side2 === side3))
        return validations ?  true : false;    
    }

    get area(){
        return this.sides[0] ** 2
    }
} 
