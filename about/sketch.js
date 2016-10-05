// Cathleen Bishop
// https://xarts.usfca.edu/~cjbishop/readdit/

var canvas;
var logo;
var logoX;
var logoY;
var buffer;
var slideX = 1050; //the set width of the slideshow
var insta = []; // array to store the photos under the slideshow
var count = 6; //variable to store how many photos I want to make
var w = 155; //width of a photo
var h = 155; //height of a photo
//sample instagram photos
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var clickCount = 0;
var home;
var about;
var style;
var faq;
var specs;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  // canvas.position(0, 0);
  
  specs = loadImage("../assets/woods-blue.png");  // Load the specs banner


  img1 = loadImage("assets/insta_mountain.jpeg");
  img2 = loadImage("assets/insta_fall.jpeg");
  img3 = loadImage("assets/insta_lights.jpeg");
  img4 = loadImage("assets/insta_gargoyle.jpeg");
  img5 = loadImage("assets/insta_fruit.jpeg");
  img6 = loadImage("assets/insta_hills.jpeg");

  buffer = (windowWidth - slideX) / 2;

  
  home = createElement('h1', 'HOME');
  home.style("font-size", "14px");
  home.style("color", "#0000FB");
  home.style("text-font", "Arial");
  home.position(buffer+210, 94);
  home.mousePressed(disappearH);
  
  about = createElement('h1', 'ABOUT');
  about.style("font-size", "14px");
  about.style("color", "#0000FB");
  about.position(buffer+420, 94);
  about.mousePressed(disappearA);
  
  style = createElement('h1', 'LIFESTYLE');
  style.style("font-size", "14px");
  style.style("color", "#0000FB");
  style.position(buffer+630, 94);
  style.mousePressed(disappearS);
  
  faq = createElement('h1', 'FAQ');
  faq.style("font-size", "14px");
  faq.style("color", "#0000FB");
  faq.position(buffer+840, 94);
  faq.mousePressed(disappearF);
  
  // forohfor = createElement('h1', '404');
  // found = createElement('p', 'the page your requested does not exist');

  logoX = windowWidth / 2.7;
  logoY = 5;
  logo = createImg('../assets/ama_logo_404.png');
  logo.position(logoX, logoY);
  logo.mousePressed(move);

}

function draw() {
  background(255);

  image(specs, buffer, 135);
  
  //nav
  noStroke();
  fill(235);
  rect(buffer, 95, slideX, 30);

}




function move() {
  //move logo when clicked
  logo.position(random(0, windowWidth), random(0, windowHeight));
}

function disappearH() {
  home.html(" ");
}

function disappearA() {
  about.html(" ");
}

function disappearS() {
  style.html(" ");
}

function disappearF() {
  faq.html(" ");
}

function mousePressed(){
// you fill in the code here to make the background cycle through r, g, b
// (in that order) as the user clicks.
  
  clickCount = clickCount+1;
  //same as saying clickCount++
  
  //reset to 0
  // if (clickCount == 4){ 
  //   clickCount = 0;
  // }
  
  if (clickCount === 0){
    tint(255,255);
  }
  else if (clickCount == 1){
    tint(255,229.5);
  }
  else if(clickCount == 2){
    tint(255,204);
  }
  else if(clickCount == 3){
    tint(255,178.5);
  }
  else if(clickCount == 4){
    tint(255,153);
  }
  else if(clickCount == 5){
    tint(255,127.5);
  }
  else if(clickCount == 6){
    tint(255,102);
  }
  else if(clickCount == 7){
    tint(255,76.5);
  }
  else if(clickCount == 8){
    tint(255,51);
  }
  else if(clickCount == 9){
    tint(255,25.5);
  }
  else if(clickCount >= 10){
    tint(255,0);
  }
}