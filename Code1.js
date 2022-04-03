let img;

let backgrounds = [];

let canciones = [];
let cancionesmorty = [];
let cancionesstranger = []; //Cargar

let listaseleccionada = canciones;
let index = 0;
let indexbg = 0;

let songbuttons = [];


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

  botonPeaky=createButton("");
  botonPeaky.mousePressed(changePlayList(0));
  botonPeaky.position(36, 296);
  botonPeaky.size(315, 78);
  applyButtonStyleIzquierda(botonPeaky, "Elementos/Peaky.png");

  botonMorty=createButton("");
  botonMorty.mousePressed(changePlayList(1));
  botonMorty.position(36, 388);
  botonMorty.size(315, 78);
  applyButtonStyleIzquierda(botonMorty, "Elementos/Morty.png");

  botonStranger=createButton("");
  botonStranger.mousePressed(changePlayList(2));
  botonStranger.position(36, 483);
  botonStranger.size(315, 78);
  applyButtonStyleIzquierda(botonStranger, "Elementos/Stranger.png");
}


// Draw

function draw() {
  background(0,0,0);

  image(backgrounds[indexbg],0,0)

  image(img,475,101);
  
}

// Funciones

function changePlayList(index) {
  return function() {
    indexbg = index;
  }  
}

function applyButtonStyle(button, image) {
  button.style("background-color", "#FFFFFF");
  button.style("border-radius", "50%");
  button.style("background-position", "center");
  button.style("background-image", "url(" + image + ")");
  button.style("background-repeat", "no-repeat");
}

function applyButtonStyleIzquierda(button, image) {
  button.style("background-color", "transparent");
  button.style("border","none");
  button.style("border-radius", "15px");
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
