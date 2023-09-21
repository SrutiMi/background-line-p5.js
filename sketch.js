let currTime,startTime,x1,y1,x2,y2,r,g,b;
function setup() {
  createCanvas(1000, 1000);
  background(0);
  frameRate(10);
  startTime=millis();
  
}

function draw() {
  currTime = millis();
  if(currTime-startTime>20000){
    background(0);
    startTime=millis();
  }
  x1=random(width);
  y1=random(height);
  x2=random(width);
  y2=random(height);
  r=random(255);
  g=0;
  b=random(255);
  stroke(r,g,b,80);
  line(x1,y1,x2,y2);
  
}