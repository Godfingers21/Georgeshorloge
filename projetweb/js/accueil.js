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