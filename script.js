
const jokeText = document.getElementById('joke-text');
const newJokeBtn = document.getElementById('new-joke');

let jokes = [];

const loadJokes = async () => {

    const resp = await fetch('jokes.json');
    const data = await resp.json();
    jokes = data.map(item => (typeof item === 'string' ? item : item.joke || String(item)));

}

const getRandomJoke = () => {

    const idx = Math.floor(Math.random() * jokes.length);
    return jokes[idx];
}

const displayJoke = () => {
    const j = getRandomJoke();
    jokeText.classList.add('joke-fade');
    setTimeout(() => {
        jokeText.textContent = j;
        jokeText.classList.remove('joke-fade');
    }, 220);
}

if (newJokeBtn) {
    newJokeBtn.addEventListener('click', () => {
        displayJoke();
    });
}


// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    await loadJokes();
    displayJoke();
    const yEl = document.getElementById('copyright-year');
    if (yEl) yEl.textContent = new Date().getFullYear();

});

