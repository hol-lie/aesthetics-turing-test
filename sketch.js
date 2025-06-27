let r = 0;
let g = 0;
let b = 0;
// let xPos = 0;
let scaledX = 0;
let scaledY = 0;

let mappedSecond = 0; 
let mappedMinute = 0; 
let mappedMillis = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  


  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
 
 
}

function draw() {
  background(mouseX, g, 222);
  
  // xPos = xPos + 1;
  // xPos = constrain(xPos,0,60);
  
  scaledX= map(mouseX, 0, 100, 0,255)
  scaledY= map(0, mouseY, width, 0,255)
  mappedSecond=map(second(),0,59,255,10);
  mappedMinute=map(minute(),0,59,255,10);
  mappedMillis=map(millis(),0,1000,0,255)
  
     //toplines
  
  stroke(255-r,255-g,255-b);
  strokeWeight(17); 
  line(0,50,775,50);
  line(0,80,700,80);
  strokeWeight(35);
  line(775, 41,775, mappedMillis);
  line(700, 71,700, mappedMillis);
  
  //toplines
 

  
  //yellow rect 
  noStroke();
  fill(mappedSecond, 255, mappedMinute);
  rect(width/3, height/3, width, 400)
  rect(width/3, height/3, width, 400)
  
  //yellow rect 
  
  //blue2rect
  
  noStroke();
  fill (mouseX, mouseY, mappedMillis);
  rect(0,height/2.5, mouseX,mouseY);
  
  //blue2rect
  
  
 
  
    //green rect 
  noStroke();
  fill(r/2, mouseY, b);
  // rect(0, height-250, 1000,200);
  rect(0,height/2, 1000,200);
  
  //green rect 
  
  //lightbluerect
  noStroke();
  fill(r,g, mappedMillis);
  rect(width/5.5, height-215, mappedMillis,115);
  //lightbluerect
  

  
  //pink rect 
  noStroke();
  fill(((mappedMillis/5)-200),g, mouseX);
  // rect (0, height/5.5, 820, 300);
  rect (mouseX/2.5, 100, mappedMillis/5, 200);
  
  //pink rect 
  

  
   // brownrect
  noStroke();
  fill (r, mouseY/2, mouseY);
  rect(0, 0, 100, height);
  // brownrect
  
  //greyline
  strokeWeight(20);
  strokeCap(SQUARE)
  
  stroke(mouseY, mouseY, mappedMillis);
    line(width/5, height-120, mappedMillis/5, height-120);
  
  stroke(mappedMillis, scaledX, mappedMillis);
    line(width/5, height-145, mappedMillis/4, height-145);
  
  stroke(scaledX, mappedMillis, b);
    line(width/5, height-170, mappedMillis/3, height-170);
  
  stroke(mappedMillis, mouseY, scaledX);
    line(width/5, height-195, mappedMillis/2, height-195);
  //greyline
  
  //blacksquare
  
  noStroke();
  fill(0);
  // rect(18,150,80,80);
  rect(18,mouseY/2,80,80);
  
  stroke(0);
  strokeWeight(24);
  strokeCap(SQUARE);
  // line(20, 150,20, height)
  line(20, mouseY/2,20, height)

  //blacksquare
  
  //whitesquare
  noStroke();
  fill(mouseY,mouseY,mouseY);
  rect(60,mouseY,40,40)
  
  stroke(mouseY,mouseY,mouseY);
  strokeWeight(27);
  // line(60,270,60,height);
  line(60,mouseY,60,height);
  
  //whitesquare



}