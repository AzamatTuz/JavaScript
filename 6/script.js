const btn = document.getElementById('btn');
const texts = document.querySelectorAll('.text');
let clicked = 1;
const cont = document.getElementById('cont');



btn.addEventListener('click', () => {
    clicked++;
    if (clicked % 2 === 0) {
        texts.forEach((text) => {
            text.style.display = 'flex';
            text.style.opacity = '1';
        })

        cont.style.width = '200px'
    } else if (clicked % 2 !== 0) {
        texts.forEach((text) => {
            text.style.display = 'none';
            text.style.opacity = '0';
        })

        cont.style.width = ''
    }
})