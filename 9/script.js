const buttonLN = document.getElementById('buttonLN');
const lightNight = document.getElementById('lightNight');
const light = document.getElementById('light');
const night = document.getElementById('night');
const body = document.getElementById('body')

buttonLN.addEventListener('click', () => {
    lightNight.classList.toggle('right')
    lightNight.classList.toggle('left')
    lightNight.style.transition = '0.3s all'
    light.style.fill = 'black'
    light.style.stroke = 'black'
    body.classList.toggle('night')
})