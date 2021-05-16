const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
//let editFlag = false;
//let editItem = null;
let todoListArray = [];

todoButton.addEventListener('click', addTodo);

function addTodo(event) {
    //Prevent from submitting
    event.preventDefault();
    
    /*if(editFlag){
        editItem.innerHTML =  todoInput.value;
        todoInput.value ="";
        editFlag = false;
        editItem = null;
        return;
    }*/

    todoListArray.push(todoInput.value); 
    todoInput.value = ""
    showList()

    /*const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
   
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todoitem');
    todoDiv.appendChild(newTodo);
    
    const editButton = document.createElement('button');
    editButton.innerHTML ='<i class="fas fa-edit"></i>';
    editButton.classList.add("edit-btn");
    todoDiv.appendChild(editButton);
    
    const trashButton = document.createElement('button');
    trashButton.innerHTML ='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    
    todoList.appendChild(todoDiv);
   
    todoInput.value ="";

    newTodo .addEventListener("click", function(){
        newTodo .style.textDecoration = "line-through";
    });

    editButton.addEventListener('click', function(e){
        const liParent = e.target.parentElement.parentElement;
        todoInput.value = liParent.firstElementChild.innerText;
        editFlag = true;
        editItem = liParent.firstElementChild;
    })*/

    

}

//todoList.addEventListener("click", deleteCheck);

/*function deleteCheck(e) {
    const item = e.target;
    
    if(item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    }

}*/

function showList(){
    todoList.innerHTML=""
    todoListArray.forEach(function(n,i){
        todoList.innerHTML += "<li>"+n+"<a onclick='editItem("+i+")'>edit</a>"+
        "<a onclick='deleteItem()'>&times;</a></li>"
    })
}

function deleteItem(i){
    todoListArray.splice(i,1)
    showList()
}

function editItem(i){
    var newValue = prompt("insert new value")
    todoListArray.splice(i,1,newValue)
    showList()
}
