
const images = ['../img/maison1.png', '../img/maison2.png', '../img/maison3.png', '../img/maison4.png'];
let compteur = 0;
let i = 1;

function ImageSuivante(){
  if (compteur === 3){
    compteur = 0;
  }
  else{
    compteur += i;
  }
  var image = document.getElementById("maisonimage");
  image.src = images[compteur];
}