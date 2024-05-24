// OK. NE PLUS TOUCHER
setInterval(clock, 1000); 
function clock(){
    d = new Date(); 
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    heure_rotation = 30 * h + m / 2;
    minute_rotation = 6 * m;
    seconde_rotation = 6 * s;
 
    heure.style.transform = "rotate("+heure_rotation+"deg)";
    minute.style.transform = "rotate("+minute_rotation+"deg)";
    seconde.style.transform = "rotate("+seconde_rotation+"deg)";}





   