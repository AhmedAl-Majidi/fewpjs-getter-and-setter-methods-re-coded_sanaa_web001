class Circle {
    constructor(radius){
      this.radius = radius;
    }

    get diametter(){
        return this.radius +this.radius;
    }

    get circumference(){
        return 2 * Math.PI * this.radius;
    }

    get area(){
        return Math.PI * Math.pow(this.radius,2);
    }
  }

let c1 = new Circle(3);
