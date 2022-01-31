const gridElement = document.querySelector('.grid');
const mainTitleElement = document.querySelector('.main-title');

const playElement = document.getElementById('play');
const selectElement = document.getElementById('difficulty');
let index;
const easyIndex = 100;
const nightmareIndex = 81;
const hellIndex = 49;
let difficultyClass;
const easyClass = 'square-easy';
const nightmareClass = 'square-nightmare';
const hellClass = 'square-hell';

playElement.addEventListener('click', function() {

    mainTitleElement.classList.add('hidden');
    gridElement.classList.add('active');
    // per cancellare (e poi riscrivere tramite for) il contenuto di grid ad ogni click di play
    gridElement.innerHTML = '';

    if (selectElement.value == 'easy') {
        index = easyIndex;
        difficultyClass = easyClass;
    } else if (selectElement.value == 'nightmare') {
        index = nightmareIndex;
        difficultyClass = nightmareClass;
    } else if (selectElement.value == 'hell') {
        index = hellIndex;
        difficultyClass = hellClass;
    }
    
    for (let i = 1; i <= index; i++) {
        const squareElement = document.createElement('div');

        const squareIndex = document.createTextNode(i);
        squareElement.appendChild(squareIndex);

        squareElement.classList.add('square', difficultyClass);
        gridElement.appendChild(squareElement);

        squareElement.addEventListener('click', function() {
            this.classList.add('clicked');
        });
    }
});


