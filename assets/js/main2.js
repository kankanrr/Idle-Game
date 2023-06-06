// const sellBtn = document.querySelector('#sell-btn');


// let last_time = null;
// let total_time = 0;
// setInterval(function gameLoop() {
//     const current_time = Date.now();
//     if (last_time === null) {
//         last_time = current_time;
//     }
//     const delta_time = current_time - last_time;
//     total_time += delta_time;
//     last_time = current_time;
//     updateMyGame(delta_time, total_time);
// }, 1000);

// const currency_display = document.querySelector('#money');
// let money = 0;
// const currency_per_millisecond = 0.001;

// function updateMyGame (delta_time, total_time) {
//     money += currency_per_millisecond * delta_time;
//     currency_display.textContent = money;
// }


// sellBtn.addEventListener('click', sellAll);