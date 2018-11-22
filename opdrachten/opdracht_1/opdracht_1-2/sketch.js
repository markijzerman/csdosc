// ------------------------------------ Opdracht 1.2 ------------------------------------ //
function setup() {
  //plaats hier de code die maar één keer hoeft te worden uitgevoerd
  createCanvas(800,600);
  background(255);
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

  // Teken de ellipse
  // (pos-x, pos-y, size-x, size-y)
  ellipse(width/2, height/2, 50, 50);
}
