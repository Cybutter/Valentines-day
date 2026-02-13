const button = document.getElementById('highlight-btn');
const text = document.getElementById('hello-text');

button.addEventListener('click', () => {
    text.classList.toggle('highlight');
});