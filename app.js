class App{
  constructor() {
    // create canvas
    this.canvas = document.createElement('canvas');
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');

    // set pixel ratio (2 is for retina)
    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    // Capture Browser Window Resize Event in JavaScript
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();

    // start animation
    window.requestAnimationFrame(this.animate.bind(this));
  }


  resize()  {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);
  }

  animate() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    window.requestAnimationFrame(this.animate.bind(this)); 

    // this.ctx.fillStyle = "#112233";
    // this.ctx.beginPath();
    // this.ctx.arc(this.stageWidth/2, this.stageHeight/2, 300, 0, 2*Math.PI);
    // this.ctx.fill();

  }
}

window.onload = () => {
  // create app
  new App();
}
