
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
