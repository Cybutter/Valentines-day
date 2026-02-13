const button = document.getElementById('highlight-btn');
const text = document.getElementById('hello-test');

button.addEventListener('click', () => {
    text.classList.toggle('highlight');
});