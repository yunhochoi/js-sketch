import { 
  Wave
} from './wave.js';

export class WaveGroup {
  // draw multiple waves

  constructor() {
    this.totalWaves = 3;
    this.totalPoints = 5;
    this.color = ['rgba(255, 0, 0, 0.4)',
                  'rgba(255, 255, 0, 0.4)',
                  'rgba(0, 255, 255, 0.4)' ];
    
    this.waves = [];

    for (let i = 0; i < this.totalWaves; i++) {
      // create wave objects
      const wave = new Wave(
        i,
        this.totalPoints,
        this.color[i],
      );
      // assign wave objects to array
      this.waves[i] = wave;
    }
  }

  // duplicate resizing and drawing waves
  resizeWaves(stageWidth, stageHeight) {
    for (let i =0; i < this.totalWaves; i++) {
      // const wave = this.waves[i];
      // wave.resize(stageWidth, stageHeight);
      this.waves[i].resize(stageWidth, stageHeight);
    }
  }

  drawWaves(ctx){
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.draw(ctx);
    }
  }
}