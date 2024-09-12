const start = document.getElementById("start")

function randomNumber(a, b, c) {
   return Math.ceil(Math.random() * 3);
}
start.addEventListener("click", randomNumber())