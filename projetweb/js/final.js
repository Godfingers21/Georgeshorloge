
function discoursFin() {
    discours = document.getElementById("discours");
    recompense = document.getElementById("recompense");
    discours.style.display = "none";
    recompense.style.display = "block";
    recompense.play();
    recompense.loop = true;
}