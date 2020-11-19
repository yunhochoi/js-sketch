export class Point{
  //--- The location which moves circle ---//
  constructor(index, x, y){
    this.x = x;
    this.y = y;
    this.fixedY = y;
    this.speed = 0.05;
    this.current = index;
    this.max = Math.random() * 100 + 150;
  }

  update() {
    this.current += this.speed;
    this.y = this.fixedY + (Math.sin(this.current) * this.max);
  } 
}