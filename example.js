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
  createCanvas(1800, 800);
  img = loadImage('/Logo.png')

  botonPlay=createButton("");
  botonPlay.mousePressed(Play);
  botonPlay.position(715, 538);
  botonPlay.size(70, 70);
  applyButtonStyle(botonPlay, "Start2.png");


  botonStop=createButton("Stop");
  botonStop.mousePressed(Stop);
  

  botonNext=createButton("Next");
  botonNext.mousePressed(Next);

}

function applyButtonStyle(button, image) {
  button.style("background-color", "#FFFFFF");
  button.style("border-radius", "50%");
  button.style("background-position", "center");
  button.style("background-image", "url(" + image + ")");
  button.style("background-repeat", "no-repeat");
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
  if(index<canciones.length-1){
  index+=1;
  }
  else {
    index=0;
  }
  Play();
}
