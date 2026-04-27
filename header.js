let elem = document.createElement("div")
elem.innerHTML = "<link rel='stylesheet' href='https://yacpeterson.github.io/web-dev/header.css'>"
document.body.prepend(elem)

fetch("https://yacpeterson.github.io/web-dev/header.html")
  .then((result) => result.text())
  .then((text) => {elem.innerHTML = elem.innerHTML + text;})
  .catch((e) => console.error(e));
