function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;
var h = 10;
var value=255;
var x1= 390;

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }

  fill(40, 100, 60);
  rect(0, height-10, width, 10);
  
  if (mouseIsPressed) {
    fill(255);
    rect(x1, 0, width, height-10);
      h=10
        if(x1<400){
        x1-=5;
        }
        if(x1<=-10){
        x1=399;
        }
  }
}
