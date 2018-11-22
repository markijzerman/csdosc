// ------------------------------------ Opdracht 1.3 ------------------------------------ //
// Vars
var xPos,   yPos = 0;
var xSpeed, ySpeed = 0;
var xSize,  ySize = 0;

function setup() {
  //plaats hier de code die maar één keer hoeft te worden uitgevoerd
  createCanvas(800,600);
  background(255);

  // Var init
  // position
  xPos = width/2;
  yPos = height/2;
  // speed
  xSpeed = 1
  ySpeed = 2;
  // size
  xSize = 50;
  ySize = 50;
}

function draw() {
  // Achtergrondkleur (black/white)
  background(255);

  // Kleuren van de ellipse (r, g, b, (a))
  fill(100, 50, 200);
  // Rand (#rgb(a))
  stroke("#000");
  // Geen rand!
  noStroke();

  xPos+=xSpeed;
  yPos+=ySpeed;

  // Teken de ellipse
  // (pos-x, pos-y, size-x, size-y)
  ellipse(xPos, yPos, xSize, ySize);
}
