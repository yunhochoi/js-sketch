import { 
  Point
} from './point.js';

export class Wave{
  constructor() {

  }

  resize(stageWidth, stageHeight) {
    // bring stage's w and h of context
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    
    // determine center position
    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;

    // initialize
    this.init()
  }

  init(){
    // create single point location
    this.point = new Point(this.centerX, this.centerY);
  }


  draw(ctx){
    // create a circle and animate it with as Point.js
    ctx.beginPath();
    ctx.fillStyle = '##ff0000';

    // update point animation
    this.point.update();

    ctx.arc(this.point.x, this.point.y, 10, 0, 2 * Math.PI);
    ctx.fill();
  }
}