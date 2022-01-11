function preload() {
  
}
function setup() {
  canvas=createCanvas(500, 450);
  canvas.position(350,250);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video,40,40,400,400); 
  fill("red");
  stroke("black");

  circle(60,50,63);
  circle(60,405,63);
  circle(425,50,63);
  circle(430,405,63);
  fill("green");
  stroke("grey");
  rect(90,40,310,25);  
  rect(415,80,25,310);
  rect(90,390,310,25);
  rect(50,80,25,310);
}
function capture_img(){
  save("selfie2*o.png");    
}