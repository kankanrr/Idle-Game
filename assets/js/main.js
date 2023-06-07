// Vars
const timerDisplay = document.querySelector('#timer');
const sellBtn = document.querySelector('#sell-btn');

var gameData = {
    money: 0,
    shards: 0,
    tokens: 0
};

var timeTable = {
    int1: 10,
    int2: 30,
    int3: 60,
    int4: 120
}

let time = 10;

// Functions

function timeLoop () {
    console.log('time loop started')

    setInterval(time, 1000);

    timerDisplay.textContent = time;

};

// Initialization

sellBtn.addEventListener('click', timeLoop);