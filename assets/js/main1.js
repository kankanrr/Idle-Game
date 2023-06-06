// https://gist.github.com/HipHopHuman/3e9b4a94b30ac9387d9a99ef2d29eb1a


// Vars
const sellBtn = document.querySelector('#sell-btn');
const timerEl = document.querySelector('#timer');

let timer = 10;
let timerInterval = setInterval(gameTime, 1000);

// let timerInterval = setInterval(function () {
//     timer--;
//     timerEl.textContent = timer;
//     if (timer <= -1) {
//         clearInterval(timerInterval);
//     }
// }, 1000);



// timer function

function gameTime () {
    timer--;
    timerEl.textContent = timer;
    if (timer <= -1) {
        clearInterval(timerInterval);
    }
}

// sell function



sellBtn.addEventListener('click', sellAll);

function sellAll() {
    clearInterval(gameTime);
    timerInterval = setInterval(gameTime, 1000);
}

// start game funct | needs interval

function startIdle() {

}

startIdle();