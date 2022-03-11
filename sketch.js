let img;

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage('/Logo.jpg')
}

function draw() {
  background(0,0,0);
  image(img,280,0);
}
