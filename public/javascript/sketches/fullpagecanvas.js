let fullpagecanvas;
let lineY;

function preload() {

}

function setup() {
  fullpagecanvas = createCanvas(select("html").width, select("html").height);
  fullpagecanvas.position(0, 0);
  fullpagecanvas.style("z-index: -1;")
  //background(0, 0, 0, 1);
}

function draw() {
  //background(0, 0, 0, 1);
  stroke(0, 10)
  strokeWeight(frameCount%30);
  line(0, mouseY, width, mouseY);
}

function windowResized() {
  console.log("from select: " + select("html").width)
  console.log("from width: " + width);
  fullpagecanvas.resize(select("html").width, select("html").height);
  fullpagecanvas.position(0, 0);
  console.log("from width after: " + width);
}
