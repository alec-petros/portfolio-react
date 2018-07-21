export default function Sketch (p) {

  class NoisePoint {
    constructor(x, y) {
      this.pos = p.createVector(x, y);
      this.t = p.createVector(p.random(0, 1000), p.random(2000, 4000))
    }

    draw = () => {
      let noise = p.createVector(p.map(p.noise(this.t.x), 0, 1, -p.width/8, p.width/8), p.map(p.noise(this.t.y), 0, 1, -p.height / 2, p.height / 2));
      this.pos = noise;
      this.t.x += 0.001;
      this.t.y += 0.0001;
    }

    vector = () => {
      return this.pos
    }
  }

  let rotation = 0;
  const vertArray = [];

  for (let i = 0; i < 12; i++) {
    vertArray.push(new NoisePoint(i* 10, i * 10));
  }

  p.setup = function () {
    p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
    p.background(0);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation){
      rotation = props.rotation * Math.PI / 180;
    }
  };

  p.draw = function () {
    p.fill(0, 0, 0, 5);
    p.push();
    p.rect(-p.width / 2, -p.height / 2, p.width, p.height);
    p.pop();
    p.stroke(0);
    // p.background(37, 67, 74, 10);
    p.noStroke();

    p.fill(255);

    p.push();
    p.translate(0 - p.width * 1/2.3, 0)
    p.beginShape();
    vertArray.forEach(rect => p.vertex(rect.pos.x, rect.pos.y));
    p.vertex(vertArray[0].pos.x, vertArray[0].pos.y);
    p.endShape();
    vertArray.forEach(rect => rect.draw());
    p.rotateY(rotation);
    p.pop();

    p.push();
    p.translate(p.width * 1/2.3, 0)
    p.beginShape();
    vertArray.forEach(rect => p.vertex(0 - rect.pos.x, rect.pos.y));
    p.vertex(0 - vertArray[0].pos.x, vertArray[0].pos.y);
    p.endShape();
    // vertArray.forEach(rect => rect.draw());
    p.rotateY(rotation);
    p.pop();
  };
};
