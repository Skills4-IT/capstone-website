let count = 0;
let myTaskname = "";

function addTask() {
    count++;
   
    let element = document.getElementById("list");
    let Taskname = document.getElementById("myTask").value;
    let amoutOfTasks = document.getElementById("counter");

    myTaskname = Taskname;
    let Tasktemplate = `<li class="item list-group-item">Task ${count} ${myTaskname}</li>`;
    element.innerHTML += Tasktemplate;
    amoutOfTasks.innerHTML = `${count}`;

}

function clearTask() {
    count=0;
    let element = document.getElementById("list");
    let amoutOfTasks = document.getElementById("counter");
    amoutOfTasks.innerHTML = ``;
    element.innerHTML = " ";


}

function myCounter() 
{

}

const listItem = document.createElement("li");
    listItem.innerHTML = `
         ${item}
        <i class="fas fa-times"></i>
    `;