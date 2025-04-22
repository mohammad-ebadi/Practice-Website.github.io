function addTask(){
    const input = document.getElementById("taskInput");
    const taskText = input.value;

    if(taskText){
        const taskList = document.getElementById("taskList");
        taskList.innerHTML = taskList.innerHTML + `<li>${taskText}</li>`;
        input.value = "";
    }
}