setInterval(clock, 1000);

function clock() {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const heure_rotation = 30 * h + m / 2;
    const minute_rotation = 6 * m;
    const seconde_rotation = 6 * s;

    document.getElementById("heure").style.transform = `rotate(${heure_rotation}deg)`;
    document.getElementById("minute").style.transform = `rotate(${minute_rotation}deg)`;
    document.getElementById("seconde").style.transform = `rotate(${seconde_rotation}deg)`;
}

