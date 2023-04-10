var tasks = [];

var taskStatus = {
    active: 'active',
    completed: 'completed'
}

//Task Constructor function
function Task(id, name, status){
    this.id = id,
    this.name = name,
    this.status = status
}

//Create a new task element and adds it to the DOM
function addTaskElement(task){
    var listEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);

    //Set attributes
    taskEl.setAttribute('id', task.id);

    //Add text to task element
    taskEl.appendChild(textEl);

    //Add task element to list
    listEl.appendChild(taskEl);
}

function addTask(event){
    var inputEl = document.getElementById('input-task');
    if(inputEl.value != ''){
        var id = 'item-' + tasks.length;

        var task = new Task(id, inputEl.value, taskStatus.active);
        tasks.push(task);

        //Add task to the DOM
        addTaskElement(task);

        //Reset input
        inputEl.value = '';
    }
}

function completeTask(event){
    var taskEl = event.target;
    var id = taskEl.id;

    //Find corresponding task in list
    for(var i = 0; i < tasks.length; i++){
        if(tasks[i].id === id){
            tasks[i].status = taskStatus.completed;
            break;
        }
    }

    //Move task element from active to completed
    taskEl.remove();
    document.getElementById('completed-list').appendChild(taskEl);
}

//Key press handler to automatically click add task button
function clickButton(event){
    if(event.keyCode === 13){
        document.getElementById('add-task').click();
    }
}

//Initialize the app
function init(){
    document.getElementById('add-task').onclick = addTask;

    document.getElementById('active-list').onclick = completeTask;

    document.getElementById('input-task').onkeypress = clickButton;
}

init();