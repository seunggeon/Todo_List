const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = form.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function paintToDo(text) {
    const li = document.createElement("li");
    li.innerText
}

function handleSubmit(event){
    event.preventSubmit();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos === null){

    }else {

    }
}

function init(){
    loadToDos
}

init();