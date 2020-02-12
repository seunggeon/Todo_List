const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function clock(){
    const date = new Date;
    const dateHours = date.getHours();
    const dateMinutes = date.getMinutes();
    const dateSeconds = date.getSeconds();

    clockTitle.innerText=`${dateHours}:${dateMinutes}:${dateSeconds}`;
}

function init(){
    clock();
}

init();