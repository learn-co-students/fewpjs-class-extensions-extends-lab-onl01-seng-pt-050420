class Polygon{
    constructor (element0, element1, element2){
        this.element0 = element0
        this.element1 = element1
        this.element2 = element2
    }

    get countSides () {
        return Polygon.length
    }

    get perimeter() {
        return (this.element0 + this.element1 + this.element2);
    }
}

class Triangle extends Polygon {
    
    get isValid() {
        for (let i = 0; i < Polygon.length; i++){
            i > 0 ? true : false
        }
    }
}

class Square extends Polygon{
    get isValid(){
        
    }
}