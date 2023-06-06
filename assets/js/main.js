// Vars
const timerDisplay = document.querySelector('#timer');
const sellBtn = document.querySelector('#sell-btn');

const time = 10;

// Functions

function timeLoop () {
    console.log('time loop started')
    setInterval(timeLoop, 1000);

};

// Initialization

sellBtn.addEventListener('click', timeLoop);