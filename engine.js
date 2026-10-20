class Shape{
    #x;
    #y;
    static count = 0;
    constructor(x,y){
       this.#x = x;
       this.#y = y;
       Shape.count++;
    }

    draw(){
      if(this.coords.x > 0){
        console.log("X: " + this.coords.x);
      }
      if(this.coords.y > 0){
        console.log("Y: " + this.coords.y);
      }
    }

    move(dx,dy){
      this.#x += dx;
      this.#y += dy;
    }

    get coords(){
        return { x: this.#x , y: this.#y}
    }

}

class Rectangle extends Shape{
    constructor(x,y,width,height){
        super(x,y)
        this.width = width;
        this.height = height;
    }

    draw(){
       if(this.coords.x > 0 && this.width > 0){
        console.log("X && width: " + this.coords.x + " " + this.width);
       }
       if(this.coords.y > 0 && this.height > 0){
        console.log("Y && height: " + this.coords.y + " " + this.height);
        
       }
    }
}

class Circle extends Shape{
    constructor(x,y){
        super(x,y)
    }
}

let rectangle = new Rectangle(10,5,100,1000)
rectangle.move(2,30)
rectangle.draw()