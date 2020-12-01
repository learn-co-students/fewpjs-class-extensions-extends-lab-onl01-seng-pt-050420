class Polygon {
    constructor(array) {
        this.sides = array
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce(function(a, b) {
            return a + b;
        }, 0);
    }
};

class Triangle extends Polygon {
    get isValid() {
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]
        
        if(a + b > c && b + c > a && c + a > b && a != 0 && b != 0 && c != 0) {
            return true; 
        } else {
            return false;
        }
    }
};

class Square extends Polygon {
    get area() {
        return this.sides[0] ** 2;
    }

    get isValid() {
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]
        let d = this.sides[3]
        
        if(a == b && c == d && a == c) {
            return true;
        } else {
            return false;
        }
    }
};