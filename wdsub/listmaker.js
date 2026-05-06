const CHECKBOX =
  "<button onclick='checkCross(this)' class='checkbox-button'><svg viewBox='0 0 448 512' width='14' title='check-square'><path d='M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z' /></svg></button>";
const UNCHECKBOX =
  "<button onclick='uncheckCross(this)' class='checkbox-button'><svg viewBox='0 0 448 512' width='14' title='square' style='fill: grey'><path d='M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z' /></svg></button>";

let text = document.getElementById("text");
let add = document.getElementById("add");
let clear = document.getElementById("clear");
let list = document.getElementById("list");

let noItems = true;

if (document.cookie != "") loadContent();

add.addEventListener("click", () => addItem());

clear.addEventListener("click", () => {
  list.innerHTML = "<span>No Items</span>";
  noItems = true;
});

document.addEventListener("keydown", (e) => {
  if (e.code == "Enter") addItem();
});

document.addEventListener("beforeunload", () => saveContent());

function addItem() {
  if (text.value == "") return;
  if (noItems) list.innerHTML = "";
  let _newItem = document.createElement("li");
  _newItem.innerHTML = UNCHECKBOX + text.value;
  list.append(_newItem);
  text.value = "";
  text.focus();
  noItems = false;
}

function checkCross(checkbox) {
  let li = checkbox.parentElement;
  li.style.textDecoration = "none";
  li.style.color = "black";
  li.innerHTML = UNCHECKBOX + li.innerText;
}

function uncheckCross(checkbox) {
  let li = checkbox.parentElement;
  li.style.textDecoration = "line-through";
  li.style.color = "grey";
  li.innerHTML = CHECKBOX + li.innerText;
}

function saveContent() {
  document.cookie = "content=" + list.innerHTML;
}

function loadContent() {
  cookieArr = document.cookie.substring(8);
  list.innerHTML = cookieArr;
}
