let clock = document.getElementById('clock');
const div = document.createElement('div');

function startTime() {
    
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    div.innerHTML = `${h} : ${m}`;
    setTimeout(startTime, 1000);

    
}

clock.appendChild(div);

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

startTime()

const btn = document.getElementById('btn');
const rotateArrow = document.getElementById('rotateArrow');

btn.addEventListener('click', () => {
    clock.classList.toggle('left');
    rotateArrow.classList.toggle('rotateArrow')
})