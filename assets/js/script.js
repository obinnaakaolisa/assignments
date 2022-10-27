const loginBtn = document.getElementById('loginBtn');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('loginForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

loginBtn.addEventListener('click', () => {
    if(email != '' && password !='') {
        window.location.href='/success.html';
    }
});