let img;
let backgrounds = [];
let canciones = [];
let index = 0;



//Cargar archivos

function preload(){
  canciones[0] = loadSound("PeakyBlinders/Electro1.mp3");
  canciones[1] = loadSound("PeakyBlinders/Electro2.mp3");
  canciones[2] = loadSound("PeakyBlinders/Electro3.mp3");
  canciones[3] = loadSound("PeakyBlinders/Electro4.mp3");
  canciones[4] = loadSound("PeakyBlinders/Electro5.mp3");

  backgrounds[0] = loadImage("Elementos/BG2.png");
  backgrounds[1] = loadImage("Elementos/BG3.png");
  backgrounds[2] = loadImage("Elementos/BG4.png");
  
}

// Setup

function setup() {
  createCanvas(1800, 800);
  img = loadImage('Elementos/Logo.png')

  botonPlay=createButton("");
  botonPlay.mousePressed(Play);
  botonPlay.position(900, 538);
  botonPlay.size(80, 80);
  applyButtonStyle(botonPlay, "Elementos/Start.png");

  botonStop=createButton("");
  botonStop.mousePressed(Stop);
  botonStop.position(820, 538);
  botonStop.size(80, 80);
  applyButtonStyle(botonStop, "Elementos/Pause.png");

  botonNext=createButton("");
  botonNext.mousePressed(Next);
  botonNext.position(980, 538);
  botonNext.size(80, 80);
  applyButtonStyle(botonNext, "Elementos/Next.png");

  botonLast=createButton("");
  botonLast.mousePressed(Last);
  botonLast.position(740, 538);
  botonLast.size(80, 80);
  applyButtonStyle(botonLast, "Elementos/Last.png");
}


// Draw

function draw() {
  background(0,0,0);

  image(img,475,101);
  
}

// Funciones

function applyButtonStyle(button, image) {
  button.style("background-color", "#FFFFFF");
  button.style("border-radius", "50%");
  button.style("background-position", "center");
  button.style("background-image", "url(" + image + ")");
  button.style("background-repeat", "no-repeat");
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

function Last(){
  Stop();
  if(index<canciones.length-1){
  index-=1;
  }
  else {
    index=4;
  }
  Play();
}
