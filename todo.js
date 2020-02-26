const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"), // 태그명과 상수명이 같아서 toDoInput으로 수정
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos'; // localStorage 추가할 value값 key-value 중 key에 들어갈 걸 toDos라고 정의

let toDos = [];

function deleteToDo(event) {
    const btn = event.target; 
    const li = btn.parentNode;  
    toDoList.removeChild(li);  
    const cleanToDos = toDos.filter(function(toDo) {   
      return toDo.id !== parseInt(li.id);  // return값이 true면 배열에 값을 남겨두고 false면 배열에 값을 제거한다.
    }); 
    toDos = cleanToDos;
       saveToDos();
   } 


function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos)); // key값에는 TODOS_LS = 'toDos'를 넣고 value값에는 json객체를 string객체로 변환해서 넣어주고
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.addEventListener("click",deleteToDo);
    const span = document.createElement("span");
    const newId  = toDos.length +1;
    span.innerText = text; //span이 빈공간인 네모상자 라고 보면된다.
    li.appendChild(delBtn); 
    li.appendChild(span); 
    li.id = newId; // span이랑 delbtn을 li 자식으로 삼고
    toDoList.appendChild(li); // .js-toDoList에 li를 추가 
    const toDoObj = {
        text: text,
        id: newId
    }; //JSON으로 데이터 저장.
    toDos.push(toDoObj); //전역변수인 toDos[]에 JSON 추가
        saveToDos(); // localstorage에는 JSON을 string으로 바꿔서 저장
}

function handleSubmit(event){
    event.preventDefault(); //이벤트 태그인 submit 같은 건 각 태그마다 고유한 기능이 있다. 예를 들면 submit은 새로고침이라든지.. 페이지이동이라든지.. 그 고유한 기능을 없애는 함수다.
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
    const parsedToDos = JSON.parse(loadedToDos); // local에 있던 거를 json객체로 변환
        parsedToDos.forEach(toDo => {
            paintToDo(toDo.text);
        });
    }
}// 이 함수의 기능이 key값

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();