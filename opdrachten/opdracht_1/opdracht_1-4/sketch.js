// ------------------------------------ Opdracht 1.4 ------------------------------------ //
// ---------------------------- Vars ---------------------------- //
// -------------- Bal 1 -------------- //
var bal1_xPos,   bal1_yPos = 0;
var bal1_xSpeed, bal1_ySpeed = 0;
var bal1_xSize,  bal1_ySize = 0;
var bal1_color = [100, 50, 200];
// -------------- Bal 2 -------------- //
var bal2_xPos,   bal2_yPos = 0;
var bal2_xSpeed, bal2_ySpeed = 0;
var bal2_xSize,  bal2_ySize = 0;
var bal2_color = [50, 200, 100];

function setup() {
  //plaats hier de code die maar één keer hoeft te worden uitgevoerd
  createCanvas(800,600);
  background(255);

  // ---------------------------- Var init ---------------------------- //
  // -------------- Bal 1 -------------- //
  // position
  bal1_xPos = width/2;
  bal1_yPos = height/2;
  // speed
  bal1_xSpeed = 1
  bal1_ySpeed = 2;
  // size
  bal1_xSize = 50;
  bal1_ySize = 50;

  // -------------- Bal 2 -------------- //
  // position
  bal2_xPos = width/2;
  bal2_yPos = height/2;
  // speed
  bal2_xSpeed = -2
  bal2_ySpeed = 1;
  // size
  bal2_xSize = 30;
  bal2_ySize = 30;
}

function draw() {
  // Achtergrondkleur (black/white)
  background(255);

  // -------------- Bal 1 -------------- //
  fill(bal1_color); // Kleuren van de ellipse staan in ARRAY
  stroke("#000"); // Rand (#rgb(a))
  noStroke(); // Geen rand!
  bal1_xPos+=bal1_xSpeed;
  bal1_yPos+=bal1_ySpeed;
  ellipse(bal1_xPos, bal1_yPos, bal1_xSize, bal1_ySize); // (pos-x, pos-y, size-x, size-y)

  // -------------- Bal 2 -------------- //
  fill(bal2_color); // Kleuren van de ellipse staan in ARRAY
  stroke("#000"); // Rand (#rgb(a))
  noStroke(); // Geen rand!
  bal2_xPos+=bal2_xSpeed;
  bal2_yPos+=bal2_ySpeed;
  ellipse(bal2_xPos, bal2_yPos, bal2_xSize, bal2_ySize); // (pos-x, pos-y, size-x, size-y)
}
