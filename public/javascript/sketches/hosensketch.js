

function setup() {
  let hosen = createImg('/data/transparentehosen.png');
  hosen.attribute('height', '' + windowHeight-20 + 'px');
  console.log(hosen.size().height);
  hosen.position(windowWidth/2 - hosen.size().width/2, 10);
}
