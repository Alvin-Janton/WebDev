
function remove(){
    const list = document.getElementById("groceryList");
    list.removeChild(list.lastElementChild);
}

function Add(){
    const list = document.getElementById("groceryList");
    const newItem = document.createElement("li");
    newItem.textContent = prompt("What item do you want to add to the list?");
    let item = "milk";
    list.appendChild(newItem);
}