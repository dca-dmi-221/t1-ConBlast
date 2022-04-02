let img;
let canciones = [];
let index = 0;
// let peaky;

let boton;

class Pantallas{
  
}


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
  
  //peaky = new Boton(849,538,"Start.png","Pausa.png");
  
  boton = new Boton(600,600,"/Start.png","/Pause.png")
}

function draw() {
  background(0,0,0);
  image(img,330,120);
  boton.draw2()
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

class Boton {
  constructor(x,y,botonplay,botonpause) {
  this.x = x;
  this.y = y;
  this.botonplay = loadImage(botonplay);
  this.botonpause = loadImage(botonpause);
  
}

getX(){
  return this.x;
}
getY(){
  return this.y;
}

draw2() {
  
  image(this.botonPlay,200,100)
}
}

