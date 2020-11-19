import { 
  WaveGroup
} from './wavegroup.js';

class App{
  constructor() {
    // create canvas
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    this.waveGroup = new WaveGroup();

    // set pixel ratio (2 is for retina)
    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    // Capture Browser Window Resize Event in JavaScript
    window.addEventListener('resize', this.resize.bind(this), false);

    // initialize
    this.init();

    // start animation per frame
    window.requestAnimationFrame(this.animate.bind(this));
  }

  init(){
    this.resize();
  }


  resize()  {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight; 
    this.waveGroup.resizeWaves(this.stageWidth, this.stageHeight);

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);
  }

  animate(t) {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.waveGroup.drawWaves(this.ctx); // draw and ctx is always pair
    window.requestAnimationFrame(this.animate.bind(this)); 
  }
}

window.onload = () => {
  // create app
  new App();
}
