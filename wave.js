import { 
  Point
} from './point.js';

export class Wave{
  constructor(index, totalPoints, color) {
    this.index = index;
    this.totalPoints = totalPoints;
    this.color = color;
    this.points = [];
  }

  resize(stageWidth, stageHeight) {
    // bring stage's w and h of context
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    
    // determine center position
    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;

    this.pointGap = this.stageWidth / (this.totalPoints - 1);

    // initialize
    this.init()
  }

  init(){
    // create single point location
    // this.point = new Point(this.centerX, this.centerY);
    this.points = [];

    for (let i = 0; i < this.totalPoints; i++){
      const point = new Point(
        this.index + i,
        this.pointGap * i,
        this.centerY,
      );
      this.points[i] = point;
    }
  }


  draw(ctx){
    // create a circle and animate it with as Point.js
    ctx.beginPath();
    ctx.fillStyle = this.color;

    let prevX = this.points[0].x;
    let prevY = this.points[0].y;

    ctx.moveTo(prevX, prevY);

    // exclude first and last index
    for (let i = 1; i < this.totalPoints; i++){
      if (i < this.totalPoints - 1){ 
        this.points[i].update();
      }

      const cx = (prevX + this.points[i].x) / 2;
      const cy = (prevY + this.points[i].y) / 2;
      
      // curved line
      ctx.quadraticCurveTo(prevX, prevY, cx, cy);

      // direct line
      // ctx.lineTo(cx, cy);

      // make the next line's starting point to the previous line's last point
      prevX = this.points[i].x;
      prevY = this.points[i].y;

      // draw circle 
      // ctx.fillStyle = '#FF0000';
      // ctx.arc(this.points[i].x, this.points[i].y, 10, 0, 2 * Math.PI);
    }

    ctx.lineTo(prevX, prevY);

    // fill entire space
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(this.points[0].x, this.stageHeight);
    // ctx.stroke();
    ctx.fill();
    // show edge
    ctx.closePath();

    // update point animation
    // this.point.update();

    // ctx.fill();
  }
}