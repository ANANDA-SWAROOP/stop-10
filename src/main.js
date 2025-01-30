
let starttime;
let elapsedtime = 0;
let timerinterval;

let timer = document.getElementById("timer");
let start = document.getElementById("start");
let end = document.getElementById("end");
let reset = document.getElementById("reset");
const ul = document.getElementById("lb");

function formattime(elapsed){
    const s = Math.floor(elapsed/1000);
    const m = Math.floor(s/60);
    const sec = s%60;
    const ms = Math.floor((elapsed%1000)/10)

    return `${String(m)}:${String(sec)}:${String(ms)}`;
}


function updateTimer(){
    const currenttime = Date.now();
    const elapsed = currenttime - starttime + elapsedtime;
    timer.textContent = formattime(elapsed)
}


start.addEventListener('click',() => {
    if(!timerinterval){
        // document.getElementById(data).textContent = "on";
        starttime = Date.now();
        timerinterval = setInterval(updateTimer,11);
    }
})


end.addEventListener('click',() => {
    if(timerinterval){
        // document.getElementById(data).textContent = "finish";
        clearInterval(timerinterval)
        timerinterval = null;
        elapsedtime += Date.now() - starttime

        const li = document.createElement("li");
        li.textContent =   `🚩${formattime(elapsedtime)}`
        ul.appendChild(li)
        reset.classList.remove("hidden")
    }
})


reset.addEventListener('click',() => {
    clearInterval(timerinterval);
    timerinterval = null
    elapsedtime = 0;
    timer.textContent = formattime(0)
    // while(ul.firstChild) ul.removeChild(ul.firstChild)
    
        reset.classList.add("hidden")
})