let darkModeToggle = document.getElementById("dark-mode-toggle");
let onOffStatus = document.getElementById("on-off-status");

let isLight = true;

function mngMode(event) {
  if (isLight) document.body.style.backgroundColor = "black";
  else document.body.style.backgroundColor = "white";

  if (isLight) document.body.style.color = "white";
  else document.body.style.color = "black";

  if (isLight) onOffStatus.innerText = "Dark Mode";
  else onOffStatus.innerText = "Light Mode";

  isLight = !isLight;
}
