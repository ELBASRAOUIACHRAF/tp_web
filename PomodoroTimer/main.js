let workCount = 0;
let shortBreakCount = 0;
let longBreakCount = 0;

let minutes = 0;
let seconds = 3;
let timerInterval;
let isRunning = false;

work.classList.toggle("underlined");

function resetAll(){
    workCount = 0;
    shortBreakCount = 0;
    longBreakCount = 0;
    updatecount();
    stoptime();
    resettime();
    worktime();
}



function updateTaskCount() {
    let count = document.querySelectorAll("#tasks li").length;
    document.getElementById("task-count").textContent = count;
}

function addTask() {
    let taskInput = document.getElementById("task");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let taskList = document.getElementById("tasks");
    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = function() {
        li.classList.toggle("completed");
    };

    let taskLabel = document.createElement("span");
    taskLabel.textContent = taskText;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
        updateTaskCount();
    };

    li.appendChild(checkbox);
    li.appendChild(taskLabel);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    updateTaskCount();
}

function worktime(){
    document.getElementById("minutes").textContent = String(0).padStart(2, '0');
    document.getElementById("seconds").textContent = String(3).padStart(2, '0');
    document.querySelectorAll(".options li").forEach(li => {
        li.classList.remove("underlined");
    });
    work= document.getElementById("work");
    work.classList.toggle("underlined");
}

function shortbreak(){
    document.getElementById("minutes").textContent = String(0).padStart(2, '0');
    document.getElementById("seconds").textContent = String(3).padStart(2, '0');
    document.querySelectorAll(".options li").forEach(li => {
        li.classList.remove("underlined");
    });
    short= document.getElementById("short");
    short.classList.toggle("underlined");
}

function longbreak(){
    document.getElementById("minutes").textContent = String(0).padStart(2, '0');
    document.getElementById("seconds").textContent = String(3).padStart(2, '0');
    document.querySelectorAll(".options li").forEach(li => {
        li.classList.remove("underlined");
    });
    long= document.getElementById("long");
    long.classList.toggle("underlined");
}


function updatecount(){
    document.getElementById("work").innerHTML = `Work &nbsp;&nbsp;${workCount}`;
    document.getElementById("short").innerHTML = `Short Break &nbsp;&nbsp;${shortBreakCount}`;
    document.getElementById("long").innerHTML = `Long Break &nbsp;&nbsp;${longBreakCount}`;
}

        
function updateDisplay() {
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}


function starttime() {
    if (!isRunning) {
        isRunning = true;
        minutes = parseInt(document.getElementById("minutes").textContent);
        seconds = parseInt(document.getElementById("seconds").textContent);
        timerInterval = setInterval(() => {
            if (minutes === 0 && seconds === 0) {
                clearInterval(timerInterval);
                isRunning = false;
                // document.getElementById("alarm").play();
                // alert("Time's up!");
                if (document.getElementById("work").classList.contains("underlined")) {
                    workCount++;
                    
                    if (workCount % 4 === 0) {
                        alert("It's time for a long break!");
                        updatecount();
                        longbreak();
                    } else {
                        alert("It's time for a short break!");
                        updatecount();
                        shortbreak();
                    }
                } else if (document.getElementById("short").classList.contains("underlined")) {
                    shortBreakCount++;
                    alert("come back to work !")
                    updatecount();
                    worktime();
                }else {
                    longBreakCount++;
                    alert("come back to work !")
                    updatecount();
                    worktime();
                }
                starttime(); // start the next timer
                return;
            }
            if (seconds === 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
            updateDisplay();
            }, 1000); // 1000ms = 1s
    }
}

function stoptime() {
    clearInterval(timerInterval);
    isRunning = false;
}

function resettime() {
    clearInterval(timerInterval);
    minutes = 0;
    seconds = 3;
    isRunning = false;
    updateDisplay();
}

updateDisplay();