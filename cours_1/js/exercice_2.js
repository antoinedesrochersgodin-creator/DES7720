let boite_oeuf;
let boite_oeuf_2;
let calque; // mémorise les zones révélées

function preload() {
  boite_oeuf = loadImage("./assets/images/boite_oeuf.jpeg");
  boite_oeuf_2 = loadImage("./assets/images/boite_oeuf_2.png");
}

function setup() {
  createCanvas(boite_oeuf.width, boite_oeuf.height);
  boite_oeuf_2.resize(boite_oeuf.width, boite_oeuf.height);

  calque = createGraphics(width, height); // calque transparent
}

function draw() {
  background(0);

  // 1. image de base
  image(boite_oeuf, 0, 0);

  // 2. zones révélées par-dessus
  image(calque, 0, 0);

  // 3. carré de la souris
  noFill();
  stroke(255, 0, 0);
  ellipseMode(CENTER);
  ellipse(mouseX, mouseY, 90, 90);
}

function mouseDragged() {
  reveler();
}

function mousePressed() {
  reveler();
}

function reveler() {
  // on copie depuis boite_oeuf_2 vers le calque (coin sup. gauche = souris - 50)
  calque.copy(
    boite_oeuf_2,
    mouseX - 50, mouseY - 50, 100, 100,
    mouseX - 50, mouseY - 50, 100, 100
  );
}
/*  
Pistes d’exploration — choisissez une idée ou suivez la vôtre.

- Changez la photo pour dessiner avec une image de votre choix.
- Changez la taille du fragment que vous prélevez dans la photo. Essayez un carré de 20 × 20 pixels, puis de 100 × 100 pixels.
- Dessinez avec un GIF animé pour prélever des fragments à différents moments.
- Remplacez la photo par une vidéo et dessinez avec des fragments de cette vidéo.
- Dessinez avec des formes au clic ou au glisser.
- Ajoutez deux états au sketch : un double-clic (doubleClicked()) pourrait faire passer de la photo aux formes.
*/
