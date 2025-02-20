const cont = document.getElementById('cont');
const color = document.getElementById('color');
let ss = 0;

color.addEventListener('input', () => {
    localStorage.setItem('color', color.value);
    document.body.style.background = color.value
});

color.value = localStorage.getItem('color')
document.body.style.background = localStorage.getItem('color')

const int = setInterval(() => {
    if (ss <= 800*2) {
        ss += 800
        cont.scrollLeft += 800
        
    } else {
        cont.scrollLeft -= 800*4
        ss = 0
    }
}, 5000);