const uptime = document.querySelector("#x")
let uptimeDayCount = 0;
const downtime = document.querySelector("#y");
const averageUptime = document.querySelector("#z")


const btn = document.querySelector("#refresh");
btn.addEventListener("click", refresh);
function refresh(){
    const score = document.querySelector("#score");
    while (score.firstChild){
        score.removeChild(score.lastChild);
    }
    data();
}
const array = [];
function data() {
    array.length = 0;
    uptimeDayCount = 0;
    for (let i = 0; i < 12; i++) {
        array.push(Math.floor(Math.random() * (3 - 1 + 1)) + 1);
        const newElement = document.createElement("div");
        let color = "";
        if (array[i] === 1) {
            color = "#21C55D";
        } else {
            if (array[i] === 2) {
                color = "#EBB305";
            } else {
                color = "#EF4444";
            }
        }
        newElement.style.background = color;
        newElement.classList.add("colors");
        document.querySelector("#score").appendChild(newElement);
    }
    for (let i = 0; i < array.length; i++){
        if (array[i] === 1 || array[i] === 2) {
            uptimeDayCount++;
        }
    }
    let resultUptime = 100/array.length*uptimeDayCount;
    resultUptime = resultUptime % 1 === 0 ? resultUptime : resultUptime.toFixed(2);
    uptime.innerText = resultUptime + "%";

    let lastDownTime = array.length - (array.lastIndexOf(3)+1);
    lastDownTime = array.includes(3) ? (lastDownTime === 0 ? "Today" : lastDownTime === 1 ? lastDownTime + " day ago" : lastDownTime + " days ago") : "No downtime";
    downtime.innerText = lastDownTime;

    let avgUptime = (uptimeDayCount / array.length) * 100;
    avgUptime = avgUptime % 1 === 0 ? avgUptime : avgUptime.toFixed(2);
    averageUptime.innerText = avgUptime + "%"
}
data();

const btnAlert = document.querySelector("#alert");
btnAlert.addEventListener("click", alert)
function alert(){
    let x = 0;
    if(x === 0) {
        const newElement = document.createElement("div");
        newElement.innerHTML = "<img src='warning-4-16.ico' alt=''/>Alert: This is a default visible toast!";
        document.querySelector(".main").appendChild(newElement);
        newElement.classList.add("alert");
        setTimeout(function(){
            newElement.remove();
        }, 2000)
    }
}