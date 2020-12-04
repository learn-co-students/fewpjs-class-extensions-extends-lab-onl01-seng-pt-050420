class Polygon {
    constructor(arrayOfIntegers) {
        this.sides = arrayOfIntegers;
    };

    get countSides() {
        return this.sides.length;
    };

    get perimeter() {
        return this.sides.reduce(function(a, b) { return a + b}, 0)
    };
};

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides !== 3) return false;
        const side1 = this.sides[0];
        const side2 = this.sides[1];
        const side3 = this.sides[2];

        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1));
    };
};

class Square extends Polygon {
    get isValid() {
        if (this.countSides !== 4) return false;
        const side1 = this.sides[0];
        const side2 = this.sides[1];
        const side3 = this.sides[2];
        const side4 = this.sides[3];

        return ((side1 === side2) && (side1 === side3) && (side1 === side4));
    };

    get area() {
        if (this.isValid) return this.sides[0] **2;
    }
};