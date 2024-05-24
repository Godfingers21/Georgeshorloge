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

document.addEventListener('mousemove', function(event) {
    const eyes = document.querySelectorAll('.eye');
    const h = document.querySelector('.textesecret');
    eyes.forEach(function(eye) {
        const rect = eye.getBoundingClientRect();
        const x = rect.left + (eye.clientWidth / 2);
        const y = rect.top + (eye.clientHeight / 2);
        const radian = Math.atan2(event.pageX - x, event.pageY - y);
        const rotation = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = `rotate(${rotation}deg)`;
        h.style.setProperty('background-position', `${event.clientX - 15}px ${event.clientY - 15}px`);
    });
});

if (!localStorage.getItem('alerted')) {
    alert("Attention ce site contient des secrets !");
    localStorage.setItem('alerted', 'yes');
}

function mouseOver() {
    const eyes = document.querySelector('.eyes');
    eyes.style.opacity = 1;
    setTimeout(() => {
        eyes.style.opacity = 0;
    }, 5000);
}

function showDescription(creator) {
    // Cacher toutes les descriptions d'abord
    var descriptions = document.querySelectorAll('.description');
    descriptions.forEach(function(description) {
        description.style.display = 'none';
    });

    // Afficher la description correspondante
    document.getElementById(creator + 'Description').style.display = 'block';
}