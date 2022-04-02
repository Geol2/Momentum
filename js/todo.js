const toDoForm = document.getElementById("todo_form");
const toDoInput = document.querySelector("#todo_form input");
const toDoList = document.getElementById("todo_list");

const TODOS_KEY = "todos";

let toDos = [];

    /*const storageItem = localStorage.getItem(TODOS_KEY);
    if( storageItem ) {
        if( !confirm("재입력 시, TODOS 초기화됩니다.\n계속하시겠습니까?") ) return;
    }*/

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentNode;
    
    li.remove();

    toDos = toDos.filter( item => {
        return item.id !== parseInt(li.id)
    });

    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.id = newTodo.id;
    li.className = 'todo_li';

    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    
    const newToDo = {
        id: Date.now(),
        text: toDoInput.value
    };

    toDoInput.value = "";

    const toDoLi = document.getElementsByClassName("todo_li");
    if(toDoLi.length > 7) {
        alert("더 이상 만들 수 없습니다.");

        return 0;
    }

    paintToDo(newToDo);
    toDos.push(newToDo);
    saveToDos();
}



toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if( savedToDos !== null ) {
    const parsedToDos = JSON.parse(savedToDos);

    toDos = parsedToDos;

    parsedToDos.forEach(paintToDo);
}