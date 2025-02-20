const password = document.getElementById('password');
const check = document.getElementById('check');

check.addEventListener('change', () => {
    if (check.checked) {
        password.type = 'text'
    } else {
        password.type = 'password'
    }
});