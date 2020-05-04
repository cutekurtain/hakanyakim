let boxtopright;
let lineY;

function preload() {

}

function setup() {
  boxtopright = createCanvas(windowWidth*0.3, windowHeight*0.2);
  boxtopright.position(windowWidth-windowWidth*0.3, 0);
  background(0, 0, 0, 50);
}

function draw() {
  stroke(10);
  lineY = map(mouseY, 0, windowHeight, 0, boxtopright.height);
  line(0, lineY, boxtopright.width, lineY)
}
