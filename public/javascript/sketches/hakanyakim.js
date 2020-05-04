let img;
var canvas;
var xoff;
var yoff;
var n1;
var n2;
var h;
var angle;

function preload() {

  img = loadImage('/../../data/images/hakanyakimyellow.png');

}
function setup() {

  canvas = createCanvas(windowWidth, windowHeight);
  background('#ffcf00');
  xoff = 0.0;
  yoff = 0.0;
  angle = 0.0;

  //image(img, 200, 200, 500, 500);


}

function draw() {

  let h = map(sin(angle), -1, 1, 0, width / 2);
  let n2 = noise(xoff) * width / 2;
  let n1 = noise(yoff) * height / 2;

  image(img, n2, n1, 300, 300);

  xoff = xoff + 0.01;
  yoff = yoff + 0.008;
  angle += 0.02;


}
