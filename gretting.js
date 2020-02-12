const form = document.querySelector(".js-form"),
input = document.querySelector("input"),
greeting = document.querySelector(".js-greetings");
const USER_LS ="currentUser",
SHOWING_CN = "showing"; //이벤트가 아니라 그냥 클래스 '이름' 일뿐

function saveName(text) {
    localStorage.setItem(USER_LS, text); // 이름과 값
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN); //class에 showing이라는 classname이 추가/제거
    greeting.innerText = `Hello ${text}`
 }
 function loadName(){
     const currentUser = localStorage.getItem(USER_LS);
     if(currentUser === null){
                //she is not
     }else{
            paintGreeting(currentUser)    //she is
     }
    
    }
function init(){
    askForName();
 }

 init();