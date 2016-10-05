// Cathleen Bishop
// https://xarts.usfca.edu/~cjbishop/readdit2/

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
  
  specs = loadImage("assets/specs.png");  // Load the specs banner


  img1 = loadImage("assets/insta_mountain.jpeg");
  img2 = loadImage("assets/insta_fall.jpeg");
  img3 = loadImage("assets/insta_lights.jpeg");
  img4 = loadImage("assets/insta_gargoyle.jpeg");
  img5 = loadImage("assets/insta_fruit.jpeg");
  img6 = loadImage("assets/insta_hills.jpeg");

  buffer = (windowWidth - slideX) / 2;
  var buffplus = 0;
  for (var i = 0; i < count; i++) {
    insta[i] = new Photo(buffer + buffplus, 549);
    buffplus = buffplus + 179;
  }
  
  home = createElement('h1', 'HOME');
  home.style("font-size", "14px");
  home.style("color", "#0000FB");
  home.style("text-font", "Arial");
  home.position(buffer+210, 94);
  home.mousePressed(disappearH);
  
  about = createElement('href', 'ABOUT');
  about.style("font-size", "14px");
  about.style("color", "#0000FB");
  about.position(buffer+420, 103);
  about.id("link");
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

  logoX = windowWidth / 2.7;
  logoY = 5;
  logo = createImg('assets/ama_logo_small.png');
  logo.position(logoX, logoY);
  logo.mousePressed(move);

}

function draw() {
  background(255);
 


  image(specs, buffer, 135);
  //slideshow size
  // noStroke();
  // fill(150);
  // rect(buffer, 135, slideX, 403);

  //"instagram" photos under slideshow
  for (var i = 0; i < insta.length; i++) {
    //set the display based on i -- see below in the Photo constructor
    insta[i].display(i);
  }

  //nav
  fill(235);
  rect(buffer, 95, slideX, 30);
  
  
  // noStroke();
  // rect(0, 0, windowWidth, windowHeight); //overcanvas
  // tint(255, 126);  // Display at half opacity
  // rect(logoX, logoY, 337, 150); //over logo
  // tint(255, 157);  // Display at half opacity

}


function Photo(_x, _y) {
  this.x = _x;
  this.y = _y;


  // this.x = buffer;
  // this.y = 423;
  this.xspeed = random(-5, 5);
  this.yspeed = random(-5, 5);

  //let the display function take an argument
  //and use that argument to set the image
  this.display = function(i) {
    noStroke();
    strokeWeight(5);
    fill(150);

    if (i == 0) {
      image(img1, this.x, this.y, w, h);
    }
    if (i == 1) {
      image(img2, this.x, this.y, w, h);
    }
    if (i == 2) {
      image(img3, this.x, this.y, w, h);
    }
    if (i == 3) {
      image(img4, this.x, this.y, w, h);
    }
    if (i == 4) {
      image(img5, this.x, this.y, w, h);
    }
    if (i == 5) {
      image(img6, this.x, this.y, w, h);
    }
  }
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