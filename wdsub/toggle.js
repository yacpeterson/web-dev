let darkModeToggle = document.getElementById("dark-mode-toggle");
let isLight = true;

darkModeToggle.addEventListener("click", () => {
  if (isLight == true) setLightMode()
  else setDarkMode()
});

function setLightMode() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  darkModeToggle.innerText = "Light Mode";
  isLight = !isLight;
}

function setDarkMode() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  darkModeToggle.innerText = "Dark Mode";
  isLight = !isLight;
}
