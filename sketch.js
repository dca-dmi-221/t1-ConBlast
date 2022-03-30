let img;
let canciones = [];
let index = 0;

function preload(){
  canciones[0] = loadSound("Song1.mp3");
  canciones[1] = loadSound("Song2.mp3");
  canciones[2] = loadSound("Song3.mp3");
  canciones[3] = loadSound("Song4.mp3");
  canciones[4] = loadSound("Song5.mp3");
}


function setup() {
  createCanvas(1600, 800);
  img = loadImage('/Logo.png')
  botonPlay=createButton("Play");
  botonPlay.mousePressed(Play)
}

function draw() {
  background(0,0,0);
  image(img,330,120);
}

function Play(){
  canciones[2].play();
}