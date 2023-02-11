function createTodoObject (title ,descrp , ddl)
{
    return{title , descrp , ddl}
}
function convertTodoTohtml(todo){
    title = todo.title
    descrp=todo.descrp
    ddl=todo.ddl

    h3 = document.createElement("h3")
    titleElement = document.createTextNode(title);
    h3.appendChild(titleElement);

    h4= document.createElement("h4")
    descrpElement= document.createTextNode(descrp);
    h4.appendChild(descrpElement);

    h6 = document.createElement("h6")
    ddlElement= document.createTextNode(ddl)
    h6.appendChild(ddlElement)

    todoContainer = document.createElement("div")
    todoContainer.className = "todo"

    todoContainer.appendChild(h3)
    todoContainer.appendChild(h4)
    todoContainer.appendChild(h6)

return todoContainer

}
todoData = {
    title:"test title",
    descrp: "test description",
    ddl:2023-06-05
}

todoObject=createTodoObject("test", "descrp","21-12-2012")
todo1= convertTodoTohtml(todoObject)


closeBtn=document.getElementById("close")
closeBtn.addEventListener("click", function(){
    formContainer = document.getElementsByClassName("form")[0]
    formContainer.style.display = "none"
    form = document.getElementsByTagName("form")[0]
    form.reset()

})

function displayForm(){
    form = document.getElementsByClassName("form")[0]
    form.style.display = "block"
}
function addTodo(){
    title=document.getElementById("todoTitle").value
    descrp=document.getElementById("todoDescrp").value
    ddl= document.getElementById("todoDdl").value

    todoData = createTodoObject(title,descrp,ddl)

    todo = convertTodoTohtml(todoData)

    todoContainer= document.getElementById("todoList")
    todoContainer.appendChild(todo)
    saveTodoToLocalStorage(todoData)

}

todoObject=createTodoObject("test", "descrp","21-12-2012")
todo1= convertTodoTohtml(todoObject)

todoList=localStorage.getItem("todoList") 
todoListContainer= document.getElementById("todoList")  
if ( todoList == null){
    todoList=[]
    jsonTab=JSON.stringify([])
    localStorage.setItem("todoList",jsonTab)
}else{
    todoList = JSON.parse(todoList)
  
    todoList.forEach(function (todo){ 
        todoHtml=convertTodoTohtml(todo)
        todoListContainer.appendChild(todoHtml)
        
    });

}
function saveTodoToLocalStorage(todo){

    todoList.push(todo)
    jsonTodoList= JSON.stringify(todoList)
    localStorage.setItem("todoList", jsonTodoList)

} 
