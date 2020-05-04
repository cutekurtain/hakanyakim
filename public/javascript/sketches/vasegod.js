let kulissenbaum;
let font;
let framec;
let word;
let cam;

function preload() {
  kulissenbaum = loadModel('/data/3dmodels/birthdayvase.obj');
  font = loadFont("/data/fonts/AdonisBold.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  kulissenbaum.normalize();

  //cam = createEasyCam()

  textFont(font);
  textSize(30);
  textAlign(LEFT, TOP);
  fill(0);
  angleMode(DEGREES);
  framec = 0;
  rectMode(RADIUS)

  word = createWord3D("HALLO",10,1,20,true,font,"normal");
}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255, 227, 175);
  stroke(30);
  push();
  noStroke();
  shininess(10);
  pointLight(250, 50, 120, 0, 0, 50);
  //fill(0,250,0);
  specularMaterial(0, map(mouseX, 0, width, 0, 255), 0);
  rotateX(180);
  rotateY(frameCount%360)
  rotateZ(map(mouseY, 0, height, -180, 180))
  scale(3);
  model(kulissenbaum);
  pop();
  push();
  if (frameCount%60==0) {
    framec = floor(frameRate());
  }
  translate(-width/2, -height/2, 0)
  fill(233, 233, 0)
  pop();
  //word.show();
}
