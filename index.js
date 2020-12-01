// Your code here


class Polygon {
    constructor(sideArr) {
        this.sides = sideArr
        this.count = this.sides.length
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        if (!Array.isArray(this.sides)) return;
        let perim = 0;
        for (var int of this.sides) {
            perim += int
        }
        return perim
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (!Array.isArray(this.sides)) return;
        if (this.count !== 3) return;
        let [side1, side2, side3] = this.sides
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
}

class Square extends Polygon {
    get isValid() {
        if (!Array.isArray(this.sides)) return;
        if (this.count !== 4) return;
        let [side1, side2, side3, side4] = this.sides
        return (side1 === side2 && side1 === side3 && side1 === side4);
    }
    get area() {
        if (!Array.isArray(this.sides)) return;
        if (this.count !==4) return;
        return this.sides[0] * this.sides[0]
    }

}