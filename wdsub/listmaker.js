let text = document.getElementById("text");
let add = document.getElementById("add");
let clear = document.getElementById("clear");
let list = document.getElementById("list");

function addItem() {
  let newItem = document.createElement("li");
  newItem.innerHTML = "<input type='checkbox'>" + text.value;
  list.append(newItem);
}

function clearList() {
  list.innerHTML = "";
}
