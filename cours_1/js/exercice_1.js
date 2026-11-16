// DES7720 — EXERCICE 1 — Introduction à p5.js

// Charger les fichiers avant de commencer.
function preload() {
}

// Préparer le sketch une seule fois.
function setup() {
createCanvas(640,640);
background(mouseX,mouseY,255);







}

// Dessiner en boucle.
function draw() {
  
    rectMode(CENTER)
     rect(mouseX,mouseY,mouseY,mouseX);
}
