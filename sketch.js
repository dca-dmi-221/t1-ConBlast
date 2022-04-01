let img;
let canciones = [];
let index = 0;

function preload(){
  canciones[0] = loadSound("Trap1.mp3");
  canciones[1] = loadSound("Trap2.mp3");
  canciones[2] = loadSound("Trap3.mp3");
  canciones[3] = loadSound("Trap4.mp3");
  canciones[4] = loadSound("Trap5.mp3");
}


function setup() {
  createCanvas(1600, 800);
  img = loadImage('/Logo.png')
  botonPlay=createButton("Play");
  botonPlay.mousePressed(Play);
  botonStop=createButton("Stop");
  botonStop.mousePressed(Stop);
  botonNext=createButton("Next");
  botonNext.mousePressed(Next);
}

function draw() {
  background(0,0,0);
  image(img,330,120);
}

function Play(){
  canciones[index].play();
}

function Stop(){
  canciones[index].stop();
}

function Next(){
  Stop();
  if(indice<canciones.length-1){
  indice+=1;
  }
  else {
    indice=0;
  }
  Play();
}

