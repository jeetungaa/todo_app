const inputBox = document.getElementById("input-box");
const list = document.getElementById("list");
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something to add it");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    save();
}

list.addEventListener("click", 
function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save();
    }
}, 
false);

function save(){
    localStorage.setItem("data", list.innerHTML);
}
function showTask(){
    list.innerHTML = localStorage.getItem("data");
}
showTask();
