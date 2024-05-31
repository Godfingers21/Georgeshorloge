const images = ['../img/maison/test1.png', '../img/maison/test2.png', '../img/maison/test3.png', '../img/maison/test4.png'];
const videos = ['../img/maison/loading1.mp4','../img/maison/loading2.mp4','../img/maison/loading3.mp4','../img/maison/loading4.mp4'];
let compteur = 0;
let i = 1;


function ClicButton(){
    if (compteur === 3){
        compteur = 0;
      }
    else{
      compteur += i;
    }
    var area = document.getElementById("clickableArea");
    if (compteur != 0){
      area.style.display = "none";
    }
    else{
      area.style.display = "block";
    }
    // Afficher la vidéo
    var video = document.getElementById("loadingVideo");
    var posterImage = document.getElementById("posterImage");

    posterImage.style.display = "none";
    posterImage.src = images[compteur];
    video.style.display = "block";

    // Attendre la fin de la vidéo
    video.addEventListener("ended", function() {
        // Cacher la vidéo
        video.style.display = "none";
        video.currentTime = "0";
        video.src = videos[compteur];
        // Afficher l'image
        posterImage.style.display = "block";
    }) 
}

function ClicArea() {

  var afterClic = document.getElementById("afterClic");
  var container = document.getElementById("videoContainer");
  container.style.display = "none";
  afterClic.style.display = "block";
};



function increment(chiffreId) {
  const chiffreElement = document.getElementById(chiffreId);

  let currentValue = parseInt(chiffreElement.textContent);
  if (currentValue < 9) {
      chiffreElement.innerText = currentValue + 1;
  }
  checkCode();
}

function decrement(chiffreId) {
  const chiffreElement = document.getElementById(chiffreId);
  let currentValue = parseInt(chiffreElement.textContent);
  if (currentValue > 0) {
      chiffreElement.innerText = currentValue - 1;
  }
  checkCode();
}

function checkCode() {
  const zero = parseInt(document.getElementById("0").textContent);
  const un = parseInt(document.getElementById("1").textContent);
  const deux = parseInt(document.getElementById("2").textContent);

  if (zero === 2 && un === 0 && deux === 3) {
      document.getElementById("finalLink").setAttribute("href","final.html");
      document.getElementById("finalImage").src = "../img/maison/dooropened.png";
      document.getElementById("fleches").style.display = "none";
      document.getElementById("chiffres").style.display = "none";
  }
}