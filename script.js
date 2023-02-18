// let nbre = document.querySelectorAll(".nombre")
// let start = document.querySelector('#start')
// let stop = document.querySelector('#stop')
// let i = 1
// let myTime = null; 

// function acceler() {
//   if (i < 10) {
//     nbre[0].textContent = i;
//     nbre[1].textContent = i;
//     nbre[2].textContent = i;
//     i++;
//   } else {
//     nbre[0].textContent = 0;
//     nbre[1].textContent = 0;
//     nbre[2].textContent = 0;
//     i = 0;
//   }
// }

// start.addEventListener("click", () => {
//   myTime = setInterval(acceler, 500);
// });

// stop.addEventListener("click", () => {
//   clearInterval(myTime);
// });
let nbre = document.querySelectorAll(".nombre");
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let myTime = null; 

function acceler() {
  nbre.forEach(element => {
    element.textContent = Math.floor(Math.random() * 10);
  });
}

start.addEventListener("click", () => {
  myTime = setInterval(acceler, 0.0000000000000000000001);
});

stop.addEventListener("click", () => {
  clearInterval(myTime);
});
