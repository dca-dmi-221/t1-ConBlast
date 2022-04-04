// Variables

let img; //Logo

let backgrounds = []; //Fondos

let canciones = []; //Canciones peaky blinders
let cancionesmorty = []; //Canciones rick n morty
let cancionesstranger = []; //Canciones stranger things

let listaseleccionada = canciones;
let index = 0;
let indexbg = 0;

let songbuttons = []; //Botones de la derecha

let amplitud;

var controlVol = document.getElementById("controlvol");

// Cargar archivos

function preload(){
  canciones[0] = loadSound("PeakyBlinders/Electro1.mp3");
  canciones[1] = loadSound("PeakyBlinders/Electro2.mp3");
  canciones[2] = loadSound("PeakyBlinders/Electro3.mp3");
  canciones[3] = loadSound("PeakyBlinders/Electro4.mp3");
  canciones[4] = loadSound("PeakyBlinders/Electro5.mp3");

  cancionesmorty [0] = loadSound("RickAndMorty/Trap1.mp3");
  cancionesmorty [1] = loadSound("RickAndMorty/Trap2.mp3");
  cancionesmorty [2] = loadSound("RickAndMorty/Trap3.mp3");
  cancionesmorty [3] = loadSound("RickAndMorty/Trap4.mp3");
  cancionesmorty [4] = loadSound("RickAndMorty/Trap5.mp3");

  cancionesstranger [0] = loadSound("StrangerThings/Pop1.mp3");
  cancionesstranger [1] = loadSound("StrangerThings/Pop2.mp3");
  cancionesstranger [2] = loadSound("StrangerThings/Pop3.mp3");
  cancionesstranger [3] = loadSound("StrangerThings/Pop4.mp3");
  cancionesstranger [4] = loadSound("StrangerThings/Pop5.mp3");

  backgrounds[0] = loadImage("Elementos/BG2.png");
  backgrounds[1] = loadImage("Elementos/BG3.png");
  backgrounds[2] = loadImage("Elementos/BG4.png");
  
  
}

// Setup (Botones xd)

function setup() {
  createCanvas(1800, 800);
  img = loadImage('Elementos/Logo.png')

  for(let i = 0; i < 5; i++) {
    const btn = createButton("Song "+ (i+1));
    btn.size(248, 61);
    btn.position(1512,246+(i*75));
    applyButtonStyle(btn);
    btn.mousePressed(buttonSong(i));
    songbuttons.push(btn);
    console.log("Ok for");
  }

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
  amplitude = new p5.Amplitude();

  slider = createSlider(0, 1, 1, 0.1);
  slider.position(620, 570);
  slider.addClass("slider1");
  // slider.style("width", "80px");
  // slider.style("height", "15px");
  // slider.style("background-color", "#FFFFFF");
  // slider.style("border-radius", "5px");
  // slider.style("outline", "none");
  // slider.style("opacity", "0.7");
  // slider.style("transition", "opacity .2s");

  
  sliderReprod = createSlider(0, listaseleccionada[index].duration(), 0, 0.1);
  sliderReprod.position(750, 490);
  sliderReprod.style("width", "300px");
  sliderReprod.input(jumpSong);
  sliderReprod.addClass("slider2");
  
  

  console.log("Ok setup"+listaseleccionada[index].duration());
  
}

function jumpSong(){
  // console.log("OK JUMP "+listaseleccionada[index].duration());
  listaseleccionada[index].jump(sliderReprod.value(), listaseleccionada[index].duration()-sliderReprod.value())
}

// Draw

function draw() {
  background(0,0,0);

  image(backgrounds[indexbg],0,0)

  image(img,475,101);
  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 200);
  ellipse(width/2, height/2, size, size);
  // console.log("draw");
  let val = slider.value();
  // console.log("vol:"+val);
  listaseleccionada[index].setVolume(val);
  // console.log("currentTime"+listaseleccionada[index].currentTime());
  sliderReprod.value(listaseleccionada[index].currentTime());

  
}

// Funciones

function buttonSong(newIndex) {
  return function(){
    listaseleccionada[index].stop();
    index = newIndex;
    listaseleccionada[index].play();
  }
}


function changePlayList(newIndex) {
  return function() {
    indexbg = newIndex;
    listaseleccionada[index].stop();
    switch (newIndex) {
      case 0:
        listaseleccionada = canciones;
        break;
      case 1:
        listaseleccionada = cancionesmorty;
        break;
      case 2:
        listaseleccionada = cancionesstranger;
        break;
    }
  }  
}

function applyButtonStyle(button, image) {
  button.style("background-color", "#FFFFFF");
  button.style("border-radius", "50px");
  button.style("background-position", "center");
  if (image) {
    button.style("background-image", "url(" + image + ")");
  }
  
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
  listaseleccionada[index].play();
  
}

function Stop(){
  listaseleccionada[index].stop();
}

function Next(){
  Stop();
  if(index<listaseleccionada.length-1){
  index+=1;
  }
  else {
    index=0;
  }
  Play();
}

function Last(){
  Stop();
  if(index<listaseleccionada.length-1){
  index-=1;
  }
  else {
    index=4;
  }
  Play();
}

function volumen(){
  console.log("cambiando el volumne");
  listaseleccionada[index].setVolume(0.1);
}


