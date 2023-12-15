const hour = document.getElementById('hr');
const min = document.getElementById('mn');
const sec = document.getElementById('sc');

function tictac(){
    let date = new Date();
    let seconds = date.getSeconds();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    sec.style.transform = `rotateZ(${(seconds * 6)}deg)`;
    hour.style.transform = `rotateZ(${(hours * 30) + (1/2 * minutes)}deg)`;
    min.style.transform = `rotateZ(${(minutes * 6)}deg)`; 
}

setInterval(tictac,1000);