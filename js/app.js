let count = 0;
let myTaskname = "";

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))


/* Event Listeners */
document.getElementById("myBtn").addEventListener("click", displayDate);



function displayDate()
{
    document.getElementById("counter").innerHTML = Date();
}

function playAudio(url) {
    new Audio(url).play();
  }
function addTask() {
    count++;
   
    let element = document.getElementById("list");
    let Taskname = document.getElementById("myTask").value;
    let amoutOfTasks = document.getElementById("counter");

    myTaskname = Taskname;
    let Tasktemplate = `<li class="item list-group-item">Task ${count} ${myTaskname}<i class="fas fa-times"></li>`;
    element.innerHTML += Tasktemplate;
    amoutOfTasks.innerHTML = `${count}`;


}

function clearTask() {
    count=0;
    let element = document.getElementById("list");
    let amoutOfTasks = document.getElementById("counter");
    amoutOfTasks.innerHTML = ``;
    element.innerHTML = " ";

    const listItem = document.createElement("counter");
    listItem.innerHTML = `
         ${item}
        <i class="fas fa-times"></i>
    `;
}

function myCounter() 
{

}

const listItem = document.createElement("li");
    listItem.innerHTML = `
         ${item}
        <i class="fas fa-times"></i>
    `;