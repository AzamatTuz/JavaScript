const upArrow = document.getElementById('upArrow');
const downArrow = document.getElementById('downArrow');
const cont = document.getElementById('cont2')

upArrow.addEventListener('click', () => {
    cont.scrollTop += 220;
    cont.style.scrollBehavior = 'smooth';
})

downArrow.addEventListener('click', () => {
    cont.scrollTop -= 220;
    cont.style.scrollBehavior = 'smooth'
})